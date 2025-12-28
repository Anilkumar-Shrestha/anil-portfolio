import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects | Anil Kumar Shrestha - Test Automation Portfolio",
  description:
    "Explore test automation frameworks and QA projects by Anil Kumar Shrestha, featuring Selenium, Cypress, API testing, and CI/CD implementations.",
  openGraph: {
    title: "Projects | Anil Kumar Shrestha",
    description:
      "Explore test automation frameworks and QA projects by Anil Kumar Shrestha, featuring Selenium, Cypress, API testing, and CI/CD implementations.",
    url: "https://anilkumarshrestha.com.np/projects",
    type: "website",
  },
}

const projects = [
  {
    id: 1,
    slug: "e-commerce-automation",
    title: "E-commerce Test Automation Framework",
    description:
      "Comprehensive test automation suite for a large-scale e-commerce platform using Selenium WebDriver and TestNG. Implemented Page Object Model pattern with data-driven testing capabilities.",
    image: "/automated-testing-dashboard.jpg",
    technologies: ["Selenium", "Java", "TestNG", "Maven", "Jenkins"],
  },
  {
    id: 2,
    slug: "api-testing-framework",
    title: "API Testing Framework",
    description:
      "RESTful API testing framework with RestAssured and comprehensive reporting. Includes automated validation of response schemas, performance testing, and integration with CI/CD pipelines.",
    image: "/api-testing-interface.jpg",
    technologies: ["RestAssured", "Java", "Postman", "Newman", "GitHub Actions"],
  },
  {
    id: 3,
    slug: "mobile-testing-suite",
    title: "Mobile Test Automation Suite",
    description:
      "Cross-platform mobile automation framework using Appium for iOS and Android apps. Features parallel test execution, detailed reporting, and cloud device integration.",
    image: "/mobile-app-testing.png",
    technologies: ["Appium", "Python", "Pytest", "BrowserStack", "Azure DevOps"],
  },
  {
    id: 4,
    slug: "cypress-dashboard",
    title: "Cypress E2E Testing Suite",
    description:
      "Modern end-to-end testing solution using Cypress for web applications. Includes visual regression testing, custom commands, and real-time test execution monitoring.",
    image: "/cypress-testing-dashboard.jpg",
    technologies: ["Cypress", "TypeScript", "Docker", "GitLab CI", "Percy"],
  },
  {
    id: 5,
    slug: "performance-testing",
    title: "Performance Testing Framework",
    description:
      "Load and performance testing framework using JMeter and Gatling. Automated performance regression testing with detailed metrics and threshold monitoring.",
    image: "/performance-metrics-dashboard.png",
    technologies: ["JMeter", "Gatling", "Scala", "Grafana", "InfluxDB"],
  },
  {
    id: 6,
    slug: "test-management",
    title: "Test Management Dashboard",
    description:
      "Custom test management and reporting dashboard built with React and Node.js. Provides real-time test execution insights, test coverage metrics, and defect tracking.",
    image: "/test-management-dashboard.png",
    technologies: ["React", "Node.js", "MongoDB", "Chart.js", "Express"],
  },
]

export default function Projects() {
  return (
    <div className="container mx-auto px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <Badge variant="secondary" className="mb-6">
            Portfolio
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Projects</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            A collection of test automation frameworks and quality assurance projects I've built. Each project
            demonstrates different testing approaches and technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.slug}`}>
              <Card className="bg-card border-border overflow-hidden group hover:border-primary transition-colors cursor-pointer h-full">
                <div className="relative overflow-hidden aspect-video bg-secondary">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-primary font-medium">
                    View details <ArrowRight className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
