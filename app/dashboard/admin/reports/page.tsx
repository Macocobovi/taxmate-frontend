import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, FileText, Download, TrendingUp } from "lucide-react"

export default function ReportsPage() {
  const reports = [
    {
      title: "Monthly Revenue Report",
      description: "Comprehensive revenue analysis for January 2024",
      date: "Generated on Jan 31, 2024",
      icon: BarChart3,
    },
    {
      title: "Taxpayer Activity Report",
      description: "Active taxpayers and registration trends",
      date: "Generated on Jan 31, 2024",
      icon: TrendingUp,
    },
    {
      title: "Payment Status Report",
      description: "Overview of completed and pending payments",
      date: "Generated on Jan 31, 2024",
      icon: FileText,
    },
  ]

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Reports & Analytics</h1>
          <p className="text-blue-300">Generate and download comprehensive reports</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((report, index) => {
            const Icon = report.icon
            return (
              <Card key={index} className="bg-blue-950/50 border-blue-800/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-emerald-600/20 rounded-lg">
                      <Icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <CardTitle className="text-white text-lg">{report.title}</CardTitle>
                  </div>
                  <CardDescription className="text-blue-300">{report.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-blue-400 mb-4">{report.date}</p>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                    <Download className="w-4 h-4 mr-2" />
                    Download Report
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </DashboardLayout>
  )
}
