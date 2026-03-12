import { Pikachu } from '@/components/lil-pikachu';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/seo';

export const metadata: Metadata = {
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

export default function Home() {
  return (
    <>
      <div>

        <h1 className="">
          Hi! My name is Cammy.
        </h1>
        <p className="text-lead">
          I am a front-end dev who dabbles in full-stack.</p>
      </div>
      <div>
        <Pikachu />
        <p className="mb-4">
          I have been building websites since Myspace and Neopets were the biggest thing. I have always had a passion for front-end development and UI/UX.
        </p>
        <p className="mb-4">
          I have built a lot of websites for various clients, from state-funded transportation authorities, country clubs, universities and then even small community based organizations. At the end of the day though, I have a passion for creating fun and unique websites, especially ones that are useful to others.
        </p>
        <p className="mb-4">
          My favorite website that I have built is <Link className="inline-flex items-center underline" href="https://polisheddex.app">PolishedDex <ArrowUpRight className="inline size-5" /></Link>, which is a data-mined Pokédex for the ROM Hack Polished Crystal. This project originally was done as a way to not have to review data files manually and rather wanting to try putting it into a auto generated human readable format which would allow for generating quick updates when the source is updated. It was also a neat way for me try some prompt-engineering!
        </p>
      </div>

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
    </>
  );
}
