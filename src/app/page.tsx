"use client";

import Aurora from "@/components/ui/aurora";
import ProfileCard from "@/components/ui/profile-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn, resolveTailwindColor } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";


const gradientColors = [
resolveTailwindColor('--azure-500').hex,
resolveTailwindColor('--rose-500').hex,
resolveTailwindColor('--blue-violet-500').hex,
resolveTailwindColor('--amber-500').hex,
]


export default function Home() {

  return (
    <>
      <div className=" absolute top-0 left-0 w-full z-[-1] overflow-hidden">
        <div className="w-[1400px] h-[600px] md:w-full">
          <Aurora
            colorStops={gradientColors}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />
        </div>
      </div>
      <div className=" absolute bottom-[-50px] w-full left-0 z-[-1] rotate-180 overflow-hidden">
        <div className="w-[1400px] h-[100vh] md:w-full">
          <Aurora
          colorStops={gradientColors}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
        </div>
      </div>
      <div className="text-[var(--white)] mt-0 md:mt-0" id="home">
        <div className="max-w-5xl mx-auto space-y-8 px-4 sm:px-0">
          <div className="text-left space-y-4">
            <div className="flex flex-col-reverse lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-8 gap-8 md:gap-18">
              <div className={"lg:w-1/3 mx-auto lg:mx-0"}>
                <ProfileCard
                  name=""
                  title=""
                  handle="caomicc"
                  status="Online"
                  contactText="Contact Me"
                  avatarUrl="https://avatars.githubusercontent.com/u/6108512?v=4"
                  backgroundPortraitUrl="/cammy.webp"
                  showUserInfo={true}
                  enableTilt={false}
                  onContactClick={() => console.log("Contact clicked")}
                />
              </div>
              <div className="lg:w-2/3 w-full flex flex-col justify-center space-y-4">
                <h1 className="text-[var(--white)] text-5xl md:text-6xl font-medium text-pretty leading-none">
                  Senior Web Developer
                </h1>
                <p className="text-md md:text-2xl text-[var(--white-icon)]">
                  Hi! I'm Cammy.
                </p>
                <p className="text-md md:text-xl text-[var(--white-icon)]">
                  I have been described as a determined, adept, and "pixel-perfect".
                  I strive to make the integration between UI/UX and code seamless
                  while keeping all audiences in mind.
                </p>
                <div className="flex justify-start gap-2 pt-3 md:pt-4">
                  {[
                    {
                      href: "https://github.com/caomicc",
                      ariaLabel: "GitHub",
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-6"
                        >
                          <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
                        </svg>
                      ),
                    },
                    {
                      href: "https://linkedin.com/in/caomicc",
                      ariaLabel: "LinkedIn",
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-6"
                        >
                          <path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path>
                        </svg>
                      ),
                    },
                    {
                      href: "https://mail.google.com/mail/?view=cm&fs=1&to=caomicc@gmail.com&su=Hey%20Cam!",
                      ariaLabel: "Email",
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-6"

                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m18.73 5.41l-1.28 1L12 10.46L6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64"
                          ></path>
                        </svg>
                      ),
                    },
                    {
                      href: "https://wakatime.com/@caomicc",
                      ariaLabel: "Wakatime",
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 340 340"
                          fill="currentColor"
                          className="size-6"
                        >
                          <path fillRule="evenodd" clipRule="evenodd" d="M170 20C87.156 20 20 87.156 20 170C20 252.844 87.156 320 170 320C252.844 320 320 252.844 320 170C320 87.156 252.844 20 170 20V20V20Z" stroke="transparent" strokeWidth="40"/>
                          <path d="M190.183 213.541C188.74 215.443 186.576 216.667 184.151 216.667C183.913 216.667 183.677 216.651 183.443 216.627C183.042 216.579 182.823 216.545 182.606 216.497C182.337 216.434 182.137 216.375 181.94 216.308C181.561 216.176 181.392 216.109 181.228 216.035C180.843 215.849 180.707 215.778 180.572 215.701C180.205 215.478 180.109 215.412 180.014 215.345C179.856 215.233 179.698 215.117 179.547 214.992C179.251 214.746 179.147 214.65 179.044 214.552C178.731 214.241 178.531 214.018 178.341 213.785C177.982 213.331 177.69 212.888 177.438 212.415L168.6 198.214L159.766 212.415C158.38 214.939 155.874 216.667 152.995 216.667C150.106 216.667 147.588 214.926 146.243 212.346L107.607 156.061C106.337 154.529 105.556 152.499 105.556 150.258C105.556 145.514 109.043 141.665 113.344 141.665C116.127 141.665 118.564 143.282 119.942 145.708L152.555 193.9L161.735 178.952C163.058 176.288 165.626 174.478 168.575 174.478C171.273 174.478 173.652 175.996 175.049 178.298L184.517 193.839L235.684 120.583C237.075 118.226 239.475 116.667 242.213 116.667C246.514 116.667 250 120.514 250 125.258C250 127.332 249.337 129.232 248.23 130.715L190.183 213.541Z"
                           fill="black" stroke="black" strokeWidth="10"/>
                        </svg>
                      ),
                    },
                  ].map(({ href, ariaLabel, icon }) => (
                    <a
                      key={ariaLabel}
                      target="_blank"
                      href={href}
                      aria-label={ariaLabel}
                      className="text-[var(--white-icon)] hover:text-white transition duration-300 ease-in-out p-2 hover:bg-[var(--white-icon-tr)] border-white/30 border border-1 backdrop-blur-xl rounded-lg shadow-sm backdrop-blur-xl bg-white/10"
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="relative overflow-x-hidden py-8 marquee-container">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-20"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-20"></div>
            <div className="flex gap-12 md:gap-20 w-max marquee-content">
              {/* Skill icons start */}
              {[
                { src: "/svg/react.svg", alt: "react", label: "React" },
                { src: "/svg/next.svg", alt: "next", label: "Next" },
                { src: "/svg/typeScript.svg", alt: "typeScript", label: "TypeScript" },
                { src: "/svg/contentful_logo.svg", alt: "contentful", label: "Contentful" },
                { src: "/svg/tailwindcss.svg", alt: "tailwindcss", label: "Tailwindcss" },
                { src: "/svg/vercel.svg", alt: "vercel", label: "Vercel" },
                { src: "/svg/nodejs.svg", alt: "nodejs", label: "Nodejs" },
                { src: "/svg/shadcn-ui.svg", alt: "shadcn ui", label: "Shadcn UI" },
                { src: "/svg/storybook.svg", alt: "storybook", label: "Storybook" },
                { src: "/svg/radix-ui_light.svg", alt: "shadcn ui", label: "Radix UI" },
                { src: "/svg/chakra-ui.svg", alt: "chakra ui", label: "Chakra UI" },
                { src: "/svg/HTML5.svg", alt: "HTML5", label: "HTML5" },
                { src: "/svg/CSS3.svg", alt: "CSS3", label: "CSS3" },
                { src: "/svg/javaScript.svg", alt: "javaScript", label: "JavaScript" },
                { src: "/svg/git.svg", alt: "git", label: "Git" },
                { src: "/svg/bash.svg", alt: "bash", label: "Bash" },
                { src: "/svg/vscode.svg", alt: "vscode", label: "Vscode" },
                { src: "/svg/figma.svg", alt: "figma", label: "Figma" },
                { src: "/svg/sass.svg", alt: "sass", label: "Sass" },
                { src: "/svg/wordpress.svg", alt: "wordpress", label: "WordPress" },
                { src: "/svg/illustrator.svg", alt: "illustrator", label: "Illustrator" },
                { src: "/svg/react.svg", alt: "react", label: "React" },
                { src: "/svg/next.svg", alt: "next", label: "Next" },
                { src: "/svg/typeScript.svg", alt: "typeScript", label: "TypeScript" },
                { src: "/svg/contentful_logo.svg", alt: "contentful", label: "Contentful" },
                { src: "/svg/tailwindcss.svg", alt: "tailwindcss", label: "Tailwindcss" },
                { src: "/svg/vercel.svg", alt: "vercel", label: "Vercel" },
                { src: "/svg/nodejs.svg", alt: "nodejs", label: "Nodejs" },
                { src: "/svg/shadcn-ui.svg", alt: "shadcn ui", label: "Shadcn UI" },
                { src: "/svg/storybook.svg", alt: "storybook", label: "Storybook" },
                { src: "/svg/radix-ui_light.svg", alt: "shadcn ui", label: "Radix UI" },
                { src: "/svg/chakra-ui.svg", alt: "chakra ui", label: "Chakra UI" },
                { src: "/svg/HTML5.svg", alt: "HTML5", label: "HTML5" },
                { src: "/svg/CSS3.svg", alt: "CSS3", label: "CSS3" },
                { src: "/svg/javaScript.svg", alt: "javaScript", label: "JavaScript" },
                { src: "/svg/git.svg", alt: "git", label: "Git" },
                { src: "/svg/bash.svg", alt: "bash", label: "Bash" },
                { src: "/svg/vscode.svg", alt: "vscode", label: "Vscode" },
                { src: "/svg/figma.svg", alt: "figma", label: "Figma" },
                { src: "/svg/sass.svg", alt: "sass", label: "Sass" },
                { src: "/svg/wordpress.svg", alt: "wordpress", label: "WordPress" },
                { src: "/svg/illustrator.svg", alt: "illustrator", label: "Illustrator" },
                { src: "/svg/react.svg", alt: "react", label: "React" },
                { src: "/svg/next.svg", alt: "next", label: "Next" },
                { src: "/svg/typeScript.svg", alt: "typeScript", label: "TypeScript" },
                { src: "/svg/contentful_logo.svg", alt: "contentful", label: "Contentful" },
                { src: "/svg/tailwindcss.svg", alt: "tailwindcss", label: "Tailwindcss" },
                { src: "/svg/vercel.svg", alt: "vercel", label: "Vercel" },
                { src: "/svg/nodejs.svg", alt: "nodejs", label: "Nodejs" },
                { src: "/svg/shadcn-ui.svg", alt: "shadcn ui", label: "Shadcn UI" },
                { src: "/svg/storybook.svg", alt: "storybook", label: "Storybook" },
                { src: "/svg/radix-ui_light.svg", alt: "shadcn ui", label: "Radix UI" },
                { src: "/svg/chakra-ui.svg", alt: "chakra ui", label: "Chakra UI" },
                { src: "/svg/HTML5.svg", alt: "HTML5", label: "HTML5" },
                { src: "/svg/CSS3.svg", alt: "CSS3", label: "CSS3" },
                { src: "/svg/javaScript.svg", alt: "javaScript", label: "JavaScript" },
                { src: "/svg/git.svg", alt: "git", label: "Git" },
                { src: "/svg/bash.svg", alt: "bash", label: "Bash" },
                { src: "/svg/vscode.svg", alt: "vscode", label: "Vscode" },
                { src: "/svg/figma.svg", alt: "figma", label: "Figma" },
                { src: "/svg/sass.svg", alt: "sass", label: "Sass" },
                { src: "/svg/wordpress.svg", alt: "wordpress", label: "WordPress" },
                { src: "/svg/illustrator.svg", alt: "illustrator", label: "Illustrator" },

              ].map(({ src, alt, label }, i) => (
                <div
                  key={src + i}
                  className="flex items-center gap-2 group transition-all duration-300"
                >
                  <img
                    src={src}
                    alt={alt}
                    className="h-7 w-auto object-contain transition-transform group-hover:scale-110 opacity-100"
                    width={30}
                    height={30}
                    loading="lazy"
                  />
                  <span className="text-lg font-medium text-[var(--white-icon)]">
                    {label}
                  </span>
                </div>
              ))}
              {/* Skill icons end */}
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 md:gap-18 items-center">
            {/* Accordion Content */}
            <div className="w-full lg:w-3/5">
              <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-[var(--white)]">
                So, what's my story?
              </h2>
              <p className="text-md md:text-xl text-[var(--white-icon)] mb-6">
                I craft accessible, pixel-perfect web experiences with a focus on seamless UI/UX integration.
              </p>
              <p className="text-md md:text-xl text-[var(--white-icon)] mb-6">
                My love for the web started back in 2007 with custom Neopets pages and Myspace layouts — and it’s been full-speed coding ever since.
              </p>
              <p className="text-md md:text-xl text-[var(--white-icon)] mb-6">
                Recently, I've been diving into the world of prompt engineering—experimenting with ways to make AI interactions more intuitive, creative, and impactful.
              </p>
              <p className="text-md md:text-xl text-[var(--white-icon)] mb-6">
                Curious about the professional milestones?
              </p>
            </div>

            {/* Image on the right */}
            <div className="w-full lg:w-2/5 mt-8 lg:mt-0 flex justify-center lg:justify-end">
              <div className="w-full p-6 border-white/30 border border-1 backdrop-blur-xl rounded-2xl shadow-sm backdrop-blur-xl bg-white/10">
              <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6 flex-none">
                <path d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z" className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"></path>
                <path d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5" className="stroke-zinc-400 dark:stroke-zinc-500"></path>
                </svg>
                <span className="ml-3">Work</span>
              </h2>
              <ol className="mt-6 space-y-4">
                {[
                {
                  company: "Workhuman",
                  logo: "/svg/wh_logo.svg",
                  role: "Senior Web Developer",
                  dateFrom: "2020",
                  dateTo: "Present",
                  imageClasses: "p-[2px] mr-[-1px]",
                },
                {
                  company: "Membersfirst",
                  logo: "/svg/mf_logo.svg",
                  role: "Front-End Web Developer",
                  dateFrom: "2015",
                  dateTo: "2020",
                  imageClasses: "px-[2px] pb-[2px]",
                },
                {
                  company: "MWRTA",
                  logo: "/svg/MWRTA_logo.svg",
                  role: "Web & Administrative Assistant",
                  dateFrom: "2013",
                  dateTo: "2015",
                  imageClasses: "",
                },
                {
                  company: "Wellesley College",
                  logo: "/svg/wellesleycollegelogo.svg",
                  role: "Web Assistant",
                  dateFrom: "2011",
                  dateTo: "2012",
                  imageClasses: "bg-[#0142a4] px-1 pt-[1px] rounded-full",
                },
                ].map((job, idx) => (
                <li className="flex gap-4" key={job.company + idx}>
                  <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-white/10 dark:bg-white/10 dark:ring-0">
                  <img
                    alt=""
                    loading="lazy"
                    decoding="async"
                    data-nimg="1"
                    className={cn('h-7 w-7', job.imageClasses)}
                    src={job.logo}
                    style={{ color: "transparent" }}
                  />
                  </div>
                  <dl className="flex flex-auto flex-wrap gap-x-2">
                  <dt className="sr-only">Company</dt>
                  <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">{job.company}</dd>
                  <dt className="sr-only">Role</dt>
                  <dd className="text-xs text-zinc-500 dark:text-zinc-400">{job.role}</dd>
                  <dt className="sr-only">Date</dt>
                  <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label={`${job.dateFrom} until ${job.dateTo}`}>
                    <time dateTime={job.dateFrom}>{job.dateFrom}</time> <span aria-hidden="true">—</span> <time dateTime={job.dateTo}>{job.dateTo}</time>
                  </dd>
                  </dl>
                </li>
                ))}
              </ol>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        className="mt-6 w-full"
                        variant="outline"
                        size="lg"
                      >
                        <span className="flex items-center gap-2">
                          Download CV
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      Coming soon
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
