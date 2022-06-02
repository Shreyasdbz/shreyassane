import Nav from '../components/util/Nav';
import Hero from '../components/views/Hero';

export default function Home() {
  return (
    <>
      <div className="relative flex w-full flex-col items-center justify-start">
        {/* Navigation Bar */}
        <Nav />
        {/* Views */}
        <Hero />
        <Hero />
      </div>
    </>
  );
}
