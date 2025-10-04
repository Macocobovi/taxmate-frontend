import { Star } from "lucide-react"

const TestimonialCard = ({ name, role, company, content, rating = 5 }) => (
  <div className="group relative overflow-hidden rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 flex flex-col gap-4 hover:border-primary/30 transition-all">
    <div className="flex gap-1">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
      ))}
    </div>
    <p className="text-foreground text-base font-body leading-relaxed italic">"{content}"</p>
    <div className="flex items-center gap-3 mt-2">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center text-foreground font-bold">
        {name.charAt(0)}
      </div>
      <div>
        <div className="text-foreground font-semibold">{name}</div>
        <div className="text-muted-foreground text-sm">
          {role} at {company}
        </div>
      </div>
    </div>
  </div>
)

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Developer",
      company: "TechCorp",
      content:
        "Pointer AI has cut our debugging time in half. The AI suggestions are incredibly accurate and have helped our team ship features 50% faster.",
    },
    {
      name: "Marcus Rodriguez",
      role: "Engineering Lead",
      company: "StartupXYZ",
      content:
        "The best debugging tool I've used in my 10-year career. It's like having a senior developer reviewing every line of code in real-time.",
    },
    {
      name: "Emily Watson",
      role: "Full Stack Developer",
      company: "DevStudio",
      content:
        "I was skeptical at first, but Pointer AI has become an essential part of my workflow. It catches bugs I would have missed and saves me hours every week.",
    },
  ]

  return (
    <section className="w-full px-5 flex flex-col justify-center items-center">
      <div className="w-full py-8 md:py-16 flex flex-col gap-12">
        <div className="flex flex-col justify-center items-center gap-4 max-w-3xl mx-auto">
          <h2 className="text-center text-foreground text-4xl md:text-5xl font-bold leading-tight">
            Loved by Developers Worldwide
          </h2>
          <p className="text-center text-muted-foreground text-lg md:text-xl font-body leading-relaxed">
            See what developers are saying about Pointer AI
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
