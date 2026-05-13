export default function TestimonialCard({ quote, author, role }) {
  return (
    <div className="bg-surface-container-low p-10 rounded-xl relative">
      <span className="material-symbols-outlined text-primary/20 text-6xl absolute top-4 right-8">format_quote</span>
      <div className="flex text-tertiary mb-6">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            star
          </span>
        ))}
      </div>
      <p className="text-on-surface font-medium italic leading-relaxed mb-8">"{quote}"</p>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-surface-container-highest"></div>
        <div>
          <p className="font-bold text-sm">{author}</p>
          <p className="text-xs text-on-surface-variant">{role}</p>
        </div>
      </div>
    </div>
  )
}
