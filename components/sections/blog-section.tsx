import { getInitialPosts } from "@/lib/actions"
import Blog from "../blog-1"
import { Container } from "../container"

export default async function BlogSection() {
  const posts = await getInitialPosts()

  return (
    <section
      id="blogs"
      className="relative overflow-hidden border-b-2 bg-card/90 py-24 md:py-32"
    >
      <Blog posts={posts} />
    </section>
  )
}
