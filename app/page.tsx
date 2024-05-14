import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-purple-900 text-white">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">Welcome to my boring website, Tyler</h1>
        <p className="text-lg">I did not know what to commit, so I thought maybe adding another paragraph would be cool.</p>
      </header>
      <div className="w-36 h-36 relative">
        <Image
          src="/dice.svg" 
          alt="A dice"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
    </main>
  );
}
