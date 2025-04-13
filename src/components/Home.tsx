import { useState, useEffect } from 'react'
import sdk from '@farcaster/frame-sdk';
import { SpotifyFeed } from './SpotifyFeed';

function Home() {
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);

  useEffect(() => {
    const load = async () => {
      sdk.actions.ready();
    };
    if (sdk && !isSDKLoaded) {
      setIsSDKLoaded(true);
      load();
    }
  }, [isSDKLoaded]);

  if (!isSDKLoaded) {
    return <div className="bg-black text-white p-4">Loading...</div>;
  }

  return (
    <main className="flex flex-col min-h-screen w-full items-center bg-white text-black dark:bg-black dark:text-white p-4">
      <div className="w-full max-w-2xl mt-2">
        <header className="text-center mb-8">
          <h1 className="text-5xl font-black mb-2">Wholenote</h1>
          <p className="text-muted-foreground">Discover music shared on Farcaster</p>
        </header>
        <SpotifyFeed />
      </div>
    </main>
  )
}

export default Home
