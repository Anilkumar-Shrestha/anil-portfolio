"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Code2, TestTube2, Workflow, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function HomePageClient() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 lg:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge variant="secondary" className="mb-4 text-xs px-3 py-1">
              Available for opportunities
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight text-balance">
              Senior QA & Test Automation Engineer
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I design and build scalable, reliable test automation frameworks that help teams ship faster without
              compromising quality. With strong experience in{" "}
              <span className="font-semibold text-foreground">TypeScript, Playwright, Cypress, and Python</span>, I
              focus on preventing defects early, improving CI reliability, and enabling confident releases.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <Link href="/projects">
                <Button size="lg" className="gap-2 rounded-2xl">
                  View Projects <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="gap-2 rounded-2xl bg-transparent">
                  Contact Me
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="secondary" className="text-xs">
                Playwright
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Cypress
              </Badge>
              <Badge variant="secondary" className="text-xs">
                TypeScript
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Python
              </Badge>
              <Badge variant="secondary" className="text-xs">
                API Testing
              </Badge>
              <Badge variant="secondary" className="text-xs">
                CI/CD
              </Badge>
            </div>
            <div className="flex gap-4 text-muted-foreground">
              <Link href="https://github.com/Anilkumar-Shrestha" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 hover:text-foreground transition-colors cursor-pointer" />
              </Link>
              <Link href="https://www.linkedin.com/in/anil-kumar-shrestha/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 hover:text-foreground transition-colors cursor-pointer" />
              </Link>
              <Link href="mailto:your.email@example.com">
                <Mail className="h-5 w-5 hover:text-foreground transition-colors cursor-pointer" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-card border-border shadow-lg rounded-2xl">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Quick Highlights</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">7+ years of experience in QA & test automation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Strong background in modern E2E, API, and integration testing
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Proven experience building maintainable automation frameworks from scratch
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Deep understanding of CI/CD pipelines and release quality gates
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Product-minded QA who collaborates closely with developers and PMs
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-6 py-24 border-t border-border">
        <div className="max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 tracking-tight">About Me</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a quality-driven QA engineer who believes testing is not a phase—it's a continuous engineering
              practice.
            </p>
            <p>
              Over the years, I've worked on web platforms, internal tools, and customer-facing products, helping teams
              move from fragile manual testing to stable, scalable automation. I specialize in identifying high-risk
              areas, designing effective test strategies, and implementing automation that actually adds value instead
              of slowing teams down.
            </p>
            <p>
              I enjoy working at the intersection of engineering, product, and quality, where I can influence better
              architecture, clearer requirements, and smoother releases.
            </p>
          </div>
        </div>
      </section>

      {/* Core Skills Section */}
      <section className="bg-muted/30 py-20 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 tracking-tight">Core Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-card border-border rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <TestTube2 className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Test Automation & Framework Design</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Design and maintain robust automation frameworks using Playwright and Cypress with TypeScript,
                    focusing on readability, reusability, and long-term scalability.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <Code2 className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">End-to-End & API Testing</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Comprehensive E2E coverage combined with API-level validation to catch issues early and reduce flaky
                    UI tests.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <Workflow className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">CI/CD & Release Quality</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Integrate automated tests into CI/CD pipelines, enabling fast feedback, parallel execution, and
                    confident deployments.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <CheckCircle2 className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Test Strategy & Quality Ownership</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Define testing strategies, prioritize risk-based testing, and ensure quality is embedded throughout
                    the development lifecycle.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="container mx-auto px-6 py-24 border-t border-border">
        <div className="max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 tracking-tight">Tech Stack</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Code2 className="h-5 w-5 text-primary" />
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">JavaScript</Badge>
                <Badge variant="secondary">Python</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <TestTube2 className="h-5 w-5 text-primary" />
                Automation
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Playwright</Badge>
                <Badge variant="secondary">Cypress</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                Testing
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">E2E</Badge>
                <Badge variant="secondary">API</Badge>
                <Badge variant="secondary">Integration</Badge>
                <Badge variant="secondary">Regression</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Workflow className="h-5 w-5 text-primary" />
                CI/CD
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">GitHub Actions</Badge>
                <Badge variant="secondary">Pipeline-based testing</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Github className="h-5 w-5 text-primary" />
                Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Git</Badge>
                <Badge variant="secondary">GitHub</Badge>
                <Badge variant="secondary">Postman</Badge>
                <Badge variant="secondary">SQL</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                Approach
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Shift-left testing</Badge>
                <Badge variant="secondary">Maintainable automation</Badge>
                <Badge variant="secondary">Quality advocacy</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="bg-muted/30 py-20 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 tracking-tight">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card border-border rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-3">Scalable Test Automation Framework</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Built a production-ready automation framework using Playwright/Cypress with TypeScript, supporting
                    parallel execution, environment configuration, and CI integration.
                  </p>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-3 text-foreground">Impact</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Reduced regression testing time significantly</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Improved test stability and reporting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Enabled faster, more confident releases</span>
                      </li>
                    </ul>
                  </div>
                  <Link href="/projects">
                    <Button variant="outline" className="gap-2 rounded-2xl bg-transparent">
                      View All Projects <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-card border-border rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-3">API & Backend Test Coverage</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Designed API test suites to validate critical business flows and data integrity, reducing reliance
                    on slow UI-only testing.
                  </p>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-3 text-foreground">Impact</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Faster feedback for developers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Earlier defect detection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Improved overall test reliability</span>
                      </li>
                    </ul>
                  </div>
                  <Link href="/projects">
                    <Button variant="outline" className="gap-2 rounded-2xl bg-transparent">
                      View All Projects <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* QA Philosophy Section */}
      <section className="container mx-auto px-6 py-24 border-t border-border">
        <div className="max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 tracking-tight">QA Philosophy</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card border-border rounded-2xl">
              <CardContent className="p-6">
                <CheckCircle2 className="h-8 w-8 text-primary mb-3" />
                <p className="text-muted-foreground leading-relaxed">
                  Automation should support development, not slow it down
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border rounded-2xl">
              <CardContent className="p-6">
                <CheckCircle2 className="h-8 w-8 text-primary mb-3" />
                <p className="text-muted-foreground leading-relaxed">
                  Not everything needs automation — test the right things
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border rounded-2xl">
              <CardContent className="p-6">
                <CheckCircle2 className="h-8 w-8 text-primary mb-3" />
                <p className="text-muted-foreground leading-relaxed">Quality is a shared responsibility</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border rounded-2xl">
              <CardContent className="p-6">
                <CheckCircle2 className="h-8 w-8 text-primary mb-3" />
                <p className="text-muted-foreground leading-relaxed">
                  Stable tests are more valuable than high test counts
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border rounded-2xl md:col-span-2">
              <CardContent className="p-6">
                <CheckCircle2 className="h-8 w-8 text-primary mb-3" />
                <p className="text-muted-foreground leading-relaxed">Clear test design is as important as clean code</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent/50 py-20 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tight text-balance">
              Let's Build Quality Software Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              I'm open to Senior QA, Test Automation Engineer, and SDET roles where I can contribute to building
              reliable systems and strong quality culture.
            </p>
            <p className="text-muted-foreground mb-8">
              Let's connect and talk quality, automation, and scalable testing.
            </p>
            <Link href="/contact">
              <Button size="lg" className="gap-2 rounded-2xl">
                Get In Touch <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
