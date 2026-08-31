import Icon from '@/components/ui/Icon'

export interface CostNoteProps {
  message?: string
  /** Show compact inline version (default false = full panel) */
  inline?: boolean
}

const DEFAULT_MSG =
  "Government fees for this visa are set by the Department of Home Affairs and are subject to change. " +
  "We do not publish fees on this page. Verify current fees at immi.homeaffairs.gov.au before lodging."

export function CostNote({ message = DEFAULT_MSG, inline = false }: CostNoteProps) {
  if (inline) {
    return (
      <p style={{ fontSize: 12.5, color: '#9ca3af', fontStyle: 'italic', margin: 0, lineHeight: 1.6 }}>
        {message}
      </p>
    )
  }

  return (
    <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', background: '#f8fafd', border: '1px solid #e8edf6', borderRadius: 10, padding: '14px 16px' }}>
      <Icon name="info" size={15} color="#6b7280" />
      <p style={{ fontSize: 14, color: '#6b7280', margin: 0, lineHeight: 1.65 }}>{message}</p>
    </div>
  )
}
