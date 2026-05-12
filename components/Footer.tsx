import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border mt-12">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="text-xs text-fg-subtle font-mono">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &
          Tailwind.
        </div>
        <div className="text-xs text-fg-subtle font-mono">
          Designed and shipped in California.
        </div>
      </div>
    </footer>
  );
}
