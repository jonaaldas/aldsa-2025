import { ArrowRight, Github, Mail } from "lucide-react";
import Link from "next/link";
import projects from "./projects";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="max-w-2xl mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <div className="font-mono text-sm">ALDAS</div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/jonaaldas" target="_blank" className="hover:text-[#A7A7FF] transition-colors">
              <Github size={18} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="mailto:j@aldas.dev" target="_blank" className="hover:text-[#A7A7FF] transition-colors">
              <Mail size={18} />
              <span className="sr-only">Email</span>
            </a>
            <a href="https://www.x.com/aldasdev" target="_blank" className="hover:text-[#A7A7FF] transition-colors">
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="1200"
                height="1227"
                fill="none"
                viewBox="0 0 1200 1227">
                <path
                  fill="#fff"
                  d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"
                />
              </svg>
              <span className="sr-only">Email</span>
            </a>
            <a href="https://www.x.com/aldasdev" target="_blank" className="hover:text-[#A7A7FF] transition-colors">
              <svg
                className="size-4"
                stroke="#0A66C2"
                width="256"
                height="256"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
                viewBox="0 0 256 256">
                <path
                  d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
                  fill="#fff"
                />
              </svg>

              <span className="sr-only">Email</span>
            </a>
            {/* <Sheet>
              <SheetTrigger>
                <Menu size={18} />
              </SheetTrigger>
              <SheetContent side="left" className=" bg-[#0f0f3e] text-white font-sans">
                <div className="flex flex-col justify-left gap-2">
                  <Button variant="ghost">Projects</Button>
                  <Button variant="ghost">
                    <Link href="/saas" className="hover:text-[#A7A7FF] transition-colors">
                      SaaS's
                    </Link>
                  </Button>
                  <Button variant="ghost">About</Button>
                </div>
              </SheetContent>
            </Sheet> */}
          </div>
        </nav>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-12">
        <div className="space-y-16">
          <section className="space-y-6">
            <div className="inline-block">
              <span className="font-mono text-sm text-[#A7A7FF]">01 /</span>
              <h2 className="text-lg font-medium">Introduction</h2>
            </div>
            <h1 className="text-4xl font-bold">Building projects, Ai Apps and more...</h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
              I am a full stack software engineer specializing in VUEjs and in Node. I love
              <br />
              <a href="#" className="text-[#A7A7FF] hover:underline">
                Resume
              </a>
            </p>
          </section>

          <section className="space-y-6">
            <div className="inline-block">
              <span className="font-mono text-sm text-[#A7A7FF]">02 /</span>
              <Link href="/projects" className="flex items-center space-x-2">
                <h2 className="text-lg font-medium">Projects</h2>
                <span>
                  <ArrowRight size={18} />
                </span>
              </Link>
            </div>
            <div className="grid gap-4">
              {projects.map((project, index) => {
                return (
                  <Link
                    key={index}
                    href={project.link + index}
                    className="block p-4 border border-gray-700 rounded-lg hover:border-[#A7A7FF] transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">{project.title}</h3>
                        <p className="text-gray-300 mt-1 text-ellipsis">{project.description}</p>
                      </div>
                      <span className="text-sm text-[#A7A7FF]">{project.year}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

          <section className="space-y-6">
            <div className="inline-block">
              <span className="font-mono text-sm text-[#A7A7FF]">03 /</span>
              <h2 className="text-lg font-medium">Get in Touch</h2>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              I&apos;m currently available for freelance work. If you have a project that you want to get started, think you
              need my help with something or just fancy saying hey, then get in touch.
            </p>
            <Link href="mailto:j@aldas.dev" className="inline-block text-[#A7A7FF] hover:underline">
              j@aldas.dev
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
