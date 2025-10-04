import { Shield, Lock, RefreshCw, Users, FileText, TrendingUp } from "lucide-react"

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="group relative overflow-hidden rounded-2xl glass glass-hover p-8 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/30 flex items-center justify-center group-hover:scale-110 group-hover:border-primary/50 transition-all duration-300">
      <Icon className="w-7 h-7 text-primary" />
    </div>
    <h3 className="relative text-foreground text-xl font-bold">{title}</h3>
    <p className="relative text-muted-foreground text-base leading-relaxed">{description}</p>
  </div>
)

export function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: "Blockchain Security",
      description:
        "All transactions are recorded on an immutable blockchain ledger, ensuring transparency and preventing fraud.",
    },
    {
      icon: Lock,
      title: "Secure Payments",
      description:
        "End-to-end encryption and secure payment processing protect your financial data and tax information.",
    },
    {
      icon: RefreshCw,
      title: "Upgradeable Smart Contracts",
      description:
        "UUPS proxy pattern allows system improvements without disrupting existing records or user experience.",
    },
    {
      icon: Users,
      title: "Role-Based Access Control",
      description:
        "Granular permissions for Super Admins, Sub Admins, and Taxpayers ensure proper data access and security.",
    },
    {
      icon: FileText,
      title: "Comprehensive Tax Categories",
      description: "Support for PAYE, VAT, Corporate Tax, Property Tax, and more with flexible rate management.",
    },
    {
      icon: TrendingUp,
      title: "Real-Time Analytics",
      description: "Track payment trends, compliance rates, and revenue collection with powerful dashboard insights.",
    },
  ]

  return (
    <section className="w-full px-5 flex flex-col justify-center items-center">
      <div className="w-full py-8 md:py-16 flex flex-col gap-12">
        <div className="flex flex-col justify-center items-center gap-4 max-w-3xl mx-auto">
          <h2 className="text-center text-foreground text-4xl md:text-5xl font-bold leading-tight text-balance">
            Built for Modern Tax Administration
          </h2>
          <p className="text-center text-muted-foreground text-lg md:text-xl font-body leading-relaxed text-pretty">
            Everything you need for transparent, secure, and efficient tax management
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
