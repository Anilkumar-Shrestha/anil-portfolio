import ContactClient from "./contactClient"

export const metadata = {
  title: "Contact | Anil Kumar Shrestha - Get in Touch",
  description:
    "Get in touch with Anil Kumar Shrestha for QA automation consulting, speaking engagements, or collaboration opportunities. Available for freelance projects and full-time opportunities.",
  openGraph: {
    title: "Contact | Anil Kumar Shrestha",
    description:
      "Get in touch with Anil Kumar Shrestha for QA automation consulting, speaking engagements, or collaboration opportunities.",
    url: "https://anilkumarshrestha.com.np/contact",
    type: "website",
  },
}

export default function ContactPage() {
  return <ContactClient />
}
