import Link from "next/link"
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react"
import { Container } from "@/components/container"
import { EnterpriseForm } from "@/components/enterprise-form"
import { SectionDoodleOverlay } from "@/components/ui/section-doodle-overlay"
import MapIllustration from "../illustrations/map-2"
import { cn } from "@/lib/utils"

const benefits = [
  "Bulk order pricing support",
  "Dedicated account manager",
  "Flexible delivery schedules",
  "Fast quotation turnaround",
]

const stats = [
  { value: "24h", label: "Quote turnaround" },
  { value: "500+", label: "Projects delivered" },
  { value: "100%", label: "Quality assured" },
]

export function ContactGridTwoContactFiveSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-b-2 bg-card/90 py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-end overflow-hidden mask-[radial-gradient(ellipse_at_right,white,transparent_70%)] opacity-40 sm:opacity-55"
      >
        <div className="-mr-20 w-[110%] max-w-none sm:-mr-32 lg:-mr-40">
          <MapIllustration />
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-linear-to-r from-transparent via-foreground/15 to-transparent"
      />

      <SectionDoodleOverlay
        variant="blueprint"
        placement="top-left"
        className="opacity-20"
      />

      <Container>
        <div className="grid gap-12 p-6 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:p-16">
          <div className="flex flex-col gap-9">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/70 px-3 py-1.5 text-xs font-medium tracking-wider text-muted-foreground uppercase backdrop-blur-sm">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-green-500" />
                </span>
                Request a quotation
              </span>
              <h2 className="text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
                Let&apos;s build your next project together
              </h2>
              <p className="max-w-lg text-base leading-relaxed text-balance text-muted-foreground sm:text-lg">
                Tell us about your concrete and block requirements. Our team
                gets back within 24 hours with pricing, availability, and
                delivery options for your site.
              </p>
            </div>

            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-2.5 text-sm text-foreground/90"
                >
                  <CheckCircle2
                    className="mt-0.5 size-5 shrink-0 text-green-600"
                    aria-hidden
                  />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-stretch gap-x-6 gap-y-4 border-t border-foreground/10 pt-6">
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-6">
                  {i > 0 && (
                    <div aria-hidden className="h-10 w-px bg-foreground/10" />
                  )}
                  <div>
                    <div className="text-2xl font-semibold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-4 border-t border-foreground/10 pt-6 sm:grid-cols-2">
              <ContactRow
                icon={<Mail className="size-4" />}
                label="Email us"
                value="yomnyakamdaktadur@gmail.com"
                href="mailto:yomnyakamdaktadur@gmail.com"
              />
              <ContactRow
                icon={<Phone className="size-4" />}
                label="Call or WhatsApp"
                value="+91 87985 16721"
                href="https://api.whatsapp.com/send?phone=918798516721"
                external
              />
              <ContactRow
                icon={<MapPin className="size-4" />}
                label="Visit our factory"
                value="Likabali, Arunachal Pradesh, India"
                className="sm:col-span-2"
              />
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-[2rem] bg-linear-to-br from-green-500/15 via-foreground/5 to-sky-500/10 blur-2xl"
            />
            <div className="relative rounded-2xl border border-foreground/10 bg-background/85 p-6 shadow-2xl shadow-black/10 backdrop-blur-md sm:p-8 lg:p-10">
              <div className="mb-6 space-y-1.5">
                <h3 className="text-xl font-semibold text-foreground">
                  Send us a message
                </h3>
                <p className="text-sm text-muted-foreground">
                  Our sales team will respond within one business day.
                </p>
              </div>
              <EnterpriseForm />
            </div>

            <div
              aria-hidden
              className="absolute -top-3 -right-3 hidden size-24 rounded-full bg-green-500/10 blur-2xl sm:block"
            />
            <div
              aria-hidden
              className="absolute -bottom-4 -left-4 hidden size-32 rounded-full bg-sky-500/10 blur-3xl sm:block"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

const ContactRow = ({
  icon,
  label,
  value,
  href,
  external,
  className,
}: {
  icon: React.ReactNode
  label: string
  value: string
  href?: string
  external?: boolean
  className?: string
}) => {
  const content = (
    <div className="group flex items-center gap-3">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-foreground/10 bg-background/70 text-foreground/70 shadow-sm transition-all duration-200 group-hover:-translate-y-0.5 group-hover:border-green-500/40 group-hover:text-green-600 group-hover:shadow-md">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-[10px] font-medium tracking-wider text-muted-foreground uppercase">
          {label}
        </div>
        <div className="truncate text-sm font-medium text-foreground">
          {value}
        </div>
      </div>
    </div>
  )

  if (href) {
    return (
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={cn("transition-opacity", className)}
      >
        {content}
      </Link>
    )
  }

  return <div className={className}>{content}</div>
}
