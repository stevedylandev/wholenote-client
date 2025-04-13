import { useState, useEffect, useRef } from "react";
import { SpotifyCard } from "./SpotifyCard";
import { Cast } from "../lib/types";
import { HeadphonesIcon } from "lucide-react";
import { Context } from "@farcaster/frame-sdk";
import { sdk } from "@farcaster/frame-sdk";

export function SpotifyFeed() {
  const [casts, setCasts] = useState<Cast[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [frameAdded, setFrameAdded] = useState(false);

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



  useEffect(() => {
    async function fetchSpotifyCasts() {
      try {
        const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/feed?limit=50`);

        if (!response.ok) {
          throw new Error('Failed to fetch Spotify casts');
        }

        const data = await response.json();
        setCasts(data.casts);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchSpotifyCasts();
  }, []);

  useEffect(() => {
    if (!sdk || !context || frameAdded) return;

    const handleScroll = () => {
      // Clear any existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Set a new timeout for 3 seconds
      scrollTimeoutRef.current = setTimeout(async () => {
        try {
          await sdk.actions.addFrame();
          setFrameAdded(true);
          console.log("Frame added after scrolling");
        } catch (err) {
          console.error("Failed to add frame:", err);
        }
      }, 3000); // 3 seconds
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [sdk, context, frameAdded]);

  // Rest of your component's code...


  if (loading) {
    return (
      <div className="flex justify-center p-8">
        <HeadphonesIcon className="h-8 w-8 animate-bounce" />
      </div>
    )
  }

  if (error) {
    return <div className="flex justify-center p-8 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-6">
        {casts.map((cast) => (
          <SpotifyCard context={context} key={cast.hash} cast={cast} />
        ))}
      </div>
    </div>
  );
}
