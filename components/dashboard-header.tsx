'use client'

import { useRouter } from 'next/navigation'

export function DashboardHeader() {
  const router = useRouter()

  return (
    <header className="w-full flex flex-col md:flex-row items-center justify-between gap-6 py-16 px-8 border-b font-jetbrains">
      {/* Left side - Main Title */}
      <h1 
        className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
        style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
      >
        Contributor Ranking Dashboard
      </h1>
      
      {/* Right side - Two headings */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-12">
        {/* How Ranking Works Section */}
        <h2 
          className="text-xl font-semibold hover:text-primary transition-colors cursor-pointer"
          onClick={() => router.push('/Ranking')}
        >
          How Ranking Works
        </h2>
        
        {/* What is FSOC Section */}
        <h2 
          className="text-xl font-semibold hover:text-primary transition-colors cursor-pointer"
          onClick={() => router.push('/Fsoc')}
        >
          What is FSOC?
        </h2>
      </div>
    </header>
  )
}