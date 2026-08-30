import {
  Menu, X, ArrowRight, ArrowLeft, ArrowUp, ArrowDown,
  ChevronDown, ChevronUp, ChevronRight, ChevronLeft,
  ExternalLink, Link, Phone, Mail, Bell, Send,
  ClipboardList, BookOpen, Book, Layers, Hash,
  File, FileCheck, FileText, FileInput,
  User, Users, GraduationCap, Heart, Briefcase,
  Building2, Landmark, Award, Star,
  Shield, ShieldCheck, Scale, Lock, Unlock, Eye, EyeOff,
  MapPin, Map, Globe, Plane, Flag, Home, Compass,
  Check, CheckCircle, XCircle, AlertCircle, AlertTriangle, Info,
  Clock, Calendar, RefreshCw,
  DollarSign, TrendingUp, BarChart2,
  Wrench, Settings, Sliders, Filter, Search, ZoomIn, ZoomOut,
  Image, Video, Music, Tag, Tags,
  Stamp, IdCard, BadgeCheck, Sparkles, Cpu, Database, Code,
  Zap, Plus, Minus, List, Baby, Sun, CreditCard,
  type LucideIcon,
} from 'lucide-react'

// Map from the existing name-string API to Lucide components
const ICON_MAP: Record<string, LucideIcon> = {
  menu: Menu, x: X,
  arrowright: ArrowRight, arrowleft: ArrowLeft,
  'arrow-right': ArrowRight, 'arrow-left': ArrowLeft,
  arrowup: ArrowUp, arrowdown: ArrowDown,
  chevrondown: ChevronDown, chevronup: ChevronUp,
  chevronright: ChevronRight, chevronleft: ChevronLeft,
  'chevron-right': ChevronRight, 'chevron-left': ChevronLeft,
  externallink: ExternalLink, link: Link, external: ExternalLink,
  phone: Phone, inbox: Mail, mail: Mail,
  bell: Bell, send: Send,
  clipboard: ClipboardList, bookopen: BookOpen, book: Book,
  layers: Layers, hash: Hash,
  file: File, filecheck: FileCheck, filetext: FileText, fileinput: FileInput,
  user: User, users: Users,
  graduationcap: GraduationCap, heart: Heart,
  briefcase: Briefcase, building: Building2, building2: Building2,
  landmark: Landmark, award: Award, star: Star,
  shield: Shield, shieldcheck: ShieldCheck,
  scale: Scale, lock: Lock, unlock: Unlock,
  eye: Eye, eyeoff: EyeOff,
  mappin: MapPin, map: Map, globe: Globe,
  plane: Plane, flag: Flag, home: Home, compass: Compass,
  check: Check, checkcirc: CheckCircle, xcirc: XCircle,
  alertcirc: AlertCircle, alert: AlertTriangle, info: Info,
  clock: Clock, calendar: Calendar, refresh: RefreshCw,
  dollar: DollarSign, trendingup: TrendingUp, trending: TrendingUp, barchart: BarChart2,
  tool: Wrench, settings: Settings, sliders: Sliders,
  filter: Filter, search: Search, zoomin: ZoomIn, zoomout: ZoomOut,
  image: Image, video: Video, music: Music,
  tag: Tag, tags: Tags,
  stamp: Stamp, idcard: IdCard, badgecheck: BadgeCheck,
  sparkles: Sparkles, cpu: Cpu, database: Database, code: Code,
  zap: Zap, plus: Plus, minus: Minus, list: List,
  passport: IdCard, baby: Baby, sun: Sun, creditcard: CreditCard,
}

export interface IconProps {
  name: string
  size?: number
  color?: string
  className?: string
  'aria-hidden'?: boolean | 'true' | 'false'
}

export default function Icon({ name, size = 18, color = 'currentColor', className, 'aria-hidden': ariaHidden }: IconProps) {
  const LucideIcon = ICON_MAP[name.toLowerCase()]
  if (!LucideIcon) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`Icon: unknown name "${name}"`)
    }
    return null
  }
  return (
    <LucideIcon
      size={size}
      color={color}
      strokeWidth={1.75}
      className={className}
      aria-hidden={ariaHidden ?? true}
    />
  )
}
