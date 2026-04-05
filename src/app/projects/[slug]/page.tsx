import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { Project } from "@/content/projects";
import { getProjectBySlug, projects } from "@/content/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project" };
  const description = project.detail?.oneLine ?? project.description;
  return {
    title: `${project.title} | Gyubeen's Portfolio`,
    description,
  };
}

function ProjectMeta({
  category,
  period,
}: {
  category: string;
  period?: string;
}) {
  return (
    <div className="space-y-0.5 text-sm text-neutral-500 dark:text-neutral-400">
      <p className="leading-snug">{category}</p>
      {period ? (
        <p className="tabular-nums text-xs text-neutral-400 dark:text-neutral-500">
          {period}
        </p>
      ) : null}
    </div>
  );
}

function ProjectHero({ project }: { project: Project }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900">
      {project.coverImage ? (
        <Image
          src={project.coverImage}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1152px"
        />
      ) : (
        <div
          className="absolute inset-0 bg-gradient-to-br from-indigo-200 via-violet-200 to-fuchsia-200 dark:from-indigo-900/40 dark:via-violet-900/40 dark:to-fuchsia-900/40"
          aria-hidden
        />
      )}
    </div>
  );
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const d = project.detail;

  return (
    <main className="flex min-h-screen flex-1 flex-col bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 md:py-16 lg:px-10 xl:px-14">
        <Link
          href="/#projects"
          className="text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
        >
          ← Back to projects
        </Link>

        {d ? (
          <div className="mt-8 space-y-10">
            <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-950">
              <ProjectHero project={project} />
              <div className="space-y-6 p-6 md:p-8">
                <ProjectMeta
                  category={project.category}
                  period={project.period}
                />
                <h1 className="text-2xl font-bold leading-tight text-neutral-900 dark:text-neutral-50 md:text-3xl">
                  {d.pageTitle ?? project.title}
                </h1>
                <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
                  {d.oneLine}
                </p>
                {d.links && d.links.length > 0 ? (
                  <ul className="flex flex-wrap gap-3">
                    {d.links.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm font-medium text-indigo-700 transition hover:border-indigo-300 hover:bg-indigo-50 dark:border-neutral-600 dark:bg-neutral-900 dark:text-indigo-400 dark:hover:border-indigo-500 dark:hover:bg-neutral-800"
                        >
                          {item.label}
                          <span className="sr-only"> (opens in new tab)</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {d.role ? (
                  <p className="border-l-4 border-indigo-500 pl-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {d.role}
                  </p>
                ) : null}
              </div>
            </div>

            {d.demoVideo ? (
              <section
                className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-950 shadow-sm dark:border-neutral-700"
                aria-labelledby="project-demo-heading"
              >
                <div className="border-b border-neutral-200 bg-white px-6 py-4 dark:border-neutral-700 dark:bg-neutral-950">
                  <h2
                    id="project-demo-heading"
                    className="text-lg font-semibold text-neutral-900 dark:text-neutral-50"
                  >
                    Demo
                  </h2>
                  {d.demoVideo.caption ? (
                    <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                      {d.demoVideo.caption}
                    </p>
                  ) : null}
                </div>
                <div className="bg-black">
                  <video
                    className="aspect-video w-full max-h-[min(70vh,720px)] object-contain"
                    controls
                    playsInline
                    preload="metadata"
                    poster={d.demoVideo.poster}
                  >
                    <source src={d.demoVideo.src} type="video/mp4" />
                    Your browser does not support embedded video.
                  </video>
                </div>
              </section>
            ) : null}

            <div className="space-y-10 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-700 dark:bg-neutral-950 md:p-8">
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                What I built
              </h2>
              <div className="space-y-8">
                {d.sections.map((section) => (
                  <section key={section.title}>
                    <h3 className="text-base font-semibold text-indigo-700 dark:text-indigo-400">
                      {section.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 md:text-base">
                      {section.body}
                    </p>
                  </section>
                ))}
              </div>

              <div>
                <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                  Tech stack
                </h2>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {d.techStack.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                  Impact
                </h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 md:text-base">
                  {d.outcomes.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>

              {d.resumeLine ? (
                <blockquote className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-sm italic leading-relaxed text-neutral-600 dark:border-neutral-700 dark:bg-neutral-900/50 dark:text-neutral-400">
                  {d.resumeLine}
                </blockquote>
              ) : null}
            </div>

            {d.gallery && d.gallery.length > 0 ? (
              <div>
                <h2 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                  Gallery
                </h2>
                <ul className="grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
                  {d.gallery.map((img) => (
                    <li
                      key={img.src}
                      className="relative aspect-[4/3] overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-700"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        ) : (
          <div className="mt-8 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-950">
            <ProjectHero project={project} />
            <div className="p-6 md:p-8">
              <ProjectMeta
                category={project.category}
                period={project.period}
              />
              <h1 className="mt-2 text-3xl font-bold text-neutral-900 dark:text-neutral-50">
                {project.title}
              </h1>
              <p className="mt-4 leading-relaxed text-neutral-700 dark:text-neutral-300">
                {project.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
