import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="h-full flex flex-row items-center justify-center space-x-6 py-8 text-slate-800 dark:text-slate-200">
      <Link href="https://www.github.com/kfirfitousi">
        <Github
          className="hover:text-rose-600 dark:hover:text-rose-400"
          aria-label="My GitHub profile"
        />
      </Link>
      <Link href="https://www.linkedin.com/in/kfirp">
        <Linkedin
          className="hover:text-rose-600 dark:hover:text-rose-400"
          aria-label="My LinkedIn profile"
        />
      </Link>
    </footer>
  );
}
