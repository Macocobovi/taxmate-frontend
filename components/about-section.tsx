import { Shield, Database, Zap } from "lucide-react"

const BenefitCard = ({ icon: Icon, title, description }) => (
  <div className="group flex flex-col items-center text-center gap-4 p-8 rounded-2xl bg-card/30 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/10">
      <Icon className="w-8 h-8 text-primary relative z-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    <h3 className="text-foreground text-xl font-bold relative z-10">{title}</h3>
    <p className="text-muted-foreground text-base leading-relaxed relative z-10">{description}</p>
  </div>
)

export function AboutSection() {
  const benefits = [
    {
      icon: Shield,
      title: "Transparent Payments",
      description:
        "Every transaction is recorded on the blockchain, creating an immutable audit trail that builds trust between taxpayers and government.",
    },
    {
      icon: Database,
      title: "Immutable Records",
      description:
        "Payment history cannot be altered or deleted, ensuring data integrity and providing reliable records for compliance and auditing.",
    },
    {
      icon: Zap,
      title: "Future-Ready System",
      description:
        "Built with upgradeable smart contracts, Taxmate evolves with your needs while maintaining security and data continuity.",
    },
  ]

  return (
    <section id="about-section" className="w-full px-5 flex flex-col justify-center items-center bg-card/20 py-16">
      <div className="w-full max-w-7xl flex flex-col gap-12">
        <div className="flex flex-col justify-center items-center gap-4 max-w-3xl mx-auto">
          <h2 className="text-center text-foreground text-4xl md:text-5xl font-bold leading-tight text-balance">
            Why Choose Taxmate?
          </h2>
          <p className="text-center text-muted-foreground text-lg md:text-xl leading-relaxed text-pretty">
            Decentralized tax management brings transparency, security, and trust to government revenue collection
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.title} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  )
}
