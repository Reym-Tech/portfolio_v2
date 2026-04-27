export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--border)]">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <p className="text-sm text-[var(--text-muted)]">
          John Remy C. Gonzales
        </p>
        <p className="text-sm text-[var(--text-muted)]">
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
