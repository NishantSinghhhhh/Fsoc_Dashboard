import { NextResponse } from "next/server"

// Define the contributor type from your backend
interface BackendContributor {
  _id: string
  githubUsername: string
  githubId: number
  name: string | null
  email: string | null
  avatarUrl: string
  profileUrl: string
  totalXpEarned: number
  rewardEligible: boolean
  rewardClaimed: boolean
  totalMergedIssues: number
  totalMergedPRs: number
  lastContributionAt: string | null
  createdAt: string
  updatedAt: string
}

interface BackendResponse {
  success: boolean
  count: number
  data: BackendContributor[]
}

interface FrontendContributor {
  githubName: string
  username: string
  githubUrl: string
  currentXp: number
  mergedPrs: number
  avatarUrl: string
  rewardEligible: boolean
  rewardClaimed: boolean
  totalMergedIssues: number
}

export async function GET() {
  try {
    // Fetch contributors from your backend API
    const response = await fetch('https://pullquestgithubbackend-1.onrender.com/api/hactoberfest/ContributorXp', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      cache: 'no-store' // or 'force-cache' for caching
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch contributors: ${response.status}`);
    }

    const data: BackendResponse = await response.json();

    // Transform the data to match your frontend structure
    const contributors: FrontendContributor[] = data.data.map((contributor) => ({
      githubName: contributor.name || contributor.githubUsername,
      username: contributor.githubUsername,
      githubUrl: contributor.profileUrl,
      currentXp: contributor.totalXpEarned,
      mergedPrs: contributor.totalMergedPRs,
      avatarUrl: contributor.avatarUrl,
      rewardEligible: contributor.rewardEligible,
      rewardClaimed: contributor.rewardClaimed,
      totalMergedIssues: contributor.totalMergedIssues,
    }));

    return NextResponse.json({ 
      success: true,
      count: contributors.length,
      contributors 
    });

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Error fetching contributors:', errorMessage);
    
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to fetch contributors',
        message: errorMessage
      },
      { status: 500 }
    );
  }
}