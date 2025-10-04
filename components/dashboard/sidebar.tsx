"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Users, FolderTree, CreditCard, FileText, Settings, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarProps {
  userType: "admin" | "taxpayer"
}

export function Sidebar({ userType }: SidebarProps) {
  const pathname = usePathname()

  const adminLinks = [
    { href: "/dashboard/admin", label: "Dashboard", icon: LayoutDashboard },
    { href: "/dashboard/admin/taxpayers", label: "Taxpayers", icon: Users },
    { href: "/dashboard/admin/tax-items", label: "Tax Items", icon: FolderTree },
    { href: "/dashboard/admin/payments", label: "Payments", icon: CreditCard },
    { href: "/dashboard/admin/reports", label: "Reports", icon: FileText },
    { href: "/dashboard/admin/settings", label: "Settings", icon: Settings },
  ]

  const taxpayerLinks = [
    { href: "/dashboard/taxpayer", label: "Dashboard", icon: LayoutDashboard },
    { href: "/dashboard/taxpayer/profile", label: "My Profile", icon: Users },
    { href: "/dashboard/taxpayer/payments", label: "My Payments", icon: CreditCard },
    { href: "/dashboard/taxpayer/receipts", label: "Receipts", icon: FileText },
    { href: "/dashboard/taxpayer/settings", label: "Settings", icon: Settings },
  ]

  const links = userType === "admin" ? adminLinks : taxpayerLinks

  return (
    <aside className="w-64 bg-card border-r border-border flex flex-col">
      <div className="p-6 border-b border-border">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">T</span>
          </div>
          <span className="text-foreground text-xl font-semibold">Taxmate</span>
        </Link>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {links.map((link) => {
          const Icon = link.icon
          const isActive = pathname === link.href
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{link.label}</span>
            </Link>
          )
        })}
      </nav>
      <div className="p-4 border-t border-border">
        <Link
          href="/auth/login"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </Link>
      </div>
    </aside>
  )
}
