import Link from "next/link";
import { siteContact, siteMeta } from "@/config/site";

export default function Footer() {
  const year = new Date().getFullYear();

  const linkClass =
    "text-sm font-medium text-neutral-600 transition hover:text-indigo-600 dark:text-neutral-400 dark:hover:text-indigo-400";

  return (
    <footer className="mt-auto border-t border-neutral-200 bg-neutral-50/90 dark:border-neutral-800 dark:bg-neutral-950/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6 lg:px-10 xl:px-14">
        <p className="text-center text-sm text-neutral-500 dark:text-neutral-400 sm:text-left">
          © {year} {siteMeta.author}. All rights reserved.
        </p>
        <nav
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
          aria-label="Footer"
        >
          <Link href="/#contact" className={linkClass}>
            Contact
          </Link>
          <Link href="/#projects" className={linkClass}>
            Projects
          </Link>
          <a
            href={siteContact.github}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            GitHub
          </a>
          <a
            href={siteContact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            LinkedIn
          </a>
          <a href={`mailto:${siteContact.email}`} className={linkClass}>
            Email
          </a>
        </nav>
      </div>
    </footer>
  );
}
