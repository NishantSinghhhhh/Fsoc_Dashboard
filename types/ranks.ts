// types/ranks.ts
export type Rank = {
  name: string
  minXp: number
  maxXp: number
  badge: string
  color: string
  description: string
}

export const CONTRIBUTOR_RANKS: Rank[] = [
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

// Helper function to get rank based on XP
export function getRank(xp: number): Rank {
  const rank = CONTRIBUTOR_RANKS.find(rank => xp >= rank.minXp && xp <= rank.maxXp)
  return rank || CONTRIBUTOR_RANKS[0]
}

// Helper function to get next rank and XP needed
export function getNextRank(currentXp: number): { 
  nextRank: Rank | null
  xpNeeded: number 
  progress: number 
} {
  const currentRankIndex = CONTRIBUTOR_RANKS.findIndex(
    rank => currentXp >= rank.minXp && currentXp <= rank.maxXp
  )
  
  // If already at max rank
  if (currentRankIndex === CONTRIBUTOR_RANKS.length - 1) {
    return { nextRank: null, xpNeeded: 0, progress: 100 }
  }
  
  // If no rank found (shouldn't happen)
  if (currentRankIndex === -1) {
    return { nextRank: CONTRIBUTOR_RANKS[0], xpNeeded: CONTRIBUTOR_RANKS[0].minXp, progress: 0 }
  }
  
  const currentRank = CONTRIBUTOR_RANKS[currentRankIndex]
  const nextRank = CONTRIBUTOR_RANKS[currentRankIndex + 1]
  const xpNeeded = nextRank.minXp - currentXp
  
  // Calculate progress percentage within current rank
  const rankRange = currentRank.maxXp - currentRank.minXp
  const xpInCurrentRank = currentXp - currentRank.minXp
  const progress = Math.min(100, Math.round((xpInCurrentRank / rankRange) * 100))
  
  return { nextRank, xpNeeded, progress }
}

// Get rank tier (0-5 for sorting/comparison)
export function getRankTier(xp: number): number {
  return CONTRIBUTOR_RANKS.findIndex(rank => xp >= rank.minXp && xp <= rank.maxXp)
}