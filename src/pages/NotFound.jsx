import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { ArrowIcon } from '../components/Icons';

export default function NotFound() {
  return (
    <>
      <SEO title="Page not found" description="The page you are looking for could not be found." path="/404" noindex />
      <section className="bg-ivory py-28 text-center">
        <div className="container-x">
          <p className="font-display text-[9rem] font-semibold leading-none gold-text sm:text-[14rem]">404</p>
          <h1 className="mt-2 font-display text-3xl font-semibold sm:text-5xl">This strand came loose.</h1>
          <p className="mx-auto mt-4 max-w-md text-ink/65">The page you're looking for doesn't exist or has moved.</p>
          <Link to="/" className="btn-gold mt-8">Back to home <ArrowIcon width={16} height={16} /></Link>
        </div>
      </section>
    </>
  );
}
