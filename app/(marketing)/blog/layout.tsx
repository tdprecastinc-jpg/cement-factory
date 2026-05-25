export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <section className="border-b bg-muted">
      <div className="relative py-6 sm:py-12">
        <div className="absolute inset-0 w-full bg-[url('/gallery/texture.jpg')] bg-cover bg-center opacity-80" />
        <div className="absolute inset-0 bg-black/50" aria-hidden />
      </div>
      <div className="@container pt-22 pb-16 md:pt-32 md:pb-24">{children}</div>
    </section>
  )
}
