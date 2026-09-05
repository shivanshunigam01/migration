import React, { useState, useRef, useCallback, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GOLD, GOLD_LIGHT, NAVY, NAVY_DARK, GRADIENT_CARD_LIGHT } from '@/theme'
import { CompassDecor } from '@/components/page/CtaBand'
import NanakLogo from '@/components/layout/NanakLogo'
import Icon from '@/components/ui/Icon'
import { GlowButton } from '@/components/ui/GlowButton'
import { resolveRoute } from '@/lib/navigation'

/* ── Types ──────────────────────────────────────────────── */
type NavSubItem = { label: string; desc: string; icon: string; code?: string; href?: string; route?: string }
type NavCategory = { heading: string; icon: string; isContact?: boolean; viewAllRoute?: string; items: NavSubItem[] }
export type NavItem = { label: string; href?: string; categories?: NavCategory[] }

const PRACTICE_LINKS = [
  { label: 'About the Practice', icon: 'user', desc: 'Registered agent, credentials and our story.', route: 'about' },
  { label: 'Resources', icon: 'bookopen', desc: 'Guides, checklists and policy articles.', route: 'resources' },
  { label: 'Client Reviews', icon: 'star', desc: 'Verified client feedback.', route: 'reviews' },
  { label: 'Immigration News', icon: 'bell', desc: 'Policy updates, visa changes and DHA announcements.', route: 'news' },
  { label: 'Tools', icon: 'tool', desc: 'Free interactive calculators and comparison tools.', route: 'tools' },
  { label: 'Contact', icon: 'phone', desc: 'Get in touch with our team.', route: 'contact' },
]

/* ── Routing helper ─────────────────────────────────────── */
function resolveNavHref(topLabel: string, item: NavSubItem): string | undefined {
  if (item.route) return resolveRoute(item.route)
  if (item.href && item.href !== '#') return item.href
  return undefined
}

function resolveNavClick(
  _topLabel: string,
  item: NavSubItem,
  navigate: (page: string) => void,
  closeNav: () => void,
): ((e: React.MouseEvent) => void) | undefined {
  const href = resolveNavHref(_topLabel, item)
  if (!href || !item.route) return undefined
  return (e: React.MouseEvent) => {
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) return
    e.preventDefault()
    closeNav()
    navigate(item.route!)
  }
}

/* ── SiteHeader ─────────────────────────────────────────── */
export default function SiteHeader({
  navigate,
  navItems,
}: {
  navigate: (page: string) => void
  navItems: NavItem[]
}) {
  const [openNav, setOpenNav] = useState<string | null>(null)
  const [pinnedNav, setPinnedNav] = useState<string | null>(null)
  const [openToolsHub, setOpenToolsHub] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)

  // Hover-intent refs
  const openTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const insideNavRef = useRef(false)  // true while cursor is anywhere inside the header nav zone

  const clearTimers = () => {
    if (openTimerRef.current) { clearTimeout(openTimerRef.current); openTimerRef.current = null }
    if (closeTimerRef.current) { clearTimeout(closeTimerRef.current); closeTimerRef.current = null }
  }

  // Hard close — used by Escape, outside-click, navigate
  const closeNav = useCallback(() => {
    clearTimers()
    setPinnedNav(null)
    setOpenNav(null)
    setOpenToolsHub(false)
  }, [])

  // Schedule a close after 300ms; cancelled if cursor re-enters nav zone
  const scheduleClose = useCallback(() => {
    if (closeTimerRef.current) return
    closeTimerRef.current = setTimeout(() => {
      closeTimerRef.current = null
      // Only close if not pinned and cursor has truly left
      setPinnedNav(prev => {
        if (prev) return prev  // pinned — don't close
        setOpenNav(null)
        setOpenToolsHub(false)
        return null
      })
    }, 300)
  }, [])

  // Called whenever cursor enters any trigger or panel
  const cancelClose = useCallback(() => {
    if (closeTimerRef.current) { clearTimeout(closeTimerRef.current); closeTimerRef.current = null }
  }, [])

  // Open a panel — 80ms delay on first open, instant swap if already open
  const openPanel = useCallback((key: string) => {
    cancelClose()
    setOpenNav(prev => {
      if (prev !== null && prev !== key) {
        // Already open on a different panel — swap instantly
        if (openTimerRef.current) { clearTimeout(openTimerRef.current); openTimerRef.current = null }
        return key
      }
      return prev
    })
    if (openTimerRef.current) return
    openTimerRef.current = setTimeout(() => {
      openTimerRef.current = null
      setOpenNav(key)
    }, 80)
  }, [cancelClose])

  // Toggle pin on click
  const togglePin = useCallback((key: string) => {
    setPinnedNav(prev => {
      if (prev === key) {
        // Unpin and close
        setOpenNav(null)
        return null
      }
      setOpenNav(key)
      return key
    })
  }, [])

  // Escape key + outside click close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeNav() }
    const onOutside = (e: MouseEvent) => {
      const header = document.getElementById('site-header-root')
      if (header && !header.contains(e.target as Node)) closeNav()
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onOutside)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onOutside)
    }
  }, [closeNav])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.classList.toggle('menu-open', mobileOpen)
    return () => document.body.classList.remove('menu-open')
  }, [mobileOpen])

  const activeNavItem = navItems.find(i => i.label === openNav) ?? null
  const megaCols = Math.min(activeNavItem?.categories?.length ?? 0, 5)
  const catColors = ['#1B2B5E','#1B2B5E','#1B2B5E','#1B2B5E','#1B2B5E','#1B2B5E']

  return (
    <>
      {/* ── ANNOUNCEMENT BAR (above navbar) ──────────────── */}
      <div className="announcement-bar" style={{ background: '#111E3E', padding: '0 24px', borderBottom: '1px solid rgba(232,160,23,0.22)' }}>
        <div className="announcement-bar-inner" style={{ maxWidth: 1200, margin: '0 auto', height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
          <span className="announcement-badges" style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: GOLD, flexShrink: 0 }}>
            Employers · 482 / 186
          </span>
          <span className="announcement-divider" style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.18)', flexShrink: 0 }} />
          <span className="announcement-text" style={{ fontSize: 14, color: 'rgba(255,255,255,0.82)', whiteSpace: 'nowrap', letterSpacing: '0.01em' }}>
            <strong style={{ fontWeight: 700, color: '#ffffff' }}>Sponsoring staff?</strong>{' '}Employer readiness discussion — no charge.
          </span>
          <a href="mailto:visa@nanakmigration.com.au?subject=Employer%20sponsorship%20readiness%20discussion" className="announcement-cta"
            style={{ flexShrink: 0, fontSize: 13, fontWeight: 700, color: NAVY_DARK, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6, padding: '8px 16px', borderRadius: 8, background: GOLD, boxShadow: '0 2px 10px rgba(232,160,23,0.28)', transition: 'all 0.15s', whiteSpace: 'nowrap' }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = GOLD_LIGHT }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = GOLD }}
          >
            Request a discussion
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M7 3l3 3-3 3" stroke={NAVY_DARK} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </div>

      {/* ── STICKY NAV ───────────────────────────────────── */}
      <header id="site-header-root" className="site-header-pad" style={{ position: 'sticky', top: 0, zIndex: 50, padding: '0 32px', overflow: 'visible', background: '#EBEDE9', borderBottom: '1px solid rgba(17,30,62,0.1)', boxShadow: '0 4px 18px rgba(17,30,62,0.06)' }}
        onMouseLeave={scheduleClose}
        onMouseEnter={cancelClose}>
        <div style={{ maxWidth: 1400, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 32, height: 72 }}>

          {/* Logo */}
          <button onClick={() => navigate('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, flexShrink: 0 }} aria-label="Nanak Migration Group home">
            <NanakLogo size={42} />
          </button>

          {/* Desktop nav */}
          <nav className="nav-desktop" style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 2 }}>
            {navItems.map((item) => {
              const isOpen = openNav === item.label
              const isPinned = pinnedNav === item.label
              return (
                <div key={item.label} onMouseEnter={() => openPanel(item.label)}>
                  <button
                    onClick={() => togglePin(item.label)}
                    aria-expanded={isOpen}
                    className="nav-top-link"
                    style={{
                      display: 'flex', alignItems: 'center', gap: 5, padding: '10px 14px',
                      color: isOpen ? '#111E3E' : 'rgba(17,30,62,0.78)',
                      background: isOpen ? 'rgba(17,30,62,0.14)' : 'transparent',
                      border: isPinned ? '1px solid rgba(232,160,23,0.55)' : '1px solid transparent',
                      cursor: 'pointer', fontSize: 14, fontWeight: isOpen ? 600 : 500,
                      letterSpacing: '0.01em', borderRadius: 8,
                      transition: 'color 0.15s, background 0.15s, box-shadow 0.15s, border-color 0.15s',
                      whiteSpace: 'nowrap', fontFamily: "'Gilroy', sans-serif",
                      boxShadow: isOpen ? 'inset 0 -2.5px 0 #8F968E' : 'inset 0 -2.5px 0 transparent',
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement
                      if (!isOpen) {
                        el.style.color = '#111E3E'
                        el.style.background = 'rgba(17,30,62,0.10)'
                        el.style.boxShadow = 'inset 0 -2.5px 0 #A3A9A1'
                      }
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement
                      if (!isOpen) {
                        el.style.color = 'rgba(17,30,62,0.78)'
                        el.style.background = 'transparent'
                        el.style.boxShadow = 'inset 0 -2.5px 0 transparent'
                      }
                    }}
                  >
                    {item.label}
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none"
                      style={{ opacity: isOpen ? 1 : 0.45, transition: 'opacity 0.15s, transform 0.2s', transform: isOpen ? 'rotate(180deg)' : 'none', color: isOpen ? GOLD : 'currentColor' }}>
                      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>
              )
            })}

            {/* Practice dropdown */}
            <div style={{ position: 'relative' }} onMouseEnter={() => openPanel('__practice__')}>
              <button
                onClick={() => togglePin('__practice__')}
                aria-expanded={openNav === '__practice__'}
                style={{
                  display: 'flex', alignItems: 'center', gap: 6, padding: '9px 15px',
                  color: openNav === '__practice__' ? '#111E3E' : 'rgba(17,30,62,0.72)',
                  background: openNav === '__practice__' ? 'rgba(232,160,23,0.14)' : 'transparent',
                  border: '1px solid', borderColor: openNav === '__practice__' ? 'rgba(232,160,23,0.55)' : pinnedNav === '__practice__' ? 'rgba(232,160,23,0.7)' : 'rgba(17,30,62,0.18)',
                  cursor: 'pointer', fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', borderRadius: 8,
                  transition: 'color 0.15s, background 0.15s, border-color 0.15s', whiteSpace: 'nowrap',
                  fontFamily: "'Gilroy', sans-serif", textTransform: 'uppercase', marginLeft: 6,
                }}>
                <Icon name="building" size={12} color="currentColor" />
                Practice
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none"
                  style={{ opacity: 0.6, transition: 'transform 0.2s', transform: openNav === '__practice__' ? 'rotate(180deg)' : 'none' }}>
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>

              {openNav === '__practice__' && (
                <div
                  onMouseEnter={cancelClose}
                  onMouseLeave={scheduleClose}
                  style={{ position: 'absolute', top: 'calc(100% + 10px)', right: 0, backgroundColor: '#ffffff', borderRadius: 14, boxShadow: '0 16px 56px rgba(0,0,0,0.16), 0 2px 8px rgba(0,0,0,0.06)', border: '1px solid #e8eaf0', zIndex: 400, width: 680, maxWidth: 'calc(100vw - 48px)' }}>
                  {/* Invisible hover bridge */}
                  <div style={{ position: 'absolute', top: -10, left: 0, right: 0, height: 10, background: 'transparent' }} />
                  {/* Three-column body */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0 }}>

                    {/* Column 1: The Practice */}
                    <div style={{ padding: '24px 20px 20px', borderRight: '1px solid #f0f2f7' }}>
                      <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: GOLD, marginBottom: 10, fontFamily: "'Gilroy', sans-serif" }}>The Practice</div>
                      <div style={{ height: 1, background: '#f0f2f7', marginBottom: 12 }} />
                      {[
                        { label: 'About the Practice', desc: 'Who we are and how we work', icon: 'user', route: 'about', emph: false },
                        { label: 'Contact', desc: 'Melbourne, Sydney, Brisbane and Perth', icon: 'phone', route: 'contact', emph: false },
                        { label: 'Book Free Consultation', desc: 'Free 30-minute consultation', icon: 'calendar', route: 'book-consultation', emph: true },
                      ].map(l => (
                        <Link key={l.label} to={resolveRoute(l.route)}
                          onClick={() => closeNav()}
                          style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '8px 6px', borderRadius: 8, textDecoration: 'none', transition: 'background 0.12s', background: l.emph ? `${GOLD}12` : 'transparent', marginBottom: l.emph ? 0 : 2 }}
                          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = l.emph ? `${GOLD}22` : `${NAVY}08` }}
                          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = l.emph ? `${GOLD}12` : 'transparent' }}>
                          <span style={{ width: 30, height: 30, borderRadius: 7, background: l.emph ? `${GOLD}22` : `${NAVY}0e`, border: l.emph ? `1.5px solid ${GOLD}44` : `1.5px solid ${NAVY}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                            <Icon name={l.icon} size={13} color={l.emph ? NAVY : NAVY} />
                          </span>
                          <div>
                            <div style={{ fontSize: 14, fontWeight: l.emph ? 700 : 600, color: l.emph ? NAVY : '#1E1E2A', fontFamily: "'Gilroy', sans-serif", lineHeight: 1.3 }}>{l.label}</div>
                            <div style={{ fontSize: 12, color: '#9890b0', fontFamily: "'Gilroy', sans-serif", marginTop: 2, lineHeight: 1.4 }}>{l.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Column 2: Free Tools */}
                    <div style={{ padding: '24px 20px 20px', borderRight: '1px solid #f0f2f7' }}>
                      <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: GOLD, marginBottom: 10, fontFamily: "'Gilroy', sans-serif" }}>Free Tools</div>
                      <div style={{ height: 1, background: '#f0f2f7', marginBottom: 12 }} />
                      {[
                        { label: 'Points Calculator', desc: 'Estimate your SkillSelect score', icon: 'hash', anchor: 'points-calculator' },
                        { label: 'Occupation Search', desc: 'Find your ANZSCO code', icon: 'layers', anchor: 'occupation-search' },
                        { label: 'English Converter', desc: 'Map IELTS / PTE to visa levels', icon: 'bookopen', anchor: 'english-score-converter' },
                        { label: 'Visa Comparison', desc: 'Compare two visa subclasses', icon: 'arrowright', anchor: 'visa-pathway-comparison' },
                      ].map(l => (
                        <Link key={l.label} to={`/tools#${l.anchor}`}
                          onClick={() => {
                            closeNav()
                            navigate('tools')
                            setTimeout(() => {
                              const el = document.getElementById(l.anchor)
                              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                            }, 80)
                          }}
                          style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '8px 6px', borderRadius: 8, textDecoration: 'none', transition: 'background 0.12s', marginBottom: 2 }}
                          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = `${NAVY}08` }}
                          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent' }}>
                          <span style={{ width: 30, height: 30, borderRadius: 7, background: `${NAVY}0e`, border: `1.5px solid ${NAVY}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                            <Icon name={l.icon} size={13} color={NAVY} />
                          </span>
                          <div>
                            <div style={{ fontSize: 14, fontWeight: 600, color: '#1E1E2A', fontFamily: "'Gilroy', sans-serif", lineHeight: 1.3 }}>{l.label}</div>
                            <div style={{ fontSize: 12, color: '#9890b0', fontFamily: "'Gilroy', sans-serif", marginTop: 2, lineHeight: 1.4 }}>{l.desc}</div>
                          </div>
                        </Link>
                      ))}
                      {/* View all tools quiet row */}
                      <Link to="/tools" onClick={() => closeNav()}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 8, padding: '8px 10px', backgroundColor: `${NAVY}0d`, borderRadius: 8, border: `1px solid ${NAVY}18`, textDecoration: 'none', transition: 'background 0.12s' }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = `${NAVY}18` }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = `${NAVY}0d` }}>
                        <span style={{ fontSize: 13, fontWeight: 600, color: NAVY, fontFamily: "'Gilroy', sans-serif" }}>All tools</span>
                        <span style={{ fontSize: 15, color: NAVY, fontWeight: 700 }}>›</span>
                      </Link>
                    </div>

                    {/* Column 3: Resources */}
                    <div style={{ padding: '24px 20px 20px' }}>
                      <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: GOLD, marginBottom: 10, fontFamily: "'Gilroy', sans-serif" }}>Resources</div>
                      <div style={{ height: 1, background: '#f0f2f7', marginBottom: 12 }} />
                      {[
                        { label: 'Visa Guides', desc: 'All 30 visa topics explained', icon: 'bookopen', route: 'guides' },
                        { label: 'Blog', desc: 'Policy updates and migration news', icon: 'layers', route: 'blog' },
                        { label: 'Checklists', desc: 'Document checklists for key visas', icon: 'clipboard', route: 'checklists' },
                        { label: 'Resources Hub', desc: 'Guides, blog and checklists', icon: 'bookopen', route: 'resources' },
                        { label: 'Client Reviews', desc: 'Verified Google reviews from our clients', icon: 'star', route: 'reviews' },
                        { label: 'Immigration News', desc: 'Policy updates, occupation list changes', icon: 'bell', route: 'news' },
                      ].map(l => (
                        <Link key={l.label} to={resolveRoute(l.route)}
                          onClick={() => closeNav()}
                          style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '8px 6px', borderRadius: 8, textDecoration: 'none', transition: 'background 0.12s', marginBottom: 2 }}
                          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = `${NAVY}08` }}
                          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent' }}>
                          <span style={{ width: 30, height: 30, borderRadius: 7, background: `${NAVY}0e`, border: `1.5px solid ${NAVY}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                            <Icon name={l.icon} size={13} color={NAVY} />
                          </span>
                          <div>
                            <div style={{ fontSize: 14, fontWeight: 600, color: '#1E1E2A', fontFamily: "'Gilroy', sans-serif", lineHeight: 1.3 }}>{l.label}</div>
                            <div style={{ fontSize: 12, color: '#9890b0', fontFamily: "'Gilroy', sans-serif", marginTop: 2, lineHeight: 1.4 }}>{l.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Footer strip */}
                  <div style={{ borderTop: '1px solid #f0f2f7', padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 16, background: '#fafbfe', borderRadius: '0 0 14px 14px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '3px 10px', borderRadius: 100, background: `${NAVY}0e`, border: `1px solid ${NAVY}18`, fontSize: 11, fontWeight: 700, color: NAVY, fontFamily: "'Gilroy', sans-serif", letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>
                      <Icon name="shield" size={9} color={GOLD} />
                      MARA REGISTERED · MARN 2619467
                    </span>
                    <a href="https://portal.mara.gov.au/search-the-register-of-migration-agents/" target="_blank" rel="noopener noreferrer"
                      style={{ fontSize: 12, color: '#9ca3af', textDecoration: 'none', fontFamily: "'Gilroy', sans-serif", whiteSpace: 'nowrap', transition: 'color 0.12s' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = GOLD }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#9ca3af' }}>
                      Verify on OMARA register ↗
                    </a>
                    <span style={{ flex: 1 }} />
                    <a href="tel:1300644728"
                      style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, fontWeight: 600, color: NAVY, textDecoration: 'none', fontFamily: "'Gilroy', sans-serif", whiteSpace: 'nowrap', transition: 'color 0.12s' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = GOLD }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = NAVY }}>
                      <Icon name="phone" size={11} color="currentColor" />
                      1300 644 728
                    </a>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Desktop CTA */}
          <GlowButton
            as="a"
            href="/book-consultation" className="nav-cta-desktop"
            size="md"
            variant="gold"
            style={{ flexShrink: 0, whiteSpace: 'nowrap' }}
            onClick={(e) => { e.preventDefault(); navigate('book-consultation') }}
          >
            Book Consultation
          </GlowButton>

          {/* Hamburger (mobile) */}
          <button className="nav-hamburger" onClick={() => setMobileOpen(v => !v)}
            style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 8, color: '#111E3E', marginLeft: 'auto' }}
            aria-label="Toggle menu">
            <Icon name={mobileOpen ? 'x' : 'menu'} size={24} color="#111E3E" />
          </button>
        </div>

        {/* ── MEGA-MENU PANEL ─────────────────────────────── */}
        {openNav && activeNavItem?.categories && (
          <div className="mega-menu-panel"
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
            style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', width: '100vw', backgroundColor: '#ffffff', borderTop: '1px solid #e5e7eb', boxShadow: '0 16px 48px rgba(0,0,0,0.12)', zIndex: 300 }}>
            {/* Invisible hover bridge — covers the gap between nav bar bottom and panel top */}
            <div style={{ position: 'absolute', top: -12, left: 0, right: 0, height: 12, background: 'transparent' }} />
            <div style={{ maxWidth: 1400, margin: '0 auto', padding: '28px 40px 0', display: 'grid', gridTemplateColumns: `repeat(${megaCols}, 1fr)`, gap: 0 }}>
              {activeNavItem.categories.map((cat, ci) => {
                const iconColor = catColors[ci % catColors.length]
                if (cat.isContact) return (
                  <div key={cat.heading} style={{ paddingLeft: 24, borderLeft: '1px solid #f0f0f4', display: 'flex', flexDirection: 'column', gap: 0 }}>
                    {/* Light brand-gradient card — WCAG AA verified against deepest stop #d9e4f8 */}
                    <div style={{ flex: 1, background: GRADIENT_CARD_LIGHT, borderRadius: 14, border: '1px solid #c8d8f0', borderTop: `3px solid ${GOLD}`, boxShadow: '0 4px 20px rgba(27,43,94,0.10)', padding: '20px 18px', display: 'flex', flexDirection: 'column', gap: 0, marginBottom: 28, position: 'relative', overflow: 'hidden' }}>
                      {/* Subtle gold radial glow anchored behind badge area */}
                      <div style={{ position: 'absolute', top: -24, left: -24, width: 120, height: 120, borderRadius: '50%', background: `radial-gradient(circle, rgba(245,161,36,0.06) 0%, transparent 70%)`, pointerEvents: 'none' }} />
                      {/* Compass + Southern Cross — decorative, behind content */}
                      <CompassDecor size={340} compassColor={NAVY} compassOpacity={0.055} starColor={GOLD} starOpacity={0.12} />
                      {/* MARA badge row */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                        <div style={{ width: 34, height: 34, borderRadius: 9, backgroundColor: `${NAVY}12`, border: `1.5px solid ${NAVY}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <Icon name="shield" size={15} color={NAVY} />
                        </div>
                        <div>
                          <div style={{ fontSize: 12, fontWeight: 800, color: GOLD, fontFamily: "'Gilroy', sans-serif", letterSpacing: '0.08em', textTransform: 'uppercase' }}>MARA REGISTERED</div>
                          <div style={{ fontSize: 11, color: '#64748b', fontFamily: "'Gilroy', sans-serif", marginTop: 1 }}>MARN 2619467</div>
                        </div>
                      </div>
                      {/* Heading + subline */}
                      <div style={{ fontSize: 16, fontWeight: 700, color: NAVY, fontFamily: "'Gilroy', sans-serif", lineHeight: 1.3, marginBottom: 4 }}>MARA-Registered Migration Agent</div>
                      <div style={{ fontSize: 13, color: '#475569', fontFamily: "'Gilroy', sans-serif", lineHeight: 1.55, marginBottom: 16 }}>Navpreet Aulakh — helping skilled workers, students and families move to Australia.</div>
                      {/* Contact rows */}
                      {[
                        { icon: 'phone', label: 'Call 1300 644 728', href: 'tel:1300644728' },
                        { icon: 'inbox', label: 'visa@nanakmigration.com.au', href: 'mailto:visa@nanakmigration.com.au' },
                      ].map(c => (
                        <a key={c.label} href={c.href} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8, textDecoration: 'none', transition: 'color 0.12s' }}
                          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = GOLD }}
                          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '' }}>
                          <div style={{ width: 26, height: 26, borderRadius: 7, backgroundColor: `${NAVY}10`, border: `1px solid ${NAVY}1a`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <Icon name={c.icon} size={11} color={NAVY} />
                          </div>
                          <span style={{ fontSize: 13, color: NAVY, fontFamily: "'Gilroy', sans-serif", fontWeight: 500 }}>{c.label}</span>
                        </a>
                      ))}
                      {/* Divider + link groups */}
                      <div style={{ borderTop: '1px solid #dde6f5', marginTop: 12, paddingTop: 12 }}>
                        <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 10px' }}>
                          {/* Free Tools */}
                          <div>
                            <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: GOLD, marginBottom: 6, fontFamily: "'Gilroy', sans-serif" }}>Free Tools</div>
                            {[
                              { label: 'Points Calculator', anchor: 'points-calculator', icon: 'hash' },
                              { label: 'Occupation Search', anchor: 'occupation-search', icon: 'layers' },
                              { label: 'English Converter', anchor: 'english-score-converter', icon: 'bookopen' },
                              { label: 'All Tools', anchor: '', icon: 'arrowright' },
                            ].map(l => (
                              <Link key={l.label} to={l.anchor ? `/tools#${l.anchor}` : '/tools'}
                                onClick={() => {
                                  closeNav()
                                  navigate('tools')
                                  setTimeout(() => {
                                    if (l.anchor) {
                                      const el = document.getElementById(l.anchor)
                                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                                    }
                                  }, 80)
                                }}
                                style={{ display: 'flex', alignItems: 'center', gap: 5, minHeight: 28, textDecoration: 'none', fontFamily: "'Gilroy', sans-serif", fontSize: 13, color: NAVY, fontWeight: 500, transition: 'color 0.12s' }}
                                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = GOLD }}
                                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = NAVY }}>
                                <Icon name={l.icon} size={10} color="#94a3b8" />
                                {l.label}
                              </Link>
                            ))}
                          </div>
                          {/* Resources */}
                          <div>
                            <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: GOLD, marginBottom: 6, fontFamily: "'Gilroy', sans-serif" }}>Resources</div>
                            {[
                              { label: 'Visa Guides', route: 'guides', icon: 'bookopen' },
                              { label: 'Checklists', route: 'checklists', icon: 'clipboard' },
                              { label: 'Blog', route: 'blog', icon: 'layers' },
                            ].map(l => (
                              <Link key={l.label} to={resolveRoute(l.route)}
                                onClick={() => closeNav()}
                                style={{ display: 'flex', alignItems: 'center', gap: 5, minHeight: 28, textDecoration: 'none', fontFamily: "'Gilroy', sans-serif", fontSize: 13, color: NAVY, fontWeight: 500, transition: 'color 0.12s' }}
                                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = GOLD }}
                                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = NAVY }}>
                                <Icon name={l.icon} size={10} color="#94a3b8" />
                                {l.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                        {/* MARA Verification micro-link */}
                        <a href="https://portal.mara.gov.au/search-the-register-of-migration-agents/" target="_blank" rel="noopener noreferrer"
                          style={{ display: 'inline-flex', alignItems: 'center', gap: 4, marginTop: 10, fontSize: 11, color: '#94a3b8', textDecoration: 'none', fontFamily: "'Gilroy', sans-serif", transition: 'color 0.12s' }}
                          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = GOLD }}
                          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#94a3b8' }}>
                          <Icon name="shield" size={9} color="#94a3b8" />
                          MARA Verification Register ↗
                        </a>
                      </div>
                      {/* Gold button — unchanged */}
                      <a href="/book-consultation" onClick={(e) => { e.preventDefault(); navigate('book-consultation') }} style={{ marginTop: 16, backgroundColor: GOLD, color: NAVY_DARK, padding: '11px 16px', borderRadius: 8, textDecoration: 'none', fontSize: 14, fontWeight: 700, fontFamily: "'Gilroy', sans-serif", display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, transition: 'background 0.15s' }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = GOLD_LIGHT }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = GOLD }}>
                        Book Free Consultation
                        <Icon name="arrowright" size={13} color={NAVY_DARK} />
                      </a>
                    </div>
                  </div>
                )

                return (
                  <div key={cat.heading} style={{ borderRight: ci < megaCols - 1 ? '1px solid #f0f0f4' : 'none', paddingRight: ci < megaCols - 1 ? 24 : 0, paddingLeft: ci > 0 ? 24 : 0, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16, paddingBottom: 14, borderBottom: '1px solid #f0f0f4' }}>
                      <div style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: iconColor, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Icon name={cat.icon} size={20} color="#ffffff" />
                      </div>
                      <span style={{ fontSize: 16, fontWeight: 700, color: '#1E1E2A', fontFamily: "'Gilroy', sans-serif", lineHeight: 1.2 }}>{cat.heading}</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                      {cat.items.map(navItem => {
                        const href = resolveNavHref(activeNavItem.label, navItem)
                        const clickHandler = resolveNavClick(activeNavItem.label, navItem, navigate, closeNav)
                        if (!href) {
                          return (
                            <span key={navItem.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '10px 8px', opacity: 0.5 }}>
                              <div style={{ flexShrink: 0, width: 32, height: 32, borderRadius: 7, border: `1.5px solid ${iconColor}22`, backgroundColor: `${iconColor}10`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1 }}>
                                <Icon name={navItem.icon} size={14} color={iconColor} />
                              </div>
                              <div style={{ flex: 1, minWidth: 0 }}>
                                <div style={{ fontSize: 14.5, fontWeight: 600, color: '#1E1E2A', fontFamily: "'Gilroy', sans-serif" }}>{navItem.label}</div>
                                <div style={{ fontSize: 12.5, color: '#9890b0' }}>{navItem.desc}</div>
                              </div>
                            </span>
                          )
                        }
                        return (
                          <Link key={navItem.label} to={href}
                            onClick={clickHandler}
                            style={{
                              display: 'flex', alignItems: 'flex-start', gap: 12,
                              padding: '10px 8px', borderRadius: 8, textDecoration: 'none',
                              transition: 'background 0.12s', cursor: 'pointer',
                            }}
                            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = `${iconColor}08` }}
                            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent' }}
                          >
                            <div style={{ flexShrink: 0, width: 32, height: 32, borderRadius: 7, border: `1.5px solid ${iconColor}22`, backgroundColor: `${iconColor}10`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1 }}>
                              <Icon name={navItem.icon} size={14} color={iconColor} />
                            </div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div style={{ fontSize: 14.5, fontWeight: 600, color: '#1E1E2A', fontFamily: "'Gilroy', sans-serif", lineHeight: 1.3, marginBottom: 2 }}>
                                {navItem.label}
                                {navItem.code && (
                                  <span style={{ display: 'inline-block', marginLeft: 6, fontSize: 10.5, fontWeight: 700, color: iconColor, backgroundColor: `${iconColor}12`, border: `1px solid ${iconColor}28`, padding: '1px 5px', borderRadius: 4, verticalAlign: 'middle', letterSpacing: '0.04em', fontFamily: "'Gilroy', sans-serif", lineHeight: 1.6 }}>{navItem.code}</span>
                                )}
                              </div>
                              <div style={{ fontSize: 12.5, color: '#9890b0', fontFamily: "'Gilroy', sans-serif", lineHeight: 1.4, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical' as const }}>{navItem.desc}</div>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                    {(() => {
                      const viewAll = cat.viewAllRoute
                        || cat.items.find(i => i.code === 'Hub')?.route
                        || cat.items[0]?.route
                      if (!viewAll) return null
                      const hubHref = resolveRoute(viewAll)
                      return (
                        <Link to={hubHref}
                          onClick={() => { closeNav(); navigate(viewAll) }}
                          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 12, padding: '10px 12px', backgroundColor: `${iconColor}0d`, borderRadius: 8, border: `1px solid ${iconColor}18`, textDecoration: 'none', transition: 'background 0.12s' }}
                          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = `${iconColor}18` }}
                          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = `${iconColor}0d` }}>
                          <span style={{ fontSize: 13.5, fontWeight: 600, color: iconColor, fontFamily: "'Gilroy', sans-serif" }}>View All {cat.heading}</span>
                          <span style={{ fontSize: 15, color: iconColor, fontWeight: 700 }}>›</span>
                        </Link>
                      )
                    })()}
                    <div style={{ height: 28 }} />
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </header>

      {/* ── MOBILE MENU ──────────────────────────────────── */}
      {mobileOpen && (
        <div className="mobile-menu" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: '#111E3E', zIndex: 200, overflowY: 'auto', paddingTop: 80 }}>
          <button onClick={() => setMobileOpen(false)}
            style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', cursor: 'pointer', color: '#ffffff' }}>
            <Icon name="x" size={28} color="#ffffff" />
          </button>
          <div style={{ padding: '0 24px 40px' }}>
            {navItems.map(item => (
              <div key={item.label} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0', background: 'none', border: 'none', cursor: 'pointer', color: '#ffffff', fontSize: 17, fontWeight: 600, fontFamily: "'Gilroy', sans-serif" }}
                >
                  {item.label}
                  <svg width="16" height="10" viewBox="0 0 10 6" fill="none" style={{ transition: 'transform 0.2s', transform: mobileExpanded === item.label ? 'rotate(180deg)' : 'none', opacity: 0.6 }}>
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
                {mobileExpanded === item.label && item.categories && (
                  <div style={{ paddingBottom: 12, maxHeight: '60vh', overflowY: 'auto' }}>
                    {item.categories.filter(c => !c.isContact).map(cat => (
                      <div key={cat.heading} style={{ marginBottom: 16 }}>
                        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: GOLD, marginBottom: 8, paddingLeft: 4 }}>{cat.heading}</div>
                        {cat.items.map(navItem => {
                          const clickHandler = resolveNavClick(item.label, navItem, navigate, () => { closeNav(); setMobileOpen(false) })
                          return (
                            <button key={navItem.label}
                              onClick={clickHandler ? (e) => { clickHandler(e); setMobileOpen(false) } : undefined}
                              style={{ display: 'block', width: '100%', textAlign: 'left', padding: '12px 12px', minHeight: 44, background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.8)', fontSize: 17, fontFamily: "'Gilroy', sans-serif", borderRadius: 6 }}
                            >
                              {navItem.label}
                            </button>
                          )
                        })}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {/* Practice accordion in mobile drawer */}
            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <button
                onClick={() => setMobileExpanded(mobileExpanded === '__practice__' ? null : '__practice__')}
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0', background: 'none', border: 'none', cursor: 'pointer', color: '#ffffff', fontSize: 17, fontWeight: 600, fontFamily: "'Gilroy', sans-serif" }}>
                Practice
                <svg width="16" height="10" viewBox="0 0 10 6" fill="none" style={{ transition: 'transform 0.2s', transform: mobileExpanded === '__practice__' ? 'rotate(180deg)' : 'none', opacity: 0.6 }}>
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
              {mobileExpanded === '__practice__' && (
                <div style={{ paddingBottom: 16 }}>
                  {/* Group: The Practice */}
                  <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: GOLD, marginBottom: 6, paddingLeft: 4, fontFamily: "'Gilroy', sans-serif" }}>The Practice</div>
                  {[
                    { label: 'About the Practice', route: 'about' },
                    { label: 'Client Reviews', route: 'reviews' },
                    { label: 'Immigration News', route: 'news' },
                    { label: 'Contact', route: 'contact' },
                  ].map(l => (
                    <button key={l.label} onClick={() => { navigate(l.route); setMobileOpen(false) }}
                      style={{ display: 'block', width: '100%', textAlign: 'left', padding: '12px 12px', minHeight: 44, background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.8)', fontSize: 16, fontFamily: "'Gilroy', sans-serif", borderRadius: 6 }}>
                      {l.label}
                    </button>
                  ))}
                  {/* Group: Free Tools */}
                  <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: GOLD, margin: '10px 0 6px', paddingLeft: 4, fontFamily: "'Gilroy', sans-serif" }}>Free Tools</div>
                  {[
                    { label: 'Points Calculator', anchor: 'points-calculator' },
                    { label: 'Occupation Search', anchor: 'occupation-search' },
                    { label: 'English Converter', anchor: 'english-score-converter' },
                    { label: 'Visa Comparison', anchor: 'visa-pathway-comparison' },
                    { label: 'All Tools', anchor: '' },
                  ].map(l => (
                    <button key={l.label} onClick={() => { navigate('tools'); setTimeout(() => { if (l.anchor) { const el = document.getElementById(l.anchor); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }) } }, 80); setMobileOpen(false) }}
                      style={{ display: 'block', width: '100%', textAlign: 'left', padding: '12px 12px', minHeight: 44, background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.8)', fontSize: 16, fontFamily: "'Gilroy', sans-serif", borderRadius: 6 }}>
                      {l.label}
                    </button>
                  ))}
                  {/* Group: Resources */}
                  <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: GOLD, margin: '10px 0 6px', paddingLeft: 4, fontFamily: "'Gilroy', sans-serif" }}>Resources</div>
                  {[
                    { label: 'Visa Guides', route: 'guides' },
                    { label: 'Blog', route: 'blog' },
                    { label: 'Checklists', route: 'checklists' },
                    { label: 'Resources Hub', route: 'resources' },
                  ].map(l => (
                    <button key={l.label} onClick={() => { navigate(l.route); setMobileOpen(false) }}
                      style={{ display: 'block', width: '100%', textAlign: 'left', padding: '12px 12px', minHeight: 44, background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.8)', fontSize: 16, fontFamily: "'Gilroy', sans-serif", borderRadius: 6 }}>
                      {l.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div style={{ marginTop: 24 }}>
              <GlowButton
                as="a"
                href="/book-consultation"
                block
                size="md"
                variant="gold"
                onClick={(e) => { e.preventDefault(); navigate('book-consultation'); setMobileOpen(false) }}
              >
                Book Free Consultation
              </GlowButton>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
