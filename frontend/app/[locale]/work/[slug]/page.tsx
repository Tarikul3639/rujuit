import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { ProjectDetail } from "@/features/work/components/project-detail"
import { projects, getProject } from "@/features/work/data/projects"
import { getWorkCopy } from "@/features/work/data/copy"
import { getDictionary, isLocale, type Locale } from "@/lib/i18n"

type PageProps = { params: Promise<{ locale: string; slug: string }> }

export function generateStaticParams() {
  return projects.flatMap((project) => [
    { locale: "en", slug: project.slug },
    { locale: "bn", slug: project.slug },
  ])
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale: value, slug } = await params
  if (!isLocale(value)) return {}
  const project = getProject(slug)
  if (!project) return {}
  const localized =
    getWorkCopy(value).projects[
      slug as keyof ReturnType<typeof getWorkCopy>["projects"]
    ]
  const title = project.title
  const description = localized?.summary ?? project.summary
  return {
    title,
    description,
    alternates: {
      canonical: `/${value}/work/${slug}`,
      languages: { en: `/en/work/${slug}`, bn: `/bn/work/${slug}` },
    },
    openGraph: {
      title,
      description,
      type: "article",
      images: project.image ? [project.image] : undefined,
    },
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { locale: value, slug } = await params
  if (!isLocale(value)) notFound()
  const project = getProject(slug)
  if (!project) notFound()
  const locale: Locale = value
  return (
    <ProjectDetail
      project={project}
      locale={locale}
      dictionary={getDictionary(locale)}
    />
  )
}
