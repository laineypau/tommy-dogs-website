// Renders a "7" with a horizontal slash through it (European-style), so it
// can never be mistaken for a "1".
export default function SlashSeven() {
  return (
    <span className="relative inline-block">
      7
      <span aria-hidden="true" className="absolute left-[15%] right-[15%] top-[42%] h-[0.07em] bg-current" />
    </span>
  )
}

// Splits a string on "7" and replaces each occurrence with <SlashSeven />.
export function withSlashSevens(value) {
  return String(value)
    .split('7')
    .flatMap((part, i) => (i === 0 ? [part] : [<SlashSeven key={i} />, part]))
}
