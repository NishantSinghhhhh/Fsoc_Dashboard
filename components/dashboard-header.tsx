export function DashboardHeader() {
  return (
    <header className="w-full flex flex-col items-center justify-center gap-6 py-16 text-center border-b font-jetbrains">
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
      style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
      >
        Contributor Dashboard
      </h1>
    </header>
  )
}