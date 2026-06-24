import { IntegrationsIllustration } from "@/components/ui/illustrations/integrations-illustration"
import {
  Zap,
  Sparkles,
  Lock,
  Cpu,
  Factory,
  Leaf,
  CheckCircle2,
} from "lucide-react"
import { InvoiceIllustration } from "@/components/ui/illustrations/invoice-illustration"
import { cn } from "@/lib/utils"
import { MdOutlineHealthAndSafety } from "react-icons/md"
import FingerprintScanIllustration from "./illustrations/fingerprint-scan"

const values = [
  {
    icon: CheckCircle2,
    title: "Quality First",
    accentClassName:
      "group-hover:text-green-600 dark:group-hover:text-green-400",

    borderClassName: "hover:border-green-600/50 dark:hover:border-green-400/50",
    description: "Quality-tested for strength, consistency, and durability.",
  },
  {
    icon: MdOutlineHealthAndSafety,
    title: "Worker Safety",
    accentClassName:
      "group-hover:text-yellow-600 dark:group-hover:text-yellow-400",
    borderClassName:
      "hover:border-yellow-600/50 dark:hover:border-yellow-400/50",
    description:
      "Strict safety standards guide our production and delivery processes.",
  },
  {
    icon: Leaf,
    title: "Sustainable Production",
    accentClassName: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
    borderClassName: "hover:border-blue-600/50 dark:hover:border-blue-400/50",
    description: "Our process cuts waste and improves resource efficiency.",
  },
  {
    icon: Factory,
    title: "Industrial Scale",
    accentClassName: "group-hover:text-red-600 dark:group-hover:text-red-400",
    borderClassName: "hover:border-red-600/50 dark:hover:border-red-400/50",
    description:
      "Dependable supply for projects of any size without sacrificing quality.",
  },
]

export default function FeaturesSection() {
  return (
    <section className="@container py-16 md:py-32">
      <div className="mx-auto mb-12 max-w-5xl px-6 xl:px-0">
        <h2 className="text-balance text-muted-foreground">Core Values</h2>
        <p className="mt-6 max-w-2xl text-3xl leading-[1.2] font-medium font-semibold text-balance text-foreground sm:text-4xl md:text-5xl">
          The{" "}
          <span className="font-semibold text-green-600 dark:text-green-400">
            principles
          </span>{" "}
          that guide every production run, quality check, and delivery from our
          factory.
        </p>
      </div>
      <div className="mx-auto w-full max-w-5xl px-6 xl:px-0">
        <div className="relative">
          <PlusDecorator className="-translate-[calc(50%-0.5px)]" />
          <PlusDecorator className="right-0 translate-x-[calc(50%-0.5px)] -translate-y-[calc(50%-0.5px)]" />
          <PlusDecorator className="right-0 bottom-0 translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)]" />
          <PlusDecorator className="bottom-0 -translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)]" />

          <div className="relative grid grid-cols-2 divide-x divide-y divide-foreground/10 overflow-hidden border border-foreground/10 *:p-4 *:nth-1:border-b! *:nth-2:border-r-0 @max-4xl:*:first:border-r-0 @max-4xl:*:nth-4:border-r-0 @max-4xl:*:nth-5:border-b-0 @4xl:grid-cols-4 @4xl:*:p-8 @4xl:*:not-nth-2:border-b-0">
            <div className="col-span-full row-span-2 grid grid-rows-subgrid gap-8 !p-8 @4xl:col-span-2">
              <div className="relative mx-auto w-full max-w-84 self-center">
                <InvoiceIllustration />
                <div className="absolute right-0 bottom-0">
                  <video
                    src="/animated-icons/cement-truck.mp4"
                    autoPlay
                    muted
                    loop
                    className="h-24 w-24 object-cover dark:brightness-96 dark:invert-[0.95]"
                  />
                </div>
              </div>
              <div className="mx-auto max-w-sm text-center">
                <h3 className="font-semibold text-balance">
                  On-Time, Every Time
                </h3>
                <p className="mt-3 text-muted-foreground">
                  We deliver dependable supply so your projects stay on track.
                </p>
              </div>
            </div>
            <div className="relative col-span-full row-span-2 grid grid-rows-subgrid gap-8 !p-8 @4xl:col-span-2">
              <PlusDecorator className="bottom-0 -translate-x-[calc(50%+0.5px)] translate-y-[calc(50%+0.5px)]" />

              <div className="mx-auto max-w-sm self-center @4xl:px-8">
                <FingerprintScanIllustration />
              </div>
              <div className="relative z-10 mx-auto max-w-sm text-center">
                <h3 className="font-semibold text-balance">Built on Trust</h3>
                <p className="mt-3 text-muted-foreground">
                  Our customers rely on us for consistent quality, honest
                  service, and dependable delivery.
                </p>
              </div>
            </div>

            {values.map((value) => (
              <div
                className="group cursor-default space-y-3 transition-colors duration-300 ease-in-out"
                key={value.title}
              >
                <div
                  className={cn(
                    "flex items-center gap-2 transition-colors duration-300 ease-in-out",
                    value.accentClassName
                  )}
                >
                  <value.icon
                    className={cn(
                      "size-4 text-foreground transition-colors duration-300 ease-in-out",
                      value.accentClassName
                    )}
                  />
                  <h3 className="text-sm font-medium transition-colors duration-300 ease-in-out">
                    {value.title}
                  </h3>
                </div>
                <p
                  className={cn(
                    "text-sm text-muted-foreground transition-colors duration-300 ease-in-out",
                    value.accentClassName
                  )}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const PlusDecorator = ({ className }: { className?: string }) => (
  <div
    aria-hidden
    className={cn(
      "absolute size-3 mask-radial-from-15% before:absolute before:inset-0 before:m-auto before:h-px before:bg-foreground/25 after:absolute after:inset-0 after:m-auto after:w-px after:bg-foreground/25",
      className
    )}
  />
)
