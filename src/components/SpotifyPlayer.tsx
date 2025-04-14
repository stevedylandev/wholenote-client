import { useEffect, useRef } from 'react';
import { usePlayback } from '../contexts/PlaybackContext';
import { nanoid } from "nanoid"

interface SpotifyPlayerProps {
  embedUrl: string;
  height?: number;
}

export function SpotifyPlayer({ embedUrl, height = 152 }: SpotifyPlayerProps) {
  const { activePlayerId, setActivePlayerId } = usePlayback();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerId = useRef(`spotify-player-${nanoid()}`);

  const processedEmbedUrl = () => {
    if (embedUrl.includes('?')) {
      return `${embedUrl}&theme=0`;
    } else {
      return `${embedUrl}?theme=0`;
    }
  };

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      try {
        const data = JSON.parse(event.data);
        if (data && data.type === 'playback_update' && data.payload && data.payload.isPlaying) {
          if (event.source === iframeRef.current?.contentWindow) {
            setActivePlayerId(playerId.current);
          }
        }
      } catch (error) {
        console.log(error)
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [setActivePlayerId]);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const handlePlay = () => {
      setActivePlayerId(playerId.current);
    };

    iframe.addEventListener('play', handlePlay, { capture: true });
    return () => iframe.removeEventListener('play', handlePlay, { capture: true });
  }, [setActivePlayerId]);

  useEffect(() => {
    if (activePlayerId && activePlayerId !== playerId.current) {
      const pausePlayer = () => {
        try {
          const iframe = iframeRef.current;
          if (iframe && iframe.contentWindow) {
            const playButton = iframe.contentDocument?.querySelector('[data-testid="play-button"]') as HTMLButtonElement;
            if (playButton) playButton.click();
          }
        } catch (error) {
          console.log("Cannot access iframe content due to security restrictions", error);
        }
      };

      pausePlayer();
    }
  }, [activePlayerId]);

  return (
    <div className="spotify-embed w-full">
      <iframe
        ref={iframeRef}
        id={playerId.current}
        style={{ borderRadius: '12px' }}
        width="100%"
        height={height}
        title="Spotify Embed"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        src={processedEmbedUrl()}
      ></iframe>
    </div>
  );
}
