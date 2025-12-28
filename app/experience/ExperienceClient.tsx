"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export default function ExperienceClient() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* PAGE HEADER */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div>
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold">
            Experience
          </motion.h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
            Senior / Staff-level QA & SDET experience focused on automation strategy, reliability engineering, and
            measurable delivery impact.
          </p>
        </div>
      </section>

      {/* TIMELINE LAYOUT */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-[1fr_4px_12fr] gap-8">
          <div />
          <div className="bg-border rounded-full" />
          <div className="space-y-12">
            {/* PetsVivo */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Card className="rounded-2xl shadow-sm">
                <CardContent className="p-8">
                  <header className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded bg-muted flex items-center justify-center text-xl font-bold">
                      PV
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-semibold">QA Lead</h2>
                      <a
                        href="https://www.linkedin.com/company/petsvivo/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-primary"
                      >
                        PetsVivo
                      </a>
                      <p className="text-sm text-muted-foreground">Remote · Jan 2025 – Present</p>
                    </div>
                  </header>

                  <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-muted rounded-xl p-3 text-sm">📈 QA Strategy & Team Leadership</div>
                    <div className="bg-muted rounded-xl p-3 text-sm">🚀 Automation Architecture & Scalability</div>
                    <div className="bg-muted rounded-xl p-3 text-sm">⚙️ Collaboration with Product & Engineering</div>
                  </div>

                  <p className="mt-4 text-muted-foreground max-w-4xl">
                    Leading QA strategy and automation architecture for a pet-inclusive infrastructure platform
                    supporting real estate and hospitality products.
                  </p>

                  <details className="mt-5">
                    <summary className="cursor-pointer font-medium">Key achievements</summary>
                    <ul className="mt-3 list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Defined end-to-end QA strategy aligned with SDET and Staff-level quality practices.</li>
                      <li>Established scalable automation standards across UI, API, and CI pipelines.</li>
                      <li>Partnered with product and engineering leaders to reduce release risk.</li>
                    </ul>
                  </details>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {["Playwright", "Cypress", "TypeScript", "API Testing", "CI/CD", "Test Strategy", "Leadership"].map(
                      (skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* KUDO (grouped roles) */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Card className="rounded-2xl shadow-sm">
                <CardContent className="p-8 space-y-8">
                  <header className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded bg-muted flex items-center justify-center text-xl font-bold">
                      K
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-semibold">KUDO</h2>
                      <p className="text-sm text-muted-foreground">Ontario, Canada · Nov 2020 – Oct 2024</p>
                    </div>
                  </header>

                  {/* Senior QA Automation Engineer */}
                  <div>
                    <h3 className="text-xl font-semibold">Senior QA Automation Engineer</h3>
                    <p className="text-sm text-muted-foreground">Oct 2022 – Oct 2024</p>
                    <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-muted rounded-xl p-3 text-sm">📈 Team Mentoring & Productivity</div>
                      <div className="bg-muted rounded-xl p-3 text-sm">🚀 Hotfix Reduction & Stability Improvement</div>
                      <div className="bg-muted rounded-xl p-3 text-sm">⚙️ Test Environment Cost Optimization</div>
                    </div>
                    <details className="mt-4">
                      <summary className="cursor-pointer font-medium">Key achievements</summary>
                      <ul className="mt-3 list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Owned test automation strategy across web, API, and CI/CD layers.</li>
                        <li>Reduced production incidents by moving validation upstream.</li>
                        <li>Partnered with DevOps to optimize test infrastructure and pipelines.</li>
                      </ul>
                    </details>
                  </div>

                  {/* QA Automation Engineer */}
                  <div className="pt-6 border-t border-border">
                    <h3 className="text-xl font-semibold">QA Automation Engineer</h3>
                    <p className="text-sm text-muted-foreground">Toronto, Canada · Nov 2020 – Oct 2022</p>
                    <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-muted rounded-xl p-3 text-sm">📈 Automation Framework Implementation</div>
                      <div className="bg-muted rounded-xl p-3 text-sm">🚀 Parallel E2E Test Execution</div>
                      <div className="bg-muted rounded-xl p-3 text-sm">⚙️ CI/CD Release Cycle Optimization</div>
                    </div>
                    <details className="mt-3">
                      <summary className="cursor-pointer font-medium">Key achievements</summary>
                      <ul className="mt-3 list-disc list-inside text-muted-foreground space-y-2">
                        <li>Built scalable Playwright and Cypress automation frameworks.</li>
                        <li>Executed 1000+ parallel E2E tests across environments.</li>
                        <li>Accelerated release cycles via Dockerized CI pipelines.</li>
                      </ul>
                    </details>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {[
                        "Selenium",
                        "Postman",
                        "Java",
                        "SQL",
                        "Framework Design",
                        "Datadog",
                        "TestRail",
                        "API Testing",
                        "Git",
                        "Confluence",
                        "Heap Analytics",
                        "TestNG",
                        "Docker",
                      ].map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Deerwalk – Collapsible roles */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Card className="rounded-2xl shadow-sm">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded bg-muted flex items-center justify-center text-xl font-bold">
                      D
                    </div>
                    <div className="flex-1">
                      <details open>
                        <summary className="cursor-pointer">
                          <h2 className="text-2xl font-semibold inline">Deerwalk Inc.</h2>
                          <p className="text-sm text-muted-foreground">Kathmandu, Nepal · May 2013 – Jul 2018</p>
                        </summary>
                        <div className="mt-4 space-y-6">
                          <div>
                            <h3 className="font-semibold text-lg">Senior Data QA Engineer</h3>
                            <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div className="bg-muted rounded-xl p-3 text-sm">📈 Data QA Strategy & Oversight</div>
                              <div className="bg-muted rounded-xl p-3 text-sm">
                                🚀 Team Mentoring & Process Standardization
                              </div>
                              <div className="bg-muted rounded-xl p-3 text-sm">
                                ⚙️ QA Process Streamlining & Automation
                              </div>
                            </div>
                            <ul className="mt-3 list-disc list-inside text-muted-foreground space-y-1">
                              <li>Led data quality strategy and release validation.</li>
                              <li>Mentored QA engineers and standardized processes.</li>
                            </ul>
                          </div>
                          <div className="pt-4 border-t border-border">
                            <h3 className="font-semibold text-lg">Data Research Engineer</h3>
                            <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div className="bg-muted rounded-xl p-3 text-sm">
                                📈 Data Analysis & Pipeline Validation
                              </div>
                              <div className="bg-muted rounded-xl p-3 text-sm">🚀 Algorithm Testing & Verification</div>
                              <div className="bg-muted rounded-xl p-3 text-sm">⚙️ Data Testing Improvements</div>
                            </div>
                            <ul className="mt-3 list-disc list-inside text-muted-foreground space-y-1">
                              <li>Analyzed large-scale datasets and data pipelines.</li>
                              <li>Validated algorithms and data transformations.</li>
                            </ul>
                          </div>

                          {/* Deerwalk skill badges at bottom */}
                          <div className="mt-5 flex flex-wrap gap-2">
                            {["SQL", "Python", "Data QA", "Automation", "AWS Redshift"].map((skill) => (
                              <Badge key={skill} variant="secondary">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </details>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
