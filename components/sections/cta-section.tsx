import Link from "next/link"
import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import { SectionDoodleOverlay } from "@/components/ui/section-doodle-overlay"
import { FaWhatsapp } from "react-icons/fa"

export function CtaSection() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-b-2 bg-card/90 py-6"
    >
      <SectionDoodleOverlay
        variant="rings"
        placement="bottom-left"
        className="opacity-25"
      />
      <Container asGrid className="relative z-10">
        <div className="grid grid-cols-10 gap-px">
          <div aria-hidden className="max-sm:hidden">
            <div data-grid-content />
          </div>

          <div className="col-span-full sm:col-span-8">
            <div
              data-grid-content
              className="flex flex-col items-start gap-8 p-6 @4xl:p-24"
            >
              <h2 className="text-3xl font-semibold text-balance text-foreground sm:text-5xl">
                Need cement or blocks for your next project?
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-balance text-muted-foreground sm:text-lg">
                Talk to our team about bulk orders, custom delivery schedules,
                and product recommendations for residential, commercial, and
                infrastructure builds.
              </p>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="ring ring-foreground/30"
              >
                <Link
                  href="https://api.whatsapp.com/send?phone=918798516721"
                  target="_blank"
                >
                  Contact Us <FaWhatsapp className="size-6 text-green-500" />
                </Link>
              </Button>
            </div>
          </div>

          <div aria-hidden className="max-sm:hidden">
            <div data-grid-content />
          </div>
        </div>
      </Container>
    </section>
  )
}
