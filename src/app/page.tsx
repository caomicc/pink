import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <>
    <div>
      <div className={cn("@container",
        "min-h-screen flex flex-col justify-center items-center text-center max-w-5xl mx-4 mt-4 gap-3 p-3",
        'border-2 border-rose-200 rounded-2xl overflow-hidden bg-gradient-to-b from-rose-100 to-rose-200',
        )}>
        <div className="w-full h-28 bg-white/50 p-4 rounded-t-lg">
          lamlamlam
        </div>
        <div className="flex-1 flex w-full gap-3">
          <div className="w-[25%] flex gap-3 flex-col">
            <div className="bg-white text-left">
              <div className="p-3">
                <ul className="text-slate-700 text-sm leading-6">
                    <li>
                        <a href="#class-reference"
                            className="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">Home
                        </a>
                    </li>
                    <li>
                        <span className="block py-1 font-medium font-medium text-sky-500 dark:text-sky-400">
                          Personal
                        </span>
                    </li>
                    <li className="ml-4">
                        <a href="#adding-an-outer-shadow" className="group flex items-start py-1 text-sky-500 dark:text-sky-400">
                            <svg width="3" height="24" viewBox="0 -9 3 24"
                                className="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                                <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                                </path>
                            </svg>About me
                        </a>
                    </li>
                    <li className="ml-4">
                        <a href="#adding-an-inner-shadow"
                            className="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                            <svg width="3" height="24" viewBox="0 -9 3 24"
                                className="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                                <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                                </path>
                            </svg>Moodboard
                        </a>
                    </li>

                    <li>
                        <span
                            className="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                              My Work
                        </span>
                    </li>
                    <li className="ml-4">
                        <a href="#hover-focus-and-other-states"
                            className="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                            <svg width="3" height="24" viewBox="0 -9 3 24"
                                className="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                                <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                                </path>
                            </svg>PolishedDex
                        </a>
                    </li>
                    <li className="ml-4">
                        <a href="#breakpoints-and-media-queries"
                            className="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                            <svg width="3" height="24" viewBox="0 -9 3 24"
                                className="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                                <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                                </path>
                            </svg>Art
                        </a>
                    </li>
                    <li>
                        <a href="#using-custom-values"
                            className="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">Collections
                        </a>
                    </li>
                    <li className="ml-4">
                        <a href="#customizing-your-theme"
                            className="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                            <svg width="3" height="24" viewBox="0 -9 3 24"
                                className="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                                <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                                </path>
                            </svg>Tamagotchi
                        </a>
                    </li>
                    <li className="ml-4">
                        <a href="#customizing-your-theme"
                            className="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                            <svg width="3" height="24" viewBox="0 -9 3 24"
                                className="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                                <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                                </path>
                            </svg>Mechanical Keyboards
                        </a>
                    </li>
                    <li>
                        <a href="#using-custom-values"
                            className="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">Fun
                        </a>
                    </li>
                    <li className="ml-4">
                        <a href="#customizing-your-theme"
                            className="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                            <svg width="3" height="24" viewBox="0 -9 3 24"
                                className="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                                <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                                </path>
                            </svg>Song of the week
                        </a>
                    </li>
                    <li className="ml-4">
                        <a href="#customizing-your-theme"
                            className="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                            <svg width="3" height="24" viewBox="0 -9 3 24"
                                className="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                                <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                                </path>
                            </svg>Resources
                        </a>
                    </li>
                    <li className="ml-4">
                        <a href="#arbitrary-values"
                            className="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                            <svg width="3" height="24" viewBox="0 -9 3 24"
                                className="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                                <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                                </path>
                            </svg>Guestbook
                        </a>
                    </li>
                </ul>
              </div>
            </div>
            <div className="bg-white">fanlists</div>
          </div>
          <div className="w-[50%] bg-white">welcome</div>
              <div className="w-[25%] flex gap-3 flex-col">

            <div className="bg-white">status</div>

          </div>
        </div>
        <div className="w-full h-18 bg-white/50 p-4 rounded-b-lg">
          footfootfoot
        </div>
      </div>
    </div>
  </>
  );
}
