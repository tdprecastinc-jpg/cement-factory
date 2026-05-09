import { Container } from "@/components/container"

const stats = [
  { label: "Monthly Production Capacity", value: "50,000+ tons" },
  { label: "Years of Manufacturing Experience", value: "12+ years" },
  { label: "Projects Supplied Across Regions", value: "300+ sites" },
  { label: "On-Time Delivery Performance", value: "98%" },
]

export function StatsSection() {
  return (
    <section
      id="products"
      className="scroll-mt-24 border-b-2 bg-card/90 py-24 md:py-32"
    >
      <Container asGrid>
        <div className="grid grid-cols-10 gap-px">
          <div aria-hidden className="max-sm:hidden">
            <div data-grid-content />
          </div>

          <div className="col-span-full grid gap-px sm:col-span-8 @4xl:grid-cols-2">
            <div data-grid-content className="col-span-full p-6 @4xl:p-12">
              <h2 className="text-balance text-muted-foreground">
                Trusted Capacity
              </h2>
              <p className="mt-6 max-w-2xl text-3xl leading-[1.2] font-medium text-balance text-foreground md:text-4xl">
                Reliable cement and block supply backed by measurable
                performance.
              </p>
            </div>

            {stats.map((stat) => (
              <div key={stat.label} data-grid-content className="p-6 @4xl:p-12">
                <p className="text-3xl font-semibold text-foreground">
                  {stat.value}
                </p>
                <p className="mt-2 text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          <div aria-hidden className="max-sm:hidden">
            <div data-grid-content />
          </div>
        </div>
      </Container>
    </section>
  )
}
