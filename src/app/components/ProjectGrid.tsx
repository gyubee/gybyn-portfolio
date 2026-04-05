import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/config/paths";
import { projectGroups } from "@/content/projects";

const gradients = [
  "from-indigo-200 via-violet-200 to-fuchsia-200",
  "from-sky-200 via-cyan-200 to-emerald-200",
  "from-amber-200 via-orange-200 to-rose-200",
];

export default function ProjectGrid() {
  let globalIndex = 0;

  return (
    <div className="flex flex-col gap-14">
      {projectGroups.map((group) => (
        <section key={group.id} aria-labelledby={`projects-${group.id}-heading`}>
          <h4
            id={`projects-${group.id}-heading`}
            className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400"
          >
            {group.label}
          </h4>
          <ul className="m-0 grid list-none grid-cols-1 gap-6 p-0 md:grid-cols-2 lg:grid-cols-3">
            {group.projects.map((project) => {
              const i = globalIndex++;
              return (
                <li key={project.slug}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group block outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] rounded-2xl"
                  >
                    <article className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition duration-200 group-hover:-translate-y-0.5 group-hover:shadow-md dark:border-neutral-700 dark:bg-neutral-950">
                      <div className="relative aspect-[4/3] w-full bg-neutral-100 dark:bg-neutral-900">
                        {project.coverImage ? (
                          <Image
                            src={withBasePath(project.coverImage)}
                            alt=""
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        ) : (
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${gradients[i % gradients.length]}`}
                            aria-hidden
                          />
                        )}
                      </div>
                      <div className="p-5">
                        <h5 className="text-lg font-bold text-neutral-900 dark:text-neutral-50">
                          {project.title}
                        </h5>
                        <div className="mt-1 space-y-0.5 text-sm text-neutral-500 dark:text-neutral-400">
                          <p className="leading-snug">{project.category}</p>
                          {project.period ? (
                            <p className="tabular-nums text-xs text-neutral-400 dark:text-neutral-500">
                              {project.period}
                            </p>
                          ) : null}
                        </div>
                      </div>
                    </article>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}
