export default function Starburst({ children, className = '' }) {
  return (
    <div
      className={`starburst bg-mustard text-tommy-red font-display flex items-center justify-center text-center leading-tight px-4 ${className}`}
    >
      {children}
    </div>
  )
}
