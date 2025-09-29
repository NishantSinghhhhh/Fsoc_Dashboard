import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Fetch contributors from your backend API
    const response = await fetch('https://pullquestgithubbackend-1.onrender.com/api/hactoberfest/ContributorXp', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      // Add cache options if needed
      cache: 'no-store' // or 'force-cache' for caching
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch contributors: ${response.status}`);
    }

    const data = await response.json();

    // Transform the data to match your frontend structure
    const contributors = data.data.map((contributor: any) => ({
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

  } catch (error: any) {
    console.error('Error fetching contributors:', error);
    
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to fetch contributors',
        message: error.message 
      },
      { status: 500 }
    );
  }
}