import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto p-4 sm:p-8 w-full sm:max-w-5xl flex flex-col items-center gap-8 sm:gap-12">
      <div className="flex flex-col gap-4 w-full">
        <h1 className="text-px-40 font-polished leading-tight">
          Hi! My name is Cammy.
        </h1>
        <h2 className="text-px-20 font-polished leading-tight">I am a front-end dev who dabbles in full-stack.</h2>
      </div>
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 w-full">
        <div className="w-full text-left">
          <div className="rounded-lg overflow-hidden border border-lime-800 w-full sm:max-w-1/3 float-left mb-4 sm:mr-4">
            <div
              className="relative flex-1 w-full bg-white aspect-square max-w-full flex flex-col rendering-pixelated specimen-dots"
            >
              <div
                className="font-polished text-black smooth-never text-px leading-none border-black bg-white border-b p-1 ring-1 ring-white flex justify-between space-x-2 px-2"
              >
                <div className="flex justify-between space-x-3">
                  {/* <span>Pokedex</span> */}
                  {/* <span>PKMN</span> */}
                  {/* <span>Bag</span> */}
                  {/* <span>Options</span> */}
                  {/* <span>Save</span> */}
                </div>
                <div className="flex justify-between space-x-3">
                  {/* <span>11:11:11</span> */}
                  <span>Save</span>

                </div>
              </div>
              <div className="relative flex-1 z-0">
                <div
                  className="absolute text-black smooth-never text-px border-black bg-white border overflow-hidden rounded-sm block ring-1 ring-white font-polished bottom-2 right-2 z-10 aspect-square w-3/5"
                >
                  <div className="handle p-1 border-b border-black relative h-4">
                    <div
                      className="h-2 w-2 rounded-sm border border-black bg-white absolute left-1 top-1"
                    ></div>
                    <div
                      className="h-2 w-2 rounded-sm border border-black bg-white absolute left-4 top-1"
                    ></div>
                    <div
                      className="h-2 w-2 rounded-sm border border-black absolute left-7 top-1"
                    ></div>
                    {/* <div className="absolute left-12 top-0">cammy.gif</div> */}
                  </div>
                  <img
                    alt="pokemon trainer surrounded by their pokemon on top of a hill looking at the forest"
                    loading="lazy"
                    decoding="async"
                    data-nimg="1"
                    className="block relative w-full px-2 pt-2 rendering-pixelated object-contain bg-[#F8F8F8]"
                    src="/images/pikachu.webp"
                    style={{ color: 'transparent' }}
                  />
                </div>
                <div
                  className="absolute text-black smooth-never text-px border-black bg-white border overflow-hidden rounded-sm block ring-1 ring-white font-polished aspect-square w-3/5 top-2 left-2 z-0"
                >
                  <div className="handle  p-1 border-b border-black relative h-4">
                    <div
                      className="h-2 w-2 rounded-sm border border-black bg-white absolute left-1 top-1"
                    ></div>
                    <div
                      className="h-2 w-2 rounded-sm border border-black bg-white absolute left-4 top-1"
                    ></div>
                    <div
                      className="h-2 w-2 rounded-sm border border-black absolute left-7 top-1"
                    ></div>
                    {/* <div className="absolute left-12 top-0">intro.txt</div> */}
                  </div>
                  <div
                    data-hj-allow="true"
                    className="p-1 border-none text-black smooth-never text-px text-left resize-none leading-none w-full h-full bg-white no-scrollbar"
                  >
                    hi!
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm sm:text-md mb-4">
            I have been building websites since Myspace and Neopets were the biggest thing. I have always had a passion for front-end development and UI/UX.
          </p>
          <p className="text-sm sm:text-md mb-4">
            I have built a lot of websites for various clients, from state-funded transportation authorities, country clubs, universities and then even small community based organizations. At the end of the day though, I have a passion for creating fun and unique websites, especially ones that are useful to others.
          </p>
          <p className="text-sm sm:text-md mb-4">
            My favorite website that I have built is <Link className="inline-flex items-center underline" href="https://polisheddex.app">PolishedDex <ArrowUpRight className="inline size-5" /></Link>, which is a data-mined Pokédex for the ROM Hack Polished Crystal. This project originally was done as a way to not have to review data files manually and rather wanting to try putting it into a auto generated human readable format which would allow for generating quick updates when the source is updated. It was also a neat way for me try some prompt-engineering!
          </p>

          <div>
            <p>
              <Link href={'https://www.linkedin.com/in/caomicc/'}
                target="_blank"
                className="inline-flex items-end gap-1 underline leading-tight">
                LinkedIn  <ArrowUpRight className="inline size-5" />
              </Link>
            </p>
            <p>
              <Link href={'https://www.github.com/caomicc/'}
                target="_blank"
                className="inline-flex items-center underline leading-tight">
                Github  <ArrowUpRight className="inline size-5" />
              </Link>
            </p>
            <p>
              <Link href={'mailto:caomicc@gmail.com'}
                target="_blank"
                className="inline-flex items-center underline leading-tight">
                Email me  <ArrowUpRight className="inline size-5" />
              </Link>
            </p>
          </div>
        </div>
        <iframe id='kofiframe' src='https://ko-fi.com/caomicc/?hidefeed=true&widget=true&embed=true&preview=true' className="border-none w-full md:w-auto md:min-w-[320px]" height={712} title='caomicc'></iframe>
      </div>
    </div >
  );
}
