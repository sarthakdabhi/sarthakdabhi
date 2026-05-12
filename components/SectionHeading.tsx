export function SectionHeading({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 text-sm font-mono text-fg-subtle">
        <span className="text-accent">{index}</span>
        <span className="h-px w-10 bg-border-strong" />
        <span className="uppercase tracking-widest">{title.toLowerCase()}</span>
      </div>
      <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-fg-muted leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
