import { notFound } from 'next/navigation';
import { getProjectBySlug, getAllProjectSlugs } from '@/data/projects';
import ProjectStory from '@/components/ProjectStory';

export async function generateStaticParams() {
  return getAllProjectSlugs();
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectStory project={project} />;
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - Ziad Teama`,
    description: project.shortDescription,
  };
}
