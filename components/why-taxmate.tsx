import { Shield, Database, Zap } from "lucide-react"

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 flex flex-col items-center text-center gap-4 hover:border-primary/50 transition-colors">
    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
      <Icon className="w-8 h-8 text-primary" />
    </div>
    <h3 className="text-foreground text-xl font-semibold">{title}</h3>
    <p className="text-muted-foreground text-base leading-relaxed">{description}</p>
  </div>
)

export function WhyTaxmate() {
  const features = [
    {
      icon: Shield,
      title: "Transparent Payments",
      description:
        "Every transaction is recorded on the blockchain, ensuring complete transparency and accountability in tax collection.",
    },
    {
      icon: Database,
      title: "Immutable Records",
      description:
        "Tax records are permanently stored on-chain, preventing tampering and ensuring data integrity for all stakeholders.",
    },
    {
      icon: Zap,
      title: "Future-Ready Tax System",
      description:
        "Built with upgradeable smart contracts and modern technology to adapt to evolving tax regulations and requirements.",
    },
  ]

  return (
    <section className="w-full px-5 flex flex-col justify-center items-center">
      <div className="w-full py-8 md:py-16 flex flex-col justify-start items-start gap-12">
        <div className="self-stretch py-8 md:py-14 flex flex-col justify-center items-center gap-4">
          <h2 className="text-center text-foreground text-4xl md:text-5xl font-semibold leading-tight">
            Why Choose Taxmate?
          </h2>
          <p className="text-center text-muted-foreground text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
            Experience a new era of tax collection built on trust, transparency, and cutting-edge blockchain technology.
          </p>
        </div>
        <div className="self-stretch grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
