"use client"

import { useRef, useState, useMemo, useCallback } from "react"
import { motion, useInView, AnimatePresence } from "motion/react"
import { Clock, Users, DollarSign, TrendingUp, Calculator } from "lucide-react"

import { GradientHeading } from "@/components/gradient-heading"
import { SectionCard } from "@/components/section-card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useRequestAccessModal } from "@/lib/context/request-access-modal-context"
import { cn } from "@/lib/utils"

// Constants for calculations
const TIME_SAVINGS_PERCENTAGE = 0.7 // 70% reduction in documentation time
const LYFE_AI_MONTHLY_COST = 1500 // $1,500/month for 10 providers
const LYFE_AI_COST_PER_PROVIDER = 150 // $150/provider/month
const AVERAGE_VISIT_DURATION_MINUTES = 15 // Average patient visit
const WORKING_DAYS_PER_MONTH = 22

// Patient volume options with midpoint values for calculations
const PATIENT_VOLUME_OPTIONS = [
  { label: "Under 100 patients", value: "under-100", midpoint: 50 },
  { label: "100-300 patients", value: "100-300", midpoint: 200 },
  { label: "300-500 patients", value: "300-500", midpoint: 400 },
  { label: "500-1,000 patients", value: "500-1000", midpoint: 750 },
  { label: "1,000-2,000 patients", value: "1000-2000", midpoint: 1500 },
  { label: "2,000+ patients", value: "2000-plus", midpoint: 2500 },
] as const

type PatientVolumeValue = (typeof PATIENT_VOLUME_OPTIONS)[number]["value"]

interface CalculatorInputs {
  documentationHours: number
  patientVolume: PatientVolumeValue
  providerCount: number
  hourlyCost: number
}

interface CalculationResults {
  hoursSavedPerProvider: number
  monthlyTimeSavings: number
  additionalVisitsPossible: number
  monthlyCostSavings: number
  annualCostSavings: number
  lyfeAIMonthlyCost: number
  netMonthlySavings: number
  roiPercentage: number
  paybackDays: number
}

function calculateROI(inputs: CalculatorInputs): CalculationResults {
  // Time savings calculations
  const dailyTimeSavedPerProvider =
    inputs.documentationHours * TIME_SAVINGS_PERCENTAGE
  const monthlyTimeSavedPerProvider =
    dailyTimeSavedPerProvider * WORKING_DAYS_PER_MONTH
  const totalMonthlyTimeSavings =
    monthlyTimeSavedPerProvider * inputs.providerCount

  // Additional visits possible (based on time saved)
  const additionalVisitsPerProvider = Math.floor(
    (monthlyTimeSavedPerProvider * 60) / AVERAGE_VISIT_DURATION_MINUTES
  )

  // Cost calculations
  const monthlySavingsFromTime =
    totalMonthlyTimeSavings * inputs.hourlyCost

  // LyfeAI cost (scaled based on provider count)
  const lyfeAIMonthlyCost =
    inputs.providerCount <= 10
      ? LYFE_AI_MONTHLY_COST
      : LYFE_AI_MONTHLY_COST +
        (inputs.providerCount - 10) * LYFE_AI_COST_PER_PROVIDER

  // Net savings
  const netMonthlySavings = monthlySavingsFromTime - lyfeAIMonthlyCost

  // ROI calculation (first year)
  const firstYearCost = lyfeAIMonthlyCost * 12
  const firstYearSavings = monthlySavingsFromTime * 12
  const roiPercentage =
    firstYearCost > 0
      ? ((firstYearSavings - firstYearCost) / firstYearCost) * 100
      : 0

  // Payback period in days
  const dailySavings = monthlySavingsFromTime / WORKING_DAYS_PER_MONTH
  const paybackDays =
    dailySavings > 0 ? Math.ceil(lyfeAIMonthlyCost / dailySavings) : 999

  return {
    hoursSavedPerProvider: monthlyTimeSavedPerProvider,
    monthlyTimeSavings: totalMonthlyTimeSavings,
    additionalVisitsPossible: additionalVisitsPerProvider,
    monthlyCostSavings: monthlySavingsFromTime,
    annualCostSavings: monthlySavingsFromTime * 12,
    lyfeAIMonthlyCost,
    netMonthlySavings,
    roiPercentage,
    paybackDays,
  }
}

function getROIMessage(roiPercentage: number): {
  message: string
  variant: "excellent" | "strong" | "solid" | "modest"
} {
  if (roiPercentage > 300) {
    return {
      message:
        "Outstanding ROI potential. Practices like yours typically see payback within the first 30 days. Your documentation burden is significantly impacting productivity - LyfeAI can transform your operations.",
      variant: "excellent",
    }
  }
  if (roiPercentage > 200) {
    return {
      message:
        "Strong ROI outlook. Your practice is well-positioned to benefit from AI-powered documentation. Most similar practices report measurable improvements within the first week.",
      variant: "strong",
    }
  }
  if (roiPercentage > 100) {
    return {
      message:
        "Solid investment opportunity. Beyond the direct cost savings, you'll gain improved provider satisfaction and more meaningful patient interactions.",
      variant: "solid",
    }
  }
  return {
    message:
      "While direct cost savings may be modest, consider the value of reduced burnout, improved work-life balance, and enhanced patient relationships that LyfeAI delivers.",
    variant: "modest",
  }
}

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  }).format(value)
}

// Animated number component for smooth transitions
function AnimatedNumber({
  value,
  formatter = formatNumber,
}: {
  value: number
  formatter?: (val: number) => string
}) {
  return (
    <motion.span
      key={value}
      initial={{ opacity: 0.5, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      {formatter(value)}
    </motion.span>
  )
}

// Result card component
function ResultCard({
  title,
  value,
  subtitle,
  icon: Icon,
  delay = 0,
  isInView,
  variant = "default",
}: {
  title: string
  value: React.ReactNode
  subtitle: string
  icon: React.ElementType
  delay?: number
  isInView: boolean
  variant?: "default" | "highlight"
}) {
  return (
    <motion.div
      className={cn(
        "relative bg-card border border-border/50 p-6 overflow-hidden",
        variant === "highlight" &&
          "border-blue-500/30 bg-gradient-to-br from-blue-500/5 to-transparent"
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay }}
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          {title}
        </span>
        <Icon
          className={cn(
            "size-5",
            variant === "highlight"
              ? "text-blue-600 dark:text-blue-500"
              : "text-muted-foreground/50"
          )}
        />
      </div>
      <div
        className={cn(
          "text-3xl md:text-4xl font-bold mb-2",
          variant === "highlight"
            ? "text-blue-600 dark:text-blue-500"
            : "text-foreground"
        )}
      >
        {value}
      </div>
      <p className="text-sm text-muted-foreground">{subtitle}</p>
      {variant === "highlight" && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600" />
      )}
    </motion.div>
  )
}

export function ROICalculator() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })
  const { openModal } = useRequestAccessModal()

  // Calculator state
  const [inputs, setInputs] = useState<CalculatorInputs>({
    documentationHours: 2.5,
    patientVolume: "300-500",
    providerCount: 3,
    hourlyCost: 200,
  })

  // Memoized calculations
  const results = useMemo(() => calculateROI(inputs), [inputs])
  const roiMessage = useMemo(
    () => getROIMessage(results.roiPercentage),
    [results.roiPercentage]
  )

  // Input handlers
  const handleDocumentationHoursChange = useCallback((value: number[]) => {
    setInputs((prev) => ({ ...prev, documentationHours: value[0] }))
  }, [])

  const handlePatientVolumeChange = useCallback((value: PatientVolumeValue) => {
    setInputs((prev) => ({ ...prev, patientVolume: value }))
  }, [])

  const handleProviderCountChange = useCallback((value: number[]) => {
    setInputs((prev) => ({ ...prev, providerCount: value[0] }))
  }, [])

  const handleHourlyCostChange = useCallback((value: number[]) => {
    setInputs((prev) => ({ ...prev, hourlyCost: value[0] }))
  }, [])

  return (
    <section
      ref={containerRef}
      id="roi-calculator"
      aria-labelledby="roi-calculator-heading"
      itemScope
      itemType="https://schema.org/WebApplication"
    >
      <meta itemProp="applicationCategory" content="BusinessApplication" />
      <meta itemProp="name" content="Healthcare ROI Calculator" />

      <SectionCard
        className="md:container mx-auto max-w-7xl"
        innerClassName="py-12 md:py-20"
      >
        <div className="space-y-12">
          {/* Section Header */}
          <motion.div
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-500 text-sm font-medium mb-4">
              <Calculator className="size-4" />
              <span>ROI Calculator</span>
            </div>
            <h2 id="roi-calculator-heading" itemProp="headline">
              <GradientHeading
                asChild
                size="lg"
                weight="bold"
                className="max-w-3xl mx-auto"
              >
                <span>Calculate Your Practice&apos;s AI Savings</span>
              </GradientHeading>
            </h2>
            <p
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
              itemProp="description"
            >
              Enter your practice details below and discover how LyfeAI can
              reduce documentation time by 70%, giving you 2+ hours back with
              patients every day.
            </p>
          </motion.div>

          {/* Calculator Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Input Section */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-card border border-border/50 p-6 md:p-8 space-y-8">
                {/* Documentation Hours */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label
                      htmlFor="documentation-hours"
                      className="flex items-center gap-2 text-base font-medium"
                    >
                      <Clock className="size-4 text-blue-600 dark:text-blue-500" />
                      Daily Documentation Hours Per Provider
                    </Label>
                    <span className="text-lg font-semibold text-foreground">
                      {inputs.documentationHours}h
                    </span>
                  </div>
                  <Slider
                    id="documentation-hours"
                    min={1}
                    max={6}
                    step={0.5}
                    value={[inputs.documentationHours]}
                    onValueChange={handleDocumentationHoursChange}
                    className="py-2"
                    aria-label="Daily documentation hours per provider"
                  />
                  <p className="text-sm text-muted-foreground">
                    Average time spent on clinical notes, SOAP documentation,
                    and paperwork
                  </p>
                </div>

                {/* Patient Volume */}
                <div className="space-y-4">
                  <Label
                    htmlFor="patient-volume"
                    className="flex items-center gap-2 text-base font-medium"
                  >
                    <TrendingUp className="size-4 text-blue-600 dark:text-blue-500" />
                    Monthly Patient Volume
                  </Label>
                  <Select
                    value={inputs.patientVolume}
                    onValueChange={handlePatientVolumeChange}
                  >
                    <SelectTrigger
                      id="patient-volume"
                      className="w-full"
                      aria-label="Monthly patient volume"
                    >
                      <SelectValue placeholder="Select patient volume" />
                    </SelectTrigger>
                    <SelectContent>
                      {PATIENT_VOLUME_OPTIONS.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-muted-foreground">
                    Total patient encounters across your practice
                  </p>
                </div>

                {/* Provider Count */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label
                      htmlFor="provider-count"
                      className="flex items-center gap-2 text-base font-medium"
                    >
                      <Users className="size-4 text-blue-600 dark:text-blue-500" />
                      Number of Providers
                    </Label>
                    <span className="text-lg font-semibold text-foreground">
                      {inputs.providerCount}
                    </span>
                  </div>
                  <Slider
                    id="provider-count"
                    min={1}
                    max={50}
                    step={1}
                    value={[inputs.providerCount]}
                    onValueChange={handleProviderCountChange}
                    className="py-2"
                    aria-label="Number of providers"
                  />
                  <p className="text-sm text-muted-foreground">
                    Physicians, NPs, and PAs who document patient encounters
                  </p>
                </div>

                {/* Hourly Cost */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label
                      htmlFor="hourly-cost"
                      className="flex items-center gap-2 text-base font-medium"
                    >
                      <DollarSign className="size-4 text-blue-600 dark:text-blue-500" />
                      Average Provider Hourly Cost
                    </Label>
                    <span className="text-lg font-semibold text-foreground">
                      {formatCurrency(inputs.hourlyCost)}
                    </span>
                  </div>
                  <Slider
                    id="hourly-cost"
                    min={100}
                    max={500}
                    step={25}
                    value={[inputs.hourlyCost]}
                    onValueChange={handleHourlyCostChange}
                    className="py-2"
                    aria-label="Average provider hourly cost"
                  />
                  <p className="text-sm text-muted-foreground">
                    Include salary, benefits, and overhead (typically
                    $150-300/hour)
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Results Section */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {/* Result Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                <ResultCard
                  title="Hours Reclaimed"
                  value={
                    <>
                      <AnimatedNumber
                        value={results.hoursSavedPerProvider}
                        formatter={formatNumber}
                      />
                      <span className="text-lg font-normal text-muted-foreground ml-1">
                        hours/month
                      </span>
                    </>
                  }
                  subtitle={`That's ${results.additionalVisitsPossible} more patient visits possible each month`}
                  icon={Clock}
                  delay={0.4}
                  isInView={isInView}
                />

                <ResultCard
                  title="Monthly Savings"
                  value={
                    <AnimatedNumber
                      value={results.monthlyCostSavings}
                      formatter={formatCurrency}
                    />
                  }
                  subtitle={`Annual projection: ${formatCurrency(results.annualCostSavings)}`}
                  icon={DollarSign}
                  delay={0.5}
                  isInView={isInView}
                />

                <ResultCard
                  title="First-Year ROI"
                  value={
                    <>
                      <AnimatedNumber
                        value={Math.round(results.roiPercentage)}
                        formatter={(v) => `${v}%`}
                      />
                    </>
                  }
                  subtitle={`Payback period: ${results.paybackDays} days`}
                  icon={TrendingUp}
                  delay={0.6}
                  isInView={isInView}
                  variant="highlight"
                />
              </div>

              {/* ROI Message */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={roiMessage.variant}
                  className={cn(
                    "p-6 border",
                    roiMessage.variant === "excellent" &&
                      "bg-green-500/5 border-green-500/30 text-green-700 dark:text-green-400",
                    roiMessage.variant === "strong" &&
                      "bg-blue-500/5 border-blue-500/30 text-blue-700 dark:text-blue-400",
                    roiMessage.variant === "solid" &&
                      "bg-amber-500/5 border-amber-500/30 text-amber-700 dark:text-amber-400",
                    roiMessage.variant === "modest" &&
                      "bg-muted/50 border-border text-muted-foreground"
                  )}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-sm leading-relaxed">{roiMessage.message}</p>
                </motion.div>
              </AnimatePresence>

              {/* CTA Section */}
              <motion.div
                className="space-y-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Button
                  size="lg"
                  onClick={() => openModal("provider")}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium"
                >
                  Get Your Detailed ROI Report
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Want a comprehensive analysis? Our healthcare technology
                  specialists can provide a customized ROI assessment including
                  workflow optimization recommendations, implementation
                  timeline, and integration roadmap.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </SectionCard>
    </section>
  )
}
