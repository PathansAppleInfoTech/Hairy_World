import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import company from '../data/companyData';
import { ArrowIcon } from '../components/Icons';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found | Hairy World"
        description="The page you are looking for could not be found. Explore Hairy World's wholesale human hair products or return to the homepage."
        path="/404"
        noindex
      />

      <main className="relative isolate flex min-h-[calc(100svh-5rem)] items-center overflow-hidden bg-[#191612] py-16 text-white sm:py-20">
        {/* Warm, restrained ambient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_18%_20%,rgba(184,146,42,0.16),transparent_34%),radial-gradient(ellipse_at_88%_82%,rgba(184,146,42,0.12),transparent_35%)]"
        />
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-1/2 -z-10 h-[26rem] w-[26rem] -translate-y-1/2 rounded-full border border-[#c6a45c]/10 sm:h-[38rem] sm:w-[38rem]" />
        <div aria-hidden="true" className="pointer-events-none absolute -left-20 top-1/2 -z-10 h-[19rem] w-[19rem] -translate-y-1/2 rounded-full border border-[#c6a45c]/10 sm:h-[29rem] sm:w-[29rem]" />

        <div className="container-x relative mx-auto grid w-full items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <section className="relative z-10 text-center lg:col-span-7 lg:text-left">
            <Link to="/" aria-label={`${company.name} homepage`} className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 transition hover:border-[#c6a45c]/50 hover:bg-white/[0.07] lg:justify-start">
              <img
                src={company.logos.horizontalWhite}
                alt={company.name}
                width="236"
                height="60"
                className="h-8 w-auto sm:h-9"
              />
            </Link>

            <p className="mt-10 inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.3em] text-[#d9bd79] sm:text-xs">
              <span className="h-px w-8 bg-[#c6a45c]" />
              Lost in the strands?
              <span className="h-px w-8 bg-[#c6a45c]" />
            </p>

            <h1 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              This page has
              <span className="block italic text-[#e5c779]">gone off the weave.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/60 sm:text-base lg:mx-0">
              The link may be broken, or the page may have moved. Let’s get you back to the good stuff.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c6a45c] px-6 py-3.5 text-sm font-semibold text-[#191612] shadow-[0_10px_35px_-16px_rgba(198,164,92,0.7)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#e3c77f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e3c77f]"
              >
                Back to homepage <ArrowIcon width={16} height={16} />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium text-white/90 transition duration-300 hover:-translate-y-0.5 hover:border-[#c6a45c]/70 hover:text-[#e5c779] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e3c77f]"
              >
                Explore products <ArrowIcon width={16} height={16} />
              </Link>
            </div>

            <p className="mt-8 text-[10px] uppercase tracking-[0.24em] text-white/35">
              {company.tagline}
            </p>
          </section>

          {/* Decorative globe-and-weave illustration */}
          <div className="relative mx-auto w-full max-w-[24rem] lg:col-span-5 lg:max-w-none" aria-hidden="true">
            <div className="absolute inset-6 rounded-full bg-[#c6a45c]/10 blur-3xl" />
            <svg viewBox="0 0 520 520" className="relative mx-auto w-full max-w-[30rem] overflow-visible" fill="none">
              <defs>
                <linearGradient id="hairyGold" x1="90" y1="80" x2="430" y2="450" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F1D991" />
                  <stop offset="0.48" stopColor="#C6A45C" />
                  <stop offset="1" stopColor="#8E6429" />
                </linearGradient>
                <radialGradient id="hairyGlow" cx="0" cy="0" r="1" gradientTransform="translate(260 260) rotate(90) scale(220)" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#C6A45C" stopOpacity="0.14" />
                  <stop offset="1" stopColor="#C6A45C" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="260" cy="260" r="222" fill="url(#hairyGlow)" />
              <circle cx="260" cy="260" r="205" stroke="url(#hairyGold)" strokeOpacity="0.7" strokeWidth="1.5" />
              <circle cx="260" cy="260" r="178" stroke="url(#hairyGold)" strokeOpacity="0.25" strokeDasharray="3 9" />
              <circle cx="260" cy="260" r="145" stroke="url(#hairyGold)" strokeOpacity="0.22" />
              <g stroke="url(#hairyGold)" strokeLinecap="round" strokeLinejoin="round">
                <path d="M129 159c31-57 70-83 116-91 39-7 85 3 121 27" strokeWidth="2.2" />
                <path d="M111 198c39-59 93-83 147-73 48 9 80 37 112 61 24 18 47 24 69 16" strokeWidth="2.4" />
                <path d="M99 231c44-45 91-57 136-45 47 13 74 47 107 75 31 26 63 36 94 17" strokeWidth="2.8" />
                <path d="M94 267c48-31 94-34 132-13 36 20 63 53 95 78 34 27 67 37 100 23" strokeWidth="3" />
                <path d="M104 304c46-18 83-10 118 13 34 23 62 57 93 79 31 22 60 27 88 17" strokeWidth="2.8" />
                <path d="M128 340c37-5 68 6 100 28 30 21 55 48 81 61 23 12 47 13 67 5" strokeWidth="2.4" />
                <path d="M164 374c25 3 48 15 70 31 21 15 42 31 62 39" strokeWidth="2" />
                <path d="M170 113c-30 29-38 64-23 95 16 34 57 45 82 71 24 25 31 58 20 89-9 27-27 46-50 64" strokeWidth="2.3" />
                <path d="M217 80c-20 30-23 62-8 88 13 24 41 39 60 60 25 28 35 58 31 88-4 34-25 67-52 88" strokeWidth="2.3" />
                <path d="M260 76c-9 29-4 55 13 77 19 25 45 41 61 67 19 31 23 64 10 96-12 29-34 55-57 77" strokeWidth="2.3" />
                <path d="M305 86c3 31 17 55 39 76 24 24 42 47 48 77 6 30-4 59-23 84" strokeWidth="2.1" />
                <path d="M350 108c15 26 34 45 55 61 21 16 34 36 38 60" strokeWidth="1.9" />
              </g>
              <circle cx="260" cy="260" r="64" fill="#191612" stroke="url(#hairyGold)" strokeWidth="1.5" />
              <text x="260" y="248" textAnchor="middle" fill="#E5C779" fontFamily="Georgia, serif" fontSize="16" letterSpacing="5">PAGE</text>
              <text x="260" y="315" textAnchor="middle" fill="url(#hairyGold)" fontFamily="Georgia, serif" fontWeight="600" fontSize="69" letterSpacing="-2">404</text>
              <circle cx="260" cy="55" r="4" fill="#E5C779" />
              <circle cx="465" cy="260" r="4" fill="#E5C779" />
              <circle cx="260" cy="465" r="4" fill="#E5C779" />
              <circle cx="55" cy="260" r="4" fill="#E5C779" />
            </svg>
            <div className="relative mx-auto -mt-2 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-white/45">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c6a45c]" />
              A little detour
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
