import { JetBrains_Mono } from 'next/font/google'
import Link from 'next/link'
import { DashboardHeader } from '@/components/dashboard-header'
import { Footer } from '@/components/footer'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export default function RankingPage() {
  const ranks = [
    { 
      name: "Rookie", 
      minXp: 0, 
      maxXp: 100, 
      badge: "🥉", 
      color: "#CD7F32",
      description: "Just getting started - 3-4 easy issues"
    },
    { 
      name: "Bronze", 
      minXp: 101, 
      maxXp: 300, 
      badge: "🥉", 
      color: "#B87333",
      description: "Building momentum - ~10 easy issues"
    },
    { 
      name: "Silver", 
      minXp: 301, 
      maxXp: 700, 
      badge: "🥈", 
      color: "#C0C0C0",
      description: "Regular contributor - 20+ easy or 10+ medium"
    },
    { 
      name: "Gold", 
      minXp: 701, 
      maxXp: 1200, 
      badge: "🥇", 
      color: "#FFD700",
      description: "Active contributor with diverse contributions"
    },
    { 
      name: "Platinum", 
      minXp: 1201, 
      maxXp: 2000, 
      badge: "💠", 
      color: "#E5E4E2",
      description: "Serious contributor making significant impact"
    },
    { 
      name: "Diamond", 
      minXp: 2001, 
      maxXp: 3000, 
      badge: "💎", 
      color: "#B9F2FF",
      description: "Elite contributor - Top tier performance"
    }
  ]

  return (
    <div className={jetbrainsMono.className}>
      {/* Dashboard Header at the top */}
      <DashboardHeader />

      <div className="min-h-screen p-8 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="mb-16 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">How Ranking Works</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Climb the ranks by earning XP through contributions. From Rookie 
              to Diamond, track your progress and compete with the community.
            </p>
            <div className="flex gap-4 justify-center mt-8">
              <Link 
                href="/"
                className="px-8 py-3 bg-foreground text-background rounded font-semibold hover:opacity-90 transition-opacity"
              >
                View Leaderboard
              </Link>
              <Link 
                href="/Fsoc"
                className="px-8 py-3 border border-border rounded font-semibold hover:bg-muted transition-colors"
              >
                About FSOC
              </Link>
            </div>
          </div>

          {/* Three Main Cards - XP System */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Easy Issues Card */}
            <div className="border border-border rounded-lg p-8 bg-card hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <div className="w-full aspect-video border-2 border-dashed border-border rounded flex items-center justify-center mb-4 bg-muted/20">
                  <div className="text-center p-4">
                    <div className="text-6xl mb-2">⚡</div>
                    <p className="text-sm font-semibold">Easy Issues</p>
                    <p className="text-2xl font-bold text-green-500 mt-2">30 XP</p>
                    <p className="text-xs text-muted-foreground mt-1">Quick fixes</p>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Easy Tasks</h3>
              <p className="text-muted-foreground leading-relaxed">
                Perfect for beginners. Quick fixes, documentation updates, and 
                simple bug fixes. Great way to get started and build momentum.
              </p>
            </div>

            {/* Medium Issues Card */}
            <div className="border border-border rounded-lg p-8 bg-card hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <div className="w-full aspect-video border-2 border-dashed border-border rounded flex items-center justify-center mb-4 bg-muted/20">
                  <div className="text-center p-4">
                    <div className="text-6xl mb-2">🔥</div>
                    <p className="text-sm font-semibold">Medium Issues</p>
                    <p className="text-2xl font-bold text-orange-500 mt-2">60 XP</p>
                    <p className="text-xs text-muted-foreground mt-1">Feature work</p>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Medium Tasks</h3>
              <p className="text-muted-foreground leading-relaxed">
                Intermediate challenges. New features, bug fixes, and improvements. 
                Requires good understanding of the codebase.
              </p>
            </div>

            {/* Hard Issues Card */}
            <div className="border border-border rounded-lg p-8 bg-card hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <div className="w-full aspect-video border-2 border-dashed border-border rounded flex items-center justify-center mb-4 bg-muted/20">
                  <div className="text-center p-4">
                    <div className="text-6xl mb-2">💪</div>
                    <p className="text-sm font-semibold">Hard Issues</p>
                    <p className="text-2xl font-bold text-red-500 mt-2">120 XP</p>
                    <p className="text-xs text-muted-foreground mt-1">Complex work</p>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Hard Tasks</h3>
              <p className="text-muted-foreground leading-relaxed">
                Advanced challenges. Complex features, architecture work, and 
                significant improvements. For experienced contributors.
              </p>
            </div>
          </div>

          {/* Ranks Section - Two columns */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Contributor Ranks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ranks.map((rank, index) => (
                <div 
                  key={index}
                  className="border border-border rounded-lg p-6 bg-card hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-5xl">{rank.badge}</span>
                      <div>
                        <h3 
                          className="text-2xl font-bold"
                          style={{ color: rank.color }}
                        >
                          {rank.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{rank.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold">{rank.minXp} - {rank.maxXp}</p>
                      <p className="text-xs text-muted-foreground">XP Range</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Three Features Section - Similar to bottom of Ad-402 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">How to Progress</h3>
              <p className="text-muted-foreground leading-relaxed">
                Solve issues to earn XP. Higher difficulty means more XP. 
                Track your progress and compete with others on the leaderboard.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Earn Recognition</h3>
              <p className="text-muted-foreground leading-relaxed">
                Start with easy issues to build momentum. Mix difficulty levels 
                and maintain consistency to climb the ranks faster.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Track Performance</h3>
              <p className="text-muted-foreground leading-relaxed">
                Real-time dashboard shows your rank, XP progress, and contributions. 
                See how you compare with other contributors.
              </p>
            </div>
          </div>

          {/* Tips Section - Centered Card */}
          <div className="max-w-4xl mx-auto">
            <div className="border border-border rounded-lg p-8 bg-card">
              <h2 className="text-3xl font-bold mb-8 text-center">Tips for Success</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Getting Started</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Start with easy issues to build momentum</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Read documentation and contribution guidelines</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Ask questions when you need help</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Advancing Further</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Mix different difficulty levels</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Consistency is key to climbing ranks</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Help review others&apos; PRs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       <Footer />
    </div>
  )
}