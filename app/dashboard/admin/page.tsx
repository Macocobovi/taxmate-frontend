import { Sidebar } from "@/components/dashboard/sidebar"
import { StatCard } from "@/components/dashboard/stat-card"
import { Users, DollarSign, FolderTree, TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function AdminDashboard() {
  const recentPayments = [
    {
      id: "1",
      payer: "John Doe",
      tin: "TIN-001234",
      taxItem: "PAYE",
      amount: "$1,250",
      date: "2025-01-15",
      status: "completed",
    },
    {
      id: "2",
      payer: "Acme Corp",
      tin: "TIN-005678",
      taxItem: "Corporate Tax",
      amount: "$15,000",
      date: "2025-01-14",
      status: "completed",
    },
    {
      id: "3",
      payer: "Jane Smith",
      tin: "TIN-002345",
      taxItem: "VAT",
      amount: "$850",
      date: "2025-01-14",
      status: "pending",
    },
    {
      id: "4",
      payer: "Tech Solutions",
      tin: "TIN-007890",
      taxItem: "Corporate Tax",
      amount: "$8,500",
      date: "2025-01-13",
      status: "completed",
    },
  ]

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar userType="admin" />
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground mt-2">Overview of tax collection and system activity</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard title="Total Taxpayers" value="2,847" icon={Users} trend="+12% from last month" trendUp />
            <StatCard title="Total Collected" value="$1.2M" icon={DollarSign} trend="+8% from last month" trendUp />
            <StatCard title="Active Tax Items" value="12" icon={FolderTree} />
            <StatCard title="This Month" value="$145K" icon={TrendingUp} trend="+15% from last month" trendUp />
          </div>

          <Card className="border-border bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Recent Payments</CardTitle>
              <CardDescription>Latest tax payments received in the system</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Payer</TableHead>
                    <TableHead>TIN</TableHead>
                    <TableHead>Tax Item</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentPayments.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell className="font-medium">{payment.payer}</TableCell>
                      <TableCell>{payment.tin}</TableCell>
                      <TableCell>{payment.taxItem}</TableCell>
                      <TableCell>{payment.amount}</TableCell>
                      <TableCell>{payment.date}</TableCell>
                      <TableCell>
                        <Badge variant={payment.status === "completed" ? "default" : "secondary"}>
                          {payment.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
