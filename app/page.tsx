import Image from 'next/image';



export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-purple-900">
      <header className="text-center text-white mb-8">
        <h1 className="text-3xl font-bold">Welcome to My Website</h1>
        <p className="text-lg">Explore and enjoy!</p>
      </header>
      <div className="w-48 h-48">
        <Image
          src="/dice.svg"
          alt="An image"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
    </main>
  );
}
