import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Column {
  key: string
  label: string
}

interface DataTableProps {
  title: string
  columns: Column[]
  data: Record<string, any>[]
}

export function DataTable({ title, columns, data }: DataTableProps) {
  return (
    <Card className="bg-blue-950/50 border-blue-800/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-blue-800/50 hover:bg-blue-900/30">
              {columns.map((column) => (
                <TableHead key={column.key} className="text-blue-300 font-semibold">
                  {column.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index} className="border-blue-800/50 hover:bg-blue-900/30">
                {columns.map((column) => (
                  <TableCell key={column.key} className="text-blue-100">
                    {row[column.key]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
