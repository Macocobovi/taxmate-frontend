import { UserPlus, CreditCard, FileCheck } from "lucide-react"

const StepCard = ({ number, icon: Icon, title, description, isLast = false }) => (
  <div className="relative flex flex-col items-center text-center gap-6 p-6">
    {!isLast && (
      <div className="hidden lg:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/50 via-secondary/30 to-transparent" />
    )}
    <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary via-primary to-secondary flex items-center justify-center text-background font-bold text-2xl shadow-2xl shadow-primary/50 ring-2 ring-primary/20">
      {number}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-50 blur-xl" />
    </div>
    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/30 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-primary/10">
      <Icon className="w-10 h-10 text-primary" />
    </div>
    <h3 className="text-foreground text-xl font-bold">{title}</h3>
    <p className="text-muted-foreground text-base leading-relaxed max-w-xs">{description}</p>
  </div>
)

export function HowItWorks() {
  const steps = [
    {
      icon: UserPlus,
      title: "Register as Taxpayer",
      description:
        "Create your account as an individual or business taxpayer. Receive your unique TIN and view assigned tax categories.",
    },
    {
      icon: CreditCard,
      title: "Make Secure Payments",
      description:
        "Pay your taxes securely through the platform. All transactions are recorded on the blockchain for transparency.",
    },
    {
      icon: FileCheck,
      title: "Track Your Records",
      description:
        "Access your complete payment history, download receipts, and verify transactions on the immutable ledger anytime.",
    },
  ]

  return (
    <section className="w-full px-5 flex flex-col justify-center items-center">
      <div className="w-full py-8 md:py-16 flex flex-col gap-16">
        <div className="flex flex-col justify-center items-center gap-4 max-w-3xl mx-auto">
          <h2 className="text-center text-foreground text-4xl md:text-5xl font-bold leading-tight">How It Works</h2>
          <p className="text-center text-muted-foreground text-lg md:text-xl font-body leading-relaxed text-pretty">
            Start managing your taxes transparently in three simple steps
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {steps.map((step, index) => (
            <StepCard key={step.title} number={index + 1} {...step} isLast={index === steps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
