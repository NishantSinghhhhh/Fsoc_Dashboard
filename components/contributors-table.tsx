"use client"

import { useState, useEffect } from "react"
import { getRank, getNextRank, type Rank } from "@/types/ranks"

type Contributor = {
  githubName: string
  username: string
  githubUrl: string
  currentXp: number
  mergedPrs: number
  avatarUrl: string
}

type ContributorWithRank = Contributor & {
  rank: Rank
  nextRank: Rank | null
  xpToNextRank: number
  progress: number
}

export function ContributorsTable() {
  const [contributors, setContributors] = useState<ContributorWithRank[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await fetch("/api/contributors")
        if (!response.ok) {
          throw new Error("Failed to fetch contributors")
        }
        const data = await response.json()
        // Add rank information to each contributor
        const contributorsWithRanks = data.contributors.map((contributor: Contributor) => {
          const rank = getRank(contributor.currentXp)
          const { nextRank, xpNeeded, progress } = getNextRank(contributor.currentXp)
          return {
            ...contributor,
            rank,
            nextRank,
            xpToNextRank: xpNeeded,
            progress
          }
        })
        setContributors(contributorsWithRanks)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setIsLoading(false)
      }
    }
    fetchContributors()
  }, [])

  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Contributors</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <caption className="sr-only">Contributors summary</caption>
          <thead>
            <tr className="border-b text-sm text-muted-foreground uppercase tracking-wide">
              <th scope="col" className="px-4 py-3 text-left font-medium">#</th>
              <th scope="col" className="px-4 py-3 text-left font-medium">Username</th>
              <th scope="col" className="px-4 py-3 text-left font-medium">Rank</th>
              <th scope="col" className="px-4 py-3 text-left font-medium">XP Earned</th>
              <th scope="col" className="px-4 py-3 text-left font-medium">Progress</th>
              <th scope="col" className="px-4 py-3 text-left font-medium">Merged PRs</th>
              <th scope="col" className="px-4 py-3 text-left font-medium">Avatar</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-muted-foreground">
                  Loading contributors...
                </td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-destructive">
                  Failed to load data: {error}
                </td>
              </tr>
            ) : contributors?.length ? (
              contributors.map((contributor, idx) => (
                <tr
                  key={idx}
                  className={`border-b last:border-0 hover:bg-muted/20 ${
                    idx % 2 === 0 ? "bg-background" : "bg-muted/50"
                  }`}
                >
                  <td className="px-4 py-6">
                    <span className="text-sm font-semibold text-muted-foreground">{idx + 1}</span>
                  </td>
                  <td className="px-4 py-6">
                    <a
                      href={contributor.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-mono hover:text-blue-600 underline"
                    >
                      {contributor.username}
                    </a>
                  </td>
                  <td className="px-4 py-6">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{contributor.rank.badge}</span>
                      <div>
                        <div
                          className="text-sm font-semibold"
                          style={{ color: contributor.rank.color }}
                        >
                          {contributor.rank.name}
                        </div>
                        {contributor.nextRank && (
                          <div className="text-xs text-muted-foreground">
                            {contributor.xpToNextRank} XP to {contributor.nextRank.badge}
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-6">
                    <span className="font-medium">{contributor.currentXp} XP</span>
                  </td>
                  <td className="px-4 py-6">
                    <div className="w-24">
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full transition-all duration-300"
                          style={{
                            width: `${contributor.progress}%`,
                            backgroundColor: contributor.rank.color
                          }}
                        />
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {contributor.progress}%
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-6">
                    <span className="text-sm">{contributor.mergedPrs}</span>
                  </td>
                  <td className="px-4 py-6">
                    <img
                      src={contributor.avatarUrl || "/placeholder.svg"}
                      alt={`${contributor.githubName} avatar`}
                      className="w-10 h-10 rounded-full"
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-muted-foreground">
                  No contributors yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
