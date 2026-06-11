import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'

const links = [
  { to: '/menu', label: 'Menu' },
  { to: '/catering', label: 'Catering' },
  { to: '/locations', label: 'Locations' },
  { to: '/shop', label: 'Shop' },
  { to: '/explore', label: 'Explore' },
]

const navLinkClasses = ({ isActive }) =>
  `font-display text-xl uppercase tracking-wide px-3 py-2 transition-colors ${
    isActive ? 'bg-mustard text-tommy-red' : 'text-white hover:bg-mustard hover:text-tommy-red'
  }`

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-black sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-20">
        <NavLink to="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Logo className="h-14" />
        </NavLink>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={navLinkClasses}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="md:hidden text-white font-display text-2xl border border-white rounded px-3 py-1"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-black border-t border-white/10 flex flex-col px-4 pb-4">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={navLinkClasses} onClick={() => setOpen(false)}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
