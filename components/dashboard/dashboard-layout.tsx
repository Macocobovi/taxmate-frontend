"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Sidebar } from "./sidebar"

interface DashboardLayoutProps {
  children: React.ReactNode
  role: "admin" | "taxpayer"
}

export function DashboardLayout({ children, role }: DashboardLayoutProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const user = localStorage.getItem("taxmate_user")
    if (!user) {
      router.push("/login")
    } else {
      const userData = JSON.parse(user)
      if (userData.role !== role) {
        router.push(`/dashboard/${userData.role}`)
      }
      setIsLoading(false)
    }
  }, [router, role])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-emerald-950 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-emerald-950">
      <div className="w-64 flex-shrink-0">
        <Sidebar role={role} />
      </div>
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">{children}</div>
      </main>
    </div>
  )
}
