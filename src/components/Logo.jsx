import logoImg from '../assets/tommy-dogs-logo.png'

// Official Tommy Dogs logo image. Size it via the parent by passing a height
// utility class (e.g. "h-12", "h-40") through `className`.
export default function Logo({ className = '', title = 'Tommy Dogs' }) {
  return (
    <img
      src={logoImg}
      alt={title}
      className={`block w-auto object-contain ${className}`}
    />
  )
}
