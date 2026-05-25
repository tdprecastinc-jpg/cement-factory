import { createClient } from "next-sanity"

export const client = createClient({
  projectId: "pr3yt8u3",
  dataset: "production",
  apiVersion: "2026-05-15",
  useCdn: false,
})
