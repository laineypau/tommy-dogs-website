import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <Logo className="h-20 mb-3" />
          <p className="text-sm text-white/70">The Only Authentic Chicago Dog in Miami!</p>
        </div>

        <div>
          <h3 className="font-display text-mustard text-xl uppercase mb-2">Explore</h3>
          <nav className="flex flex-col gap-1 text-sm">
            <Link className="hover:text-mustard" to="/menu">Menu</Link>
            <Link className="hover:text-mustard" to="/catering">Catering</Link>
            <Link className="hover:text-mustard" to="/locations">Locations</Link>
            <Link className="hover:text-mustard" to="/shop">Shop</Link>
            <Link className="hover:text-mustard" to="/explore">Explore</Link>
          </nav>
        </div>

        <div className="text-sm text-white/70">
          <h3 className="font-display text-mustard text-xl uppercase mb-2">Find Us</h3>
          <p>Mobile cart serving Greater Miami, FL<br />Thursday, Friday, and Saturday pop-ups</p>
          <p className="mt-2">
            <a
              href="https://www.instagram.com/tommydogsmiami"
              target="_blank"
              rel="noreferrer"
              className="text-mustard font-semibold hover:text-white"
            >
              @tommydogsmiami
            </a>
          </p>
        </div>
      </div>
      <p className="text-center text-xs text-white/40 pb-6">
        © {new Date().getFullYear()} Tommy Dogs. No Better Dog Than a Tommy Dog!
      </p>
    </footer>
  )
}
