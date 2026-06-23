import type { Brand } from '../../data/brands'

/** Renders a brand's SVG glyph, or a monogram chip when no glyph exists. */
export default function BrandGlyph({ brand, size = 22 }: { brand: Brand; size?: number }) {
  if (brand.path) {
    return (
      <svg
        width={size}
        height={size}
        viewBox={brand.viewBox ?? '0 0 24 24'}
        fill="currentColor"
        aria-hidden="true"
        className="shrink-0"
      >
        <path d={brand.path} />
      </svg>
    )
  }
  return (
    <span
      aria-hidden="true"
      className="grid shrink-0 place-items-center rounded-[5px] border border-[rgba(255,255,255,0.22)] font-display text-[11px] font-bold leading-none"
      style={{ width: size, height: size }}
    >
      {brand.monogram}
    </span>
  )
}
