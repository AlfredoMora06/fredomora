import { projectInfo } from '@/utils/ProjectsInfo'

import { redirect } from 'next/navigation'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return projectInfo().map((p) => ({ slug: p.params }))
}

export function generateMetadata({ params }: { params?: { slug?: string } } = {}) {
  if (!params?.slug) return {}
  const project = projectInfo().find((p) => p.params === params.slug)
  if (!project) return {}
  return { title: project.title, description: project.description }
}

export default async function ProjectPage({ params }: Props) {
  // `params` may be a Promise (server streaming), so await it
  const { slug } = await params

  // Redirect to index when slug is missing
  if (!slug) return redirect('/projects')

  const project = projectInfo().find((p) => p.params === slug)
  if (!project) {
    const available = projectInfo().map((p) => p.params).join(', ')
    return (
      <main className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-lightGray">Project not found</h2>
        <p className="mt-2 text-sm text-lightGray">Requested slug: <strong>{slug}</strong></p>
        <p className="mt-2 text-sm text-lightGray">Available slugs: {available}</p>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">

      <h1 className="text-4xl font-bold text-lightGray">{project.title}</h1>
    </main>
  )
}

