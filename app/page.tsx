import { DashboardHeader } from "@/components/dashboard-header"
import { ContributorsTable } from "@/components/contributors-table"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <DashboardHeader />
      <main className="flex-1 container mx-auto py-8 px-4">
        <ContributorsTable />
      </main>
      <Footer />
    </div>
  )
}