// types/contributor.ts
import { Rank } from './ranks'

export type Contributor = {
  githubName: string
  username: string
  githubUrl: string
  currentXp: number
  mergedPrs: number
  avatarUrl: string
  rank?: Rank  // Add rank info
  nextRank?: Rank | null
  xpToNextRank?: number
  progress?: number
}