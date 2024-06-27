import Hero from '../components/hero';
export default function Home() {
  return (
    <main className="relative bg-black min-h-screen flex-col mx-auto items-center justify-center p-24 sm:px-10 px-5">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Hero />
        </div>
    </main>
  );
}
