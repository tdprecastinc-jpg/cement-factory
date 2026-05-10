import { cn } from "@/lib/utils"
import Image from "next/image"

type Member = {
  name: string
  position: string
  image: string
  decoratorColors: string
}

const members: Member[] = [
  {
    name: "Concrete Blocks",
    position:
      "Durable and high-strength blocks for reliable construction projects.",
    image: "/gallery/pic-1.jpeg",
    decoratorColors: "from-purple-400 via-blue-400 to-amber-500",
  },
  {
    name: "Parking Tiles",
    position:
      "Heavy-duty tiles designed for long-lasting and organized parking spaces.",
    image: "/gallery/pic-2.jpeg",
    decoratorColors: "from-purple-400 via-sky-400 to-emerald-500",
  },
  {
    name: "Paver Blocks",
    position:
      "Stylish and durable paving solutions for walkways, driveways, and outdoor spaces.",
    image: "/gallery/pic-5.jpeg",
    decoratorColors: "from-rose-400 via-orange-400 to-yellow-500",
  },
  {
    name: "Readymade Walls",
    position:
      "Fast and efficient precast wall solutions for secure and modern structures.",
    image: "/gallery/pic-10.jpeg",
    decoratorColors: "from-teal-400 via-cyan-400 to-blue-500",
  },
]

export default function TeamSection() {
  return (
    <section className="bg-background py-16 md:py-32">
      <div className="@container mx-auto max-w-6xl px-6 lg:px-12">
        <div>
          <h2 className="text-sm font-semibold tracking-[0.14em] text-muted-foreground uppercase">
            Available Products
          </h2>
          <h1 className="mt-6 max-w-2xl text-4xl font-semibold text-balance text-foreground">
            A complete range of concrete blocks, parking tiles, pavers, and wall
            solutions for every project.
          </h1>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member, index) => (
              <div
                key={index}
                className="rounded-3xl bg-card p-2 shadow-xl ring-1 shadow-black/3 shadow-black/6.5 ring-border"
              >
                <div className="relative aspect-square overflow-hidden rounded-2xl before:absolute before:inset-0 before:z-1 before:rounded-2xl before:border before:border-foreground/10">
                  <div
                    aria-hidden
                    className={cn(
                      "pointer-events-none absolute inset-0 z-1 size-40 rounded-full bg-linear-to-r opacity-6.5 mix-blend-overlay blur-2xl will-change-transform md:size-72",
                      member.decoratorColors
                    )}
                  />
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={320}
                    height={540}
                    className="size-full object-cover object-top grayscale"
                  />
                </div>
                <div className="space-y-0.5 px-3 pt-3 pb-2">
                  <p className="font-medium text-foreground">{member.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {member.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
