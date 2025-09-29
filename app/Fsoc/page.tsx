import { JetBrains_Mono } from 'next/font/google'
import Link from 'next/link'
import { DashboardHeader } from '@/components/dashboard-header'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export default function FsocPage() {
  return (
    <div className={jetbrainsMono.className}>
      {/* Dashboard Header at the top */}
      <DashboardHeader />

      <div className="min-h-screen p-8 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="mb-16 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">What is FSOC?</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The future of open source contributions. Contributors earn XP 
              instantly, track progress directly without intermediaries.
            </p>
            <div className="flex gap-4 justify-center mt-8">
              <Link 
                href="/"
                className="px-8 py-3 bg-foreground text-background rounded font-semibold hover:opacity-90 transition-opacity"
              >
                View Leaderboard
              </Link>
              <Link 
                href="/Ranking"
                className="px-8 py-3 border border-border rounded font-semibold hover:bg-muted transition-colors"
              >
                How Ranking Works
              </Link>
            </div>
          </div>

          {/* Three Main Cards - Similar to Ad-402 layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Card 1 - About FSOC */}
            <div className="border border-border rounded-lg p-8 bg-card hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <div className="w-full aspect-video border-2 border-dashed border-border rounded flex items-center justify-center mb-4 bg-muted/20">
                  <div className="text-center p-4">
                    <div className="text-4xl mb-2">🌟</div>
                    <p className="text-sm font-semibold">FSOC Platform</p>
                    <p className="text-xs text-muted-foreground mt-1">Free & Open Source</p>
                    <p className="text-xs text-muted-foreground">Community driven</p>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">About FSOC</h3>
              <p className="text-muted-foreground leading-relaxed">
                FSOC (Free and Open Source Community) is a community-driven 
                initiative dedicated to promoting and facilitating open source contributions. 
                We believe in the power of collaborative development.
              </p>
            </div>

            {/* Card 2 - XP System */}
            <div className="border border-border rounded-lg p-8 bg-card hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <div className="w-full aspect-video border-2 border-dashed border-border rounded flex items-center justify-center mb-4 bg-muted/20">
                  <div className="text-center p-4">
                    <div className="text-6xl mb-2">💎</div>
                    <p className="text-sm font-semibold">XP System</p>
                    <p className="text-xs text-muted-foreground mt-1">30 • 60 • 120 XP</p>
                    <p className="text-xs text-muted-foreground">Easy to Diamond</p>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Earn & Track XP</h3>
              <p className="text-muted-foreground leading-relaxed">
                Earn XP by solving issues of varying difficulty levels. Track your 
                progress from Rookie to Diamond rank and compete on the leaderboard 
                with other contributors.
              </p>
            </div>

            {/* Card 3 - Community */}
            <div className="border border-border rounded-lg p-8 bg-card hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <div className="w-full aspect-video border-2 border-dashed border-border rounded flex items-center justify-center mb-4 bg-muted/20">
                  <div className="text-center p-4">
                    <div className="text-4xl mb-2">👥</div>
                    <p className="text-sm font-semibold">Join Community</p>
                    <p className="text-xs text-muted-foreground mt-1">Collaborate & Grow</p>
                    <p className="text-xs text-muted-foreground">Learn together</p>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Growing Together</h3>
              <p className="text-muted-foreground leading-relaxed">
                Connect with mentors and fellow contributors. Access learning resources, 
                get recognized for contributions, and grow your expertise in a 
                welcoming environment.
              </p>
            </div>
          </div>

          {/* Three Features Section - Similar to bottom of Ad-402 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Instant XP Awards</h3>
              <p className="text-muted-foreground leading-relaxed">
                Contributors receive XP instantly using our transparent system. 
                No waiting periods or complex processes.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Direct Recognition</h3>
              <p className="text-muted-foreground leading-relaxed">
                Direct connection between contributions and rewards. Lower barriers, 
                more transparency, better relationships.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Real-time Analytics</h3>
              <p className="text-muted-foreground leading-relaxed">
                Track contributions, ranks, and progress in real-time. Get insights 
                into your performance instantly.
              </p>
            </div>
          </div>

          {/* How It Works Section */}
          <div className="max-w-4xl mx-auto">
            <div className="border border-border rounded-lg p-8 bg-card">
              <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Choose an Issue</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Browse through available issues categorized by difficulty (Easy, Medium, Hard).
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Solve & Submit</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Work on the issue and submit your pull request for review.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Earn XP</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Once your PR is merged, you&apos;ll earn XP based on the issue difficulty.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-lg">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Climb the Ranks</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Track your progress on the leaderboard and advance through the ranks!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}