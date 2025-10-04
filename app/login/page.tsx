"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, User } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState<"taxpayer" | "admin">("taxpayer")
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login
    setTimeout(() => {
      localStorage.setItem("taxmate_user", JSON.stringify({ email, role }))
      router.push(role === "admin" ? "/dashboard/admin" : "/dashboard/taxpayer")
    }, 1000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 via-blue-900 to-emerald-950 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <h1 className="text-3xl font-bold text-white mb-2">Taxmate</h1>
          </Link>
          <p className="text-blue-200">Sign in to your account</p>
        </div>

        <Card className="border-blue-800/50 bg-blue-950/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Welcome Back</CardTitle>
            <CardDescription className="text-blue-300">Enter your credentials to access your account</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={role} onValueChange={(v) => setRole(v as "taxpayer" | "admin")} className="mb-6">
              <TabsList className="grid w-full grid-cols-2 bg-blue-900/50">
                <TabsTrigger value="taxpayer" className="data-[state=active]:bg-emerald-600">
                  <User className="w-4 h-4 mr-2" />
                  Taxpayer
                </TabsTrigger>
                <TabsTrigger value="admin" className="data-[state=active]:bg-blue-600">
                  <Shield className="w-4 h-4 mr-2" />
                  Admin
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-blue-100">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-blue-900/30 border-blue-700 text-white placeholder:text-blue-400"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-blue-100">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-blue-900/30 border-blue-700 text-white placeholder:text-blue-400"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <div className="text-sm text-blue-300 text-center">
              Don't have an account?{" "}
              <Link href="/signup" className="text-emerald-400 hover:text-emerald-300 font-medium">
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
