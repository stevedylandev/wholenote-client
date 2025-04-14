import { useParams, Link as RouterLink } from 'react-router-dom';
import { Card, CardContent } from './ui/card';
import { Link } from '@mini_apps/utilities';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';
import sdk from '@farcaster/frame-sdk';
import { Context } from '@farcaster/frame-sdk';
import { ShareIcon } from 'lucide-react';

function SharedSong() {
  // Extract userId from the URL
  const { id, type } = useParams();

  const embedUrl = `https://open.spotify.com/embed/${type}/${id}`
  const spotifyUrl = `https://open.spotify.com/${type}/${id}`

  const [context, setContext] = useState<Context.FrameContext>();

  useEffect(() => {
    const load = async () => {
      setContext(await sdk.context);
      sdk.actions.ready();
    };
    if (sdk) {
      load();
    }
  }, []);



  return (
    <main className="flex flex-col min-h-screen w-full items-center bg-white text-black dark:bg-black dark:text-white p-4">
      <div className="w-full max-w-2xl mt-2">
        <header className="text-center mb-8">
          <RouterLink to="/">
            <h1 className="text-5xl font-black mb-2">Wholenote</h1>
          </RouterLink>
          <p className="text-muted-foreground">Discover music shared on Farcaster</p>
        </header>

        <Card className="w-full max-w-xl mx-auto">
          <CardContent className="space-y-4">
            <div className="spotify-embed w-full">
              <iframe
                style={{ borderRadius: '12px' }}
                width="100%"
                height="152"
                title="Spotify Embed"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                src={embedUrl}
              ></iframe>
            </div>
            <div className='flex flex-row items-center gap-4'>
              <Link href={spotifyUrl}>
                <Button className="font-bold text-black cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 64 64"><path fill="currentColor" d="M32 1C14.8 1 1 14.8 1 32s13.8 31 31 31s31-13.8 31-31S49.2 1 32 1m14.2 44.7c-.6.8-1.7 1.1-2.7.7c-7.3-4.5-16.5-5.5-27.2-3.1c-1.1.3-2.1-.4-2.3-1.4c-.3-1.1.4-2.1 1.4-2.4C27.2 36.8 37.2 38 45.6 43c.9.7 1.2 1.8.6 2.7m3.8-8.3c-.7 1.1-2.3 1.4-3.2.7c-8.3-5.1-21-6.6-30.9-3.5c-1.3.4-2.7-.3-3-1.7c-.4-1.3.3-2.7 1.7-3c11.3-3.5 25.2-1.7 34.8 4.1c.9.7 1.3 2.1.6 3.4m.3-8.9c-10-5.9-26.5-6.5-36.1-3.5c-1.4.4-3.1-.4-3.5-2c-.4-1.4.4-3.1 2-3.5c11-3.2 29-2.7 40.6 4.2c1.4.8 1.8 2.7 1.1 3.9c-.8 1.3-2.7 1.7-4.1.9" /></svg>
                  Open in Spotify
                </Button>
              </Link>
              {context && (
                <Button variant='secondary' onClick={() => sdk.actions.composeCast({
                  text: `Check out this song! https://share.wholenote.live?url=${spotifyUrl}`,
                  embeds: [`https://share.wholenote.live?url=${spotifyUrl}`]
                })} className="font-bold cursor-pointer">
                  <ShareIcon />
                  Share
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

export default SharedSong;
