import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Anil Kumar Shrestha - Senior QA Automation Engineer",
  description:
    "Learn about Anil Kumar Shrestha's background, expertise in test automation, and passion for software quality assurance.",
  openGraph: {
    title: "About | Anil Kumar Shrestha",
    description:
      "Learn about Anil Kumar Shrestha's background, expertise in test automation, and passion for software quality assurance.",
    url: "https://anilkumarshrestha.com.np/about",
    type: "profile",
  },
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <Badge variant="secondary" className="mb-6">
          About Me
        </Badge>
        <h1 className="text-4xl lg:text-5xl font-bold mb-8 tracking-tight text-balance">
          Passionate about Quality Engineering
        </h1>

        <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm a passionate QA professional dedicated to building quality into every stage of the software development
            lifecycle. My approach combines technical expertise with strategic thinking to create comprehensive testing
            solutions that ensure software reliability and performance.
          </p>

          <p>
            With over 7 years of experience in quality assurance and test automation, I have worked with diverse teams
            and technologies to deliver high-quality software products. My journey started with manual testing, and I
            quickly realized the power of automation in accelerating the testing process while maintaining accuracy.
          </p>

          <p>
            Currently, I focus on test automation using modern frameworks like Selenium, Cypress, and Playwright. I
            believe in writing maintainable, scalable test code that serves as living documentation for the application.
            My expertise extends to API testing, mobile automation, performance testing, and implementing comprehensive
            CI/CD pipelines.
          </p>

          <p>
            Beyond automation, I work closely with development teams to implement quality gates, optimize CI/CD
            pipelines, and foster a culture where quality is everyone's responsibility. I mentor junior engineers and
            actively contribute to improving testing practices across organizations.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Core Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Quality First</h3>
                <p className="text-muted-foreground">
                  Quality is not an afterthought but an integral part of the development process from day one.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Continuous Learning</h3>
                <p className="text-muted-foreground">
                  Technology evolves rapidly, and staying updated with the latest tools and practices is essential.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Collaboration</h3>
                <p className="text-muted-foreground">
                  Great software is built by great teams working together towards a common goal.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Automation Excellence</h3>
                <p className="text-muted-foreground">
                  Smart automation accelerates delivery while maintaining high quality standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
