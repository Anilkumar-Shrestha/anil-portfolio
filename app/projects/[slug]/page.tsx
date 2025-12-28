import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Github, ExternalLink, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

const projects = {
  "e-commerce-automation": {
    title: "E-commerce Test Automation Framework",
    description:
      "Comprehensive test automation suite for a large-scale e-commerce platform using Selenium WebDriver and TestNG.",
    fullDescription:
      "This project showcases a robust test automation framework built for a high-traffic e-commerce platform. The framework implements industry best practices including the Page Object Model design pattern, data-driven testing capabilities, and comprehensive reporting. It covers end-to-end user journeys including product search, cart management, checkout processes, and payment gateway integration testing.",
    image: "/automated-testing-dashboard.jpg",
    technologies: ["Selenium WebDriver", "Java", "TestNG", "Maven", "Jenkins", "Allure Reports"],
    features: [
      "Page Object Model architecture for maintainable test code",
      "Data-driven testing with Excel and CSV file integration",
      "Cross-browser testing support (Chrome, Firefox, Safari, Edge)",
      "Parallel test execution for faster feedback",
      "Integration with Jenkins CI/CD pipeline",
      "Comprehensive Allure reporting with screenshots",
      "Custom retry logic for flaky tests",
      "Database validation using JDBC",
    ],
    challenges: [
      "Handling dynamic content and AJAX-based elements",
      "Managing test data across multiple environments",
      "Optimizing test execution time for large test suites",
      "Implementing effective wait strategies for better stability",
    ],
    results: [
      "Reduced regression testing time from 2 days to 4 hours",
      "Achieved 85% test automation coverage",
      "Detected 150+ bugs before production release",
      "Improved team confidence in release quality",
    ],
    github: "https://github.com/Anilkumar-Shrestha",
    demo: "https://github.com/Anilkumar-Shrestha",
  },
  "api-testing-framework": {
    title: "API Testing Framework",
    description:
      "RESTful API testing framework with RestAssured and comprehensive reporting for microservices architecture.",
    fullDescription:
      "A sophisticated API testing framework designed to validate RESTful microservices. This framework provides comprehensive API validation including request/response validation, schema validation, performance testing, and security testing. Built with RestAssured and integrated with CI/CD pipelines for continuous testing.",
    image: "/api-testing-interface.jpg",
    technologies: ["RestAssured", "Java", "TestNG", "Postman", "Newman", "GitHub Actions", "JSON Schema Validator"],
    features: [
      "Comprehensive REST API testing with RestAssured",
      "JSON schema validation for response structures",
      "Authentication testing (OAuth, JWT, API Keys)",
      "Performance testing with response time assertions",
      "Data-driven testing with parameterized requests",
      "Integration with Postman collections",
      "Automated API documentation generation",
      "Database validation for API operations",
    ],
    challenges: [
      "Testing complex authentication flows across microservices",
      "Managing test data dependencies between services",
      "Validating asynchronous API responses",
      "Handling API rate limiting in test automation",
    ],
    results: [
      "Automated testing of 200+ API endpoints",
      "Reduced API testing time by 70%",
      "Identified 80+ API contract violations",
      "Enabled shift-left testing approach",
    ],
    github: "https://github.com/Anilkumar-Shrestha",
    demo: "https://github.com/Anilkumar-Shrestha",
  },
  "mobile-testing-suite": {
    title: "Mobile Test Automation Suite",
    description: "Cross-platform mobile automation framework using Appium for iOS and Android applications.",
    fullDescription:
      "A comprehensive mobile test automation solution supporting both iOS and Android platforms. This framework leverages Appium for cross-platform testing while maintaining platform-specific optimizations. It includes parallel execution on cloud devices, detailed reporting with screenshots and videos, and integration with popular CI/CD tools.",
    image: "/mobile-app-testing.png",
    technologies: ["Appium", "Python", "Pytest", "BrowserStack", "Azure DevOps", "Allure", "Selenium Grid"],
    features: [
      "Cross-platform testing for iOS and Android",
      "Cloud device testing with BrowserStack integration",
      "Parallel test execution across multiple devices",
      "Native app, hybrid app, and mobile web testing",
      "Screenshot and video recording for test failures",
      "Gesture automation (swipe, pinch, scroll)",
      "Deep linking and push notification testing",
      "Device farm integration for real device testing",
    ],
    challenges: [
      "Maintaining single codebase for both platforms",
      "Handling different OS versions and device sizes",
      "Managing app installation and cleanup",
      "Dealing with mobile-specific timing issues",
    ],
    results: [
      "Automated testing across 15+ device configurations",
      "Reduced mobile testing cycle from 3 days to 6 hours",
      "Caught 100+ platform-specific bugs",
      "Enabled continuous mobile app testing",
    ],
    github: "https://github.com/Anilkumar-Shrestha",
    demo: "https://github.com/Anilkumar-Shrestha",
  },
  "cypress-dashboard": {
    title: "Cypress E2E Testing Suite",
    description:
      "Modern end-to-end testing solution using Cypress for web applications with visual regression testing.",
    fullDescription:
      "A modern end-to-end testing framework built with Cypress that provides fast, reliable testing for web applications. This project includes visual regression testing with Percy, custom commands for reusable test logic, and real-time test execution monitoring. The framework is designed for developer-friendly testing with excellent debugging capabilities.",
    image: "/cypress-testing-dashboard.jpg",
    technologies: ["Cypress", "TypeScript", "Docker", "GitLab CI", "Percy", "Mochawesome", "Cucumber"],
    features: [
      "Fast and reliable E2E tests with Cypress",
      "Visual regression testing with Percy",
      "Custom commands library for reusability",
      "API mocking and stubbing capabilities",
      "Real-time test execution and debugging",
      "Screenshot and video recording",
      "BDD with Cucumber integration",
      "Docker containerization for consistent environments",
    ],
    challenges: [
      "Managing test flakiness in complex SPAs",
      "Handling authentication in automated tests",
      "Implementing effective visual regression thresholds",
      "Optimizing test suite for faster execution",
    ],
    results: [
      "Achieved 95% test stability rate",
      "Reduced E2E test execution time by 50%",
      "Detected 75+ visual regressions automatically",
      "Improved developer testing workflow",
    ],
    github: "https://github.com/Anilkumar-Shrestha",
    demo: "https://github.com/Anilkumar-Shrestha",
  },
  "performance-testing": {
    title: "Performance Testing Framework",
    description: "Load and performance testing framework using JMeter and Gatling for scalability validation.",
    fullDescription:
      "A comprehensive performance testing framework designed to validate application scalability and performance under various load conditions. This framework combines JMeter and Gatling to create realistic load scenarios, monitors system metrics, and provides detailed performance analysis. Integrated with continuous testing pipelines for performance regression detection.",
    image: "/performance-metrics-dashboard.png",
    technologies: ["JMeter", "Gatling", "Scala", "Grafana", "InfluxDB", "Jenkins", "BlazeMeter"],
    features: [
      "Load testing with JMeter and Gatling",
      "Real-time performance monitoring with Grafana",
      "Automated performance threshold validation",
      "Database performance testing",
      "API load and stress testing",
      "Performance metrics storage in InfluxDB",
      "Distributed load testing capabilities",
      "Performance regression detection",
    ],
    challenges: [
      "Creating realistic load test scenarios",
      "Identifying performance bottlenecks accurately",
      "Managing test data for high-volume tests",
      "Correlating performance metrics across layers",
    ],
    results: [
      "Identified and fixed 30+ performance bottlenecks",
      "Validated system can handle 10,000 concurrent users",
      "Reduced average response time by 40%",
      "Prevented 5 major production performance issues",
    ],
    github: "https://github.com/Anilkumar-Shrestha",
    demo: "https://github.com/Anilkumar-Shrestha",
  },
  "test-management": {
    title: "Test Management Dashboard",
    description:
      "Custom test management and reporting dashboard for real-time test execution insights and metrics tracking.",
    fullDescription:
      "A custom-built test management platform that provides comprehensive insights into test execution, coverage, and quality metrics. This dashboard aggregates data from multiple testing tools and presents it in an intuitive interface. It enables teams to track testing progress, identify trends, and make data-driven decisions about software quality.",
    image: "/test-management-dashboard.png",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Chart.js", "Socket.io", "Docker", "Nginx"],
    features: [
      "Real-time test execution monitoring",
      "Test coverage and quality metrics visualization",
      "Defect tracking and management",
      "Integration with multiple testing tools",
      "Customizable dashboards and reports",
      "Historical trend analysis",
      "Team collaboration features",
      "Export reports in multiple formats",
    ],
    challenges: [
      "Integrating data from diverse testing tools",
      "Ensuring real-time updates without performance impact",
      "Designing intuitive data visualizations",
      "Scaling to handle large test suites",
    ],
    results: [
      "Centralized testing data from 8 different tools",
      "Improved test visibility across teams",
      "Reduced reporting time from hours to minutes",
      "Enhanced decision-making with actionable insights",
    ],
    github: "https://github.com/Anilkumar-Shrestha",
    demo: "https://github.com/Anilkumar-Shrestha",
  },
}

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projects[params.slug as keyof typeof projects]

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} | Anil Kumar Shrestha`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Anil Kumar Shrestha`,
      description: project.description,
      url: `https://anilkumarshrestha.com.np/projects/${params.slug}`,
      type: "article",
      images: [
        {
          url: project.image,
          alt: project.title,
        },
      ],
    },
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <Link href="/projects">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Button>
        </Link>

        <Badge variant="secondary" className="mb-6">
          Project Details
        </Badge>

        <h1 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-balance">{project.title}</h1>

        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-3 mb-12">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Button variant="default" className="gap-2">
              <Github className="h-4 w-4" />
              View on GitHub
            </Button>
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="gap-2 bg-transparent">
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </Button>
          </a>
        </div>

        <div className="relative overflow-hidden rounded-lg border border-border mb-12 aspect-video bg-secondary">
          <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">{project.fullDescription}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-sm px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Key Features</h2>
            <div className="grid gap-3">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Challenges & Solutions</h2>
            <div className="space-y-4">
              {project.challenges.map((challenge, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-4">
                    <p className="text-muted-foreground">{challenge}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Results & Impact</h2>
            <div className="grid gap-3">
              {project.results.map((result, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{result}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-16 pt-12 border-t border-border">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <Link href="/projects">
              <Button variant="outline" className="gap-2 bg-transparent">
                <ArrowLeft className="h-4 w-4" />
                Back to all projects
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="gap-2">
                Interested in similar work? Get in touch
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
