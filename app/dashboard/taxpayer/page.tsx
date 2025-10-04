import { Sidebar } from "@/components/dashboard/sidebar"
import { StatCard } from "@/components/dashboard/stat-card"
import { CreditCard, FileText, CheckCircle, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function TaxpayerDashboard() {
  const myPayments = [
    { id: "1", taxItem: "PAYE", amount: "$1,250", date: "2025-01-15", status: "completed", receipt: "RCP-001234" },
    { id: "2", taxItem: "VAT", amount: "$850", date: "2024-12-20", status: "completed", receipt: "RCP-001189" },
    { id: "3", taxItem: "PAYE", amount: "$1,250", date: "2024-12-15", status: "completed", receipt: "RCP-001145" },
  ]

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar userType="taxpayer" />
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">My Dashboard</h1>
            <p className="text-muted-foreground mt-2">Welcome back, John Doe</p>
          </div>

          <Card className="border-border bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Tax Identification Number</p>
                  <p className="text-2xl font-bold text-foreground mt-1">TIN-001234</p>
                  <p className="text-sm text-muted-foreground mt-2">Individual Taxpayer</p>
                </div>
                <Badge className="bg-secondary text-secondary-foreground">Verified</Badge>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard title="Total Payments" value="24" icon={CreditCard} />
            <StatCard title="Amount Paid" value="$28,450" icon={CheckCircle} />
            <StatCard title="Receipts" value="24" icon={FileText} />
            <StatCard title="Pending" value="0" icon={Clock} />
          </div>

          <Card className="border-border bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Payment History</CardTitle>
              <CardDescription>Your recent tax payments and receipts</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tax Item</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Receipt</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {myPayments.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell className="font-medium">{payment.taxItem}</TableCell>
                      <TableCell>{payment.amount}</TableCell>
                      <TableCell>{payment.date}</TableCell>
                      <TableCell>
                        <Badge variant="default">{payment.status}</Badge>
                      </TableCell>
                      <TableCell className="font-mono text-sm">{payment.receipt}</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
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
