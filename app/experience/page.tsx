import type { Metadata } from "next"
import ExperienceClient from "./ExperienceClient"

export const metadata: Metadata = {
  title: "Experience | Anil Kumar Shrestha - Senior QA Automation Engineer",
  description:
    "Explore Anil Kumar Shrestha's professional experience in QA automation, test frameworks, and software quality assurance.",
  openGraph: {
    title: "Experience | Anil Kumar Shrestha",
    description:
      "Explore Anil Kumar Shrestha's professional experience in QA automation, test frameworks, and software quality assurance.",
    url: "https://anilkumarshrestha.com.np/experience",
    type: "profile",
  },
}

export default function ExperiencePage() {
  return <ExperienceClient />
}
