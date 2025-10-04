import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { DataTable } from "@/components/dashboard/data-table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, UserPlus } from "lucide-react"

export default function TaxpayersPage() {
  const taxpayers = [
    {
      name: "John Doe",
      tin: "123-456-789",
      email: "john@example.com",
      totalPaid: "$12,500",
      status: "Active",
      registered: "2023-06-15",
    },
    {
      name: "Jane Smith",
      tin: "987-654-321",
      email: "jane@example.com",
      totalPaid: "$18,200",
      status: "Active",
      registered: "2023-05-20",
    },
    {
      name: "Bob Johnson",
      tin: "456-789-123",
      email: "bob@example.com",
      totalPaid: "$8,900",
      status: "Active",
      registered: "2023-07-10",
    },
    {
      name: "Alice Brown",
      tin: "789-123-456",
      email: "alice@example.com",
      totalPaid: "$22,100",
      status: "Active",
      registered: "2023-04-05",
    },
    {
      name: "Charlie Wilson",
      tin: "321-654-987",
      email: "charlie@example.com",
      totalPaid: "$5,600",
      status: "Inactive",
      registered: "2023-08-22",
    },
  ]

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Taxpayer Management</h1>
            <p className="text-blue-300">View and manage all registered taxpayers</p>
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            <UserPlus className="w-4 h-4 mr-2" />
            Add Taxpayer
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-400" />
            <Input
              placeholder="Search by name, TIN, or email..."
              className="pl-10 bg-blue-900/30 border-blue-700 text-white placeholder:text-blue-400"
            />
          </div>
        </div>

        <DataTable
          title="All Taxpayers"
          columns={[
            { key: "name", label: "Name" },
            { key: "tin", label: "TIN" },
            { key: "email", label: "Email" },
            { key: "totalPaid", label: "Total Paid" },
            { key: "status", label: "Status" },
            { key: "registered", label: "Registered" },
          ]}
          data={taxpayers}
        />
      </div>
    </DashboardLayout>
  )
}
