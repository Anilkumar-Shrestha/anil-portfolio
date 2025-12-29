import "./globals.css"
import { Inter, Fira_Code } from "next/font/google"
import Link from "next/link"
import type React from "react"
import { Github, Linkedin, Mail } from "lucide-react"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap", preload: true })
const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  preload: true,
  weights: [400, 500, 700],
})

export const metadata = {
  metadataBase: new URL("https://anilkumarshrestha.com.np"),
  title: {
    default: "Anil Kumar Shrestha - Senior QA Automation Engineer",
    template: "%s | Anil Kumar Shrestha",
  },
  description:
    "Portfolio of Anil Kumar Shrestha - Senior QA Automation Engineer specializing in test automation, CI/CD, and quality assurance",
  keywords: [
    "QA Automation",
    "Test Automation",
    "Selenium",
    "Cypress",
    "API Testing",
    "CI/CD",
    "Quality Assurance",
    "Anil Kumar Shrestha",
  ],
  authors: [{ name: "Anil Kumar Shrestha" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anilkumarshrestha.com.np",
    siteName: "Anil Kumar Shrestha Portfolio",
    title: "Anil Kumar Shrestha - Senior QA Automation Engineer",
    description:
      "Portfolio of Anil Kumar Shrestha - Senior QA Automation Engineer specializing in test automation, CI/CD, and quality assurance",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anil Kumar Shrestha - Senior QA Automation Engineer",
    description:
      "Portfolio of Anil Kumar Shrestha - Senior QA Automation Engineer specializing in test automation, CI/CD, and quality assurance",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${firaCode.variable} font-sans antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Anil Kumar Shrestha
          </Link>
          <ul className="flex items-center space-x-8">
            <li>
              <Link href="/#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/experience" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Experience
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Anilkumar-Shrestha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/anil-kumar-shrestha/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:anil@anilkumarshrestha.com.np"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground">© 2025 Anil Kumar Shrestha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
