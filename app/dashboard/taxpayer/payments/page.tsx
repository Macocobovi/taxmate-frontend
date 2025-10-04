import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { DataTable } from "@/components/dashboard/data-table"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Download } from "lucide-react"

export default function PaymentsPage() {
  const payments = [
    {
      id: "PAY-001",
      type: "Income Tax",
      amount: "$2,500",
      date: "2024-01-15",
      status: "Completed",
      txHash: "0x1234...5678",
      receipt: "Download",
    },
    {
      id: "PAY-002",
      type: "Property Tax",
      amount: "$1,800",
      date: "2023-12-20",
      status: "Completed",
      txHash: "0x8765...4321",
      receipt: "Download",
    },
    {
      id: "PAY-003",
      type: "Sales Tax",
      amount: "$950",
      date: "2023-11-10",
      status: "Completed",
      txHash: "0x2468...1357",
      receipt: "Download",
    },
  ]

  return (
    <DashboardLayout role="taxpayer">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Payment History</h1>
            <p className="text-blue-300">View all your tax payments and receipts</p>
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            <Plus className="w-4 h-4 mr-2" />
            Make Payment
          </Button>
        </div>

        <Card className="bg-blue-950/50 border-blue-800/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Quick Actions</CardTitle>
            <CardDescription className="text-blue-300">Common payment tasks</CardDescription>
          </CardHeader>
          <CardContent className="flex gap-4">
            <Button variant="outline" className="border-blue-700 text-blue-100 hover:bg-blue-900/30 bg-transparent">
              <Download className="w-4 h-4 mr-2" />
              Download All Receipts
            </Button>
            <Button variant="outline" className="border-blue-700 text-blue-100 hover:bg-blue-900/30 bg-transparent">
              Export Payment History
            </Button>
          </CardContent>
        </Card>

        <DataTable
          title="All Payments"
          columns={[
            { key: "id", label: "Payment ID" },
            { key: "type", label: "Tax Type" },
            { key: "amount", label: "Amount" },
            { key: "date", label: "Date" },
            { key: "status", label: "Status" },
            { key: "txHash", label: "Transaction Hash" },
            { key: "receipt", label: "Receipt" },
          ]}
          data={payments}
        />
      </div>
    </DashboardLayout>
  )
}
