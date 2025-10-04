import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { DataTable } from "@/components/dashboard/data-table"
import { StatCard } from "@/components/dashboard/stat-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Download, DollarSign, Clock, CheckCircle } from "lucide-react"

export default function PaymentsPage() {
  const payments = [
    {
      id: "PAY-001",
      taxpayer: "John Doe",
      tin: "123-456-789",
      amount: "$2,500",
      type: "Income Tax",
      date: "2024-01-15",
      status: "Completed",
      txHash: "0x1234...5678",
    },
    {
      id: "PAY-002",
      taxpayer: "Jane Smith",
      tin: "987-654-321",
      amount: "$3,200",
      type: "Property Tax",
      date: "2024-01-14",
      status: "Completed",
      txHash: "0x8765...4321",
    },
    {
      id: "PAY-003",
      taxpayer: "Bob Johnson",
      tin: "456-789-123",
      amount: "$1,800",
      type: "Sales Tax",
      date: "2024-01-14",
      status: "Pending",
      txHash: "0x2468...1357",
    },
    {
      id: "PAY-004",
      taxpayer: "Alice Brown",
      tin: "789-123-456",
      amount: "$4,100",
      type: "Income Tax",
      date: "2024-01-13",
      status: "Completed",
      txHash: "0x9876...5432",
    },
  ]

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Payment Management</h1>
            <p className="text-blue-300">Track and manage all tax payments</p>
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard title="Total Payments" value="$11,600" icon={DollarSign} trend="+15%" />
          <StatCard title="Completed" value="3" icon={CheckCircle} trend="+10%" />
          <StatCard title="Pending" value="1" icon={Clock} trend="-20%" />
        </div>

        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-400" />
            <Input
              placeholder="Search payments..."
              className="pl-10 bg-blue-900/30 border-blue-700 text-white placeholder:text-blue-400"
            />
          </div>
          <Select>
            <SelectTrigger className="w-[180px] bg-blue-900/30 border-blue-700 text-white">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Payments</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <DataTable
          title="All Payments"
          columns={[
            { key: "id", label: "Payment ID" },
            { key: "taxpayer", label: "Taxpayer" },
            { key: "amount", label: "Amount" },
            { key: "type", label: "Type" },
            { key: "date", label: "Date" },
            { key: "status", label: "Status" },
            { key: "txHash", label: "Transaction Hash" },
          ]}
          data={payments}
        />
      </div>
    </DashboardLayout>
  )
}
