"use client"

import { Button } from "@/components/ui/button"
import { Header } from "./header"
import { Shield, ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="flex flex-col items-center text-center relative mx-auto px-4 pt-6 pb-32">
      <div className="absolute inset-0 z-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(to right, hsl(var(--primary) / 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary) / 0.15) 1px, transparent 1px)
          `,
            backgroundSize: "4rem 4rem",
          }}
        />
      </div>

      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-40 animate-pulse" />
      <div
        className="absolute top-40 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-40 animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-20 left-1/3 w-80 h-80 bg-accent/15 rounded-full blur-3xl opacity-30 animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      {/* Header */}
      <div className="relative z-20 w-full">
        <Header />
      </div>

      {/* Hero content */}
      <div className="relative z-10 space-y-8 max-w-4xl mt-24 md:mt-32 px-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
          <Shield className="w-4 h-4" />
          <span>Blockchain-Powered Tax System</span>
        </div>

        <h1 className="text-foreground text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-balance">
          Reinventing Tax Collection with <span className="gradient-text">Blockchain Transparency</span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl font-body leading-relaxed max-w-2xl mx-auto text-pretty">
          Taxmate simplifies tax payments, ensures accountability, and provides trust through decentralized systems.
          Experience the future of transparent, secure tax management.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Link href="/auth/signup">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 rounded-lg font-semibold text-lg shadow-lg shadow-primary/30 transition-all hover:shadow-2xl hover:shadow-primary/40 hover:scale-105">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <Button
            variant="outline"
            className="glass glass-hover px-8 py-6 rounded-lg font-semibold text-lg transition-all bg-transparent"
            onClick={() => {
              document.getElementById("features-section")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Learn More
          </Button>
        </div>

        <div className="flex flex-wrap gap-6 justify-center items-center pt-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            <span>Blockchain secured</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Transparent records</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <span>Secure payments</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-16 w-full max-w-5xl px-4">
        <div className="relative rounded-xl overflow-hidden glass shadow-2xl shadow-primary/10">
          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass glass-hover rounded-lg p-6 space-y-3 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground">Register</h3>
                <p className="text-sm text-muted-foreground">Create your taxpayer account and get your TIN</p>
              </div>

              <div className="glass glass-hover rounded-lg p-6 space-y-3 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-secondary/20 border border-secondary/30 flex items-center justify-center">
                  <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground">Pay Taxes</h3>
                <p className="text-sm text-muted-foreground">Make secure payments tracked on blockchain</p>
              </div>

              <div className="glass glass-hover rounded-lg p-6 space-y-3 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground">Track Records</h3>
                <p className="text-sm text-muted-foreground">Access immutable payment history anytime</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
