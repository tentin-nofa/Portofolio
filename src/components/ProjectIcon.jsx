import React from 'react'

export default function ProjectIcon({ name, color, size = 64 }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: 1.3 }

  switch (name) {
    case 'camera':
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="13" rx="2" />
          <path d="M7 21h10M9 17v4M15 17v4" />
          <circle cx="9" cy="10" r="1.4" />
          <circle cx="15" cy="10" r="1.4" />
        </svg>
      )
    case 'network':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="2" />
          <circle cx="5" cy="6" r="1.6" />
          <circle cx="19" cy="6" r="1.6" />
          <circle cx="5" cy="18" r="1.6" />
          <circle cx="19" cy="18" r="1.6" />
          <path d="M12 10L6.5 7M12 10l6.5-3M12 14l-6.5 3M12 14l6.5 3" />
        </svg>
      )
    case 'phone':
      return (
        <svg {...common}>
          <rect x="6" y="2" width="12" height="20" rx="2" />
          <circle cx="12" cy="18" r="0.6" fill={color} />
        </svg>
      )
    case 'columns':
      return (
        <svg {...common}>
          <path d="M4 4h6v16H4zM14 4h6v16h-6z" />
        </svg>
      )
    case 'check-circle':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      )
    default:
      return null
  }
}
