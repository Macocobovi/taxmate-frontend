"use client"

import { useState, useEffect } from "react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Mail, Hash, Save } from "lucide-react"

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tin: "",
  })

  useEffect(() => {
    const user = localStorage.getItem("taxmate_user")
    if (user) {
      const userData = JSON.parse(user)
      setFormData({
        name: userData.name || "",
        email: userData.email || "",
        tin: userData.tin || "",
      })
    }
  }, [])

  const handleSave = () => {
    const user = localStorage.getItem("taxmate_user")
    if (user) {
      const userData = JSON.parse(user)
      localStorage.setItem("taxmate_user", JSON.stringify({ ...userData, ...formData }))
      alert("Profile updated successfully!")
    }
  }

  return (
    <DashboardLayout role="taxpayer">
      <div className="space-y-6 max-w-2xl">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Profile Settings</h1>
          <p className="text-blue-300">Manage your account information</p>
        </div>

        <Card className="bg-blue-950/50 border-blue-800/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Personal Information</CardTitle>
            <CardDescription className="text-blue-300">Update your personal details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-blue-100 flex items-center gap-2">
                <User className="w-4 h-4" />
                Full Name
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-blue-900/30 border-blue-700 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-blue-100 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-blue-900/30 border-blue-700 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tin" className="text-blue-100 flex items-center gap-2">
                <Hash className="w-4 h-4" />
                Tax Identification Number (TIN)
              </Label>
              <Input
                id="tin"
                value={formData.tin}
                onChange={(e) => setFormData({ ...formData, tin: e.target.value })}
                className="bg-blue-900/30 border-blue-700 text-white"
              />
            </div>
            <Button onClick={handleSave} className="bg-emerald-600 hover:bg-emerald-700">
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-blue-950/50 border-blue-800/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Security</CardTitle>
            <CardDescription className="text-blue-300">Manage your account security</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="border-blue-700 text-blue-100 hover:bg-blue-900/30 bg-transparent">
              Change Password
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
