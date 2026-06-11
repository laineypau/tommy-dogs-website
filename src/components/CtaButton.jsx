import { Link } from 'react-router-dom'

export default function CtaButton({ to, href, children, className = '' }) {
  const classes = `inline-block font-display text-xl uppercase tracking-wide bg-tommy-red text-white px-8 py-3 hover:bg-tommy-red-dark transition-colors ${className}`

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {children}
      </a>
    )
  }

  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  )
}
