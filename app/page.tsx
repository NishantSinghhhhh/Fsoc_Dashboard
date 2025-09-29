import { DashboardHeader } from "@/components/dashboard-header"
import { ContributorsTable } from "@/components/contributors-table"

export default function Page() {
  return (
    <main className="w-full">
      <DashboardHeader />
      <section className="px-6 md:px-10 mt-6">
        <div className="rounded-none border bg-card text-card-foreground shadow-sm">
          <div className="p-4 md:p-6">
            <ContributorsTable />
          </div>
        </div>
      </section>
    </main>
  )
}