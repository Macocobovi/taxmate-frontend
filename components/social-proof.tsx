export function SocialProof() {
  const stats = [
    { value: "10,000+", label: "Active Developers" },
    { value: "1M+", label: "Bugs Fixed" },
    { value: "50%", label: "Faster Debugging" },
    { value: "99.9%", label: "Accuracy Rate" },
  ]

  return (
    <section className="w-full px-5 flex flex-col justify-center items-center gap-12">
      <div className="text-center text-muted-foreground text-sm font-medium leading-tight uppercase tracking-wider">
        Trusted by developers at leading companies
      </div>

      {/* Company logos */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center w-full max-w-4xl">
        {["GitHub", "Vercel", "Stripe", "OpenAI"].map((company) => (
          <div
            key={company}
            className="text-2xl font-bold text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors"
          >
            {company}
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl mt-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
              {stat.value}
            </div>
            <div className="text-sm text-muted-foreground font-body">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
