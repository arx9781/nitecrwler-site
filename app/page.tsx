// app/page.tsx
import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className="relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero Section */}
          <section className="space-y-6">
            <h1 className="text-4xl font-bold">Hi, I&apos;m [YourName] 👋</h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
              I'm a software developer passionate about building things for the
              web. Currently focused on [your current focus].
            </p>

            <div className="flex gap-4">
              <Link
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                <FaGithub className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                <FaTwitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                <FaLinkedin className="h-5 w-5" />
              </Link>
            </div>
          </section>

          {/* Projects Section */}
          <section className="mt-20">
            <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm p-6 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors">
                <h3 className="font-semibold">Project Name</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Brief description of your project goes here.
                </p>
              </div>
              {/* Add more project cards */}
            </div>
          </section>

          {/* About Section */}
          <section className="mt-20">
            <h2 className="text-2xl font-semibold mb-6">About Me</h2>
            <div className="prose dark:prose-invert">
              <p>
                Write a bit more about yourself, your interests, and what you're
                currently working on or learning.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
