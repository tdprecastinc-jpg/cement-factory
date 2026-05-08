import { EnterpriseForm } from '@/app/grid-2/components/enterprise-form'
import { Container } from '@/app/grid-2/components/container'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'

const benefits = ['24/7 support availability', 'Dedicated account manager', 'Custom integrations', 'Priority response time']

export default function ContactSalesPage() {
    return (
        <section id="home">
            <Container className="@4xl:px-12 px-6 py-3">
                <span className="text-muted-foreground font-mono text-sm uppercase">Sales</span>
            </Container>
            <Container asGrid>
                <div className="@4xl:grid-cols-2 grid gap-px">
                    <div
                        data-grid-content
                        className="@4xl:p-12 p-6">
                        <h1 className="text-foreground text-balance text-5xl font-semibold tracking-tight">Ready to scale your business?</h1>
                        <p className="text-muted-foreground mt-6 text-balance text-lg">Get in touch with our sales team to discuss custom solutions for your organization.</p>

                        <ul className="mt-8 space-y-3">
                            {benefits.map((benefit) => (
                                <li
                                    key={benefit}
                                    className="flex items-center gap-3">
                                    <CheckCircle2 className="size-4 shrink-0 fill-emerald-400/25 text-emerald-600 dark:text-emerald-500" />
                                    <span className="text-sm">{benefit}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="text-muted-foreground mt-8 text-sm">
                            Looking for general support?{' '}
                            <Link
                                href="#support"
                                className="text-primary font-medium hover:underline">
                                Visit our help center
                            </Link>
                        </div>

                        <div className="mt-12 space-y-6 *:space-y-2">
                            <div>
                                <h3 className="text-muted-foreground text-sm">Email</h3>
                                <Link
                                    href="mailto:hello@tailark.com"
                                    className="text-foreground hover:decoration-primary text-sm font-medium hover:underline">
                                    hello@tailark.com
                                </Link>
                            </div>

                            <div>
                                <h3 className="text-muted-foreground text-sm">Phone</h3>
                                <Link
                                    href="tel:+1234567890"
                                    className="text-foreground hover:decoration-primary text-sm font-medium hover:underline">
                                    +1 (234) 567-890
                                </Link>
                            </div>

                            <div>
                                <h3 className="text-muted-foreground text-sm">Office</h3>
                                <p className="text-foreground text-sm font-medium">
                                    123 Innovation Drive
                                    <br />
                                    San Francisco, CA 94107
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        data-grid-content
                        className="@4xl:p-12 p-6">
                        <h2 className="text-foreground font-medium">Talk to our team</h2>
                        <p className="text-muted-foreground mb-12 mt-2 text-sm">Fill out the form and we'll be in touch within 24 hours.</p>

                        <EnterpriseForm />
                    </div>
                </div>
            </Container>
        </section>
    )
}