export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-medium text-[var(--text-primary)]">
        Portfolio
      </h1>
      <p className="text-[var(--text-secondary)]">
        Design system active. Build in progress.
      </p>
      <div className="flex gap-3">
        <div className="rounded-[var(--radius-lg)] border border-[var(--glass-border-accent)] bg-[var(--glass-fill)] px-6 py-4 backdrop-blur-sm">
          <p className="text-sm text-[var(--accent-primary)] font-medium">Glass card</p>
        </div>
        <div className="rounded-[var(--radius-lg)] border border-[var(--glass-border)] bg-[var(--surface)] px-6 py-4">
          <p className="text-sm text-[var(--text-secondary)]">Solid card</p>
        </div>
      </div>
    </main>
  );
}
