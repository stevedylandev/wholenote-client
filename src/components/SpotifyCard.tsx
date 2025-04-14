import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { validateSpotifyUrl, convertToEmbedUrl } from "../lib/spotify";
import sdk from "@farcaster/frame-sdk";
import { Cast } from "../lib/types";
import { Context } from "@farcaster/frame-sdk"
import { Button } from "./ui/button";
import { Link } from "@mini_apps/utilities";
import { ExternalLinkIcon, Share2Icon } from "lucide-react";

type SpotifyCardProps = {
  cast: Cast;
  context: Context.FrameContext | undefined
};

export function SpotifyCard({ cast, context }: SpotifyCardProps) {
  // Get initials for avatar fallback
  const initials = cast.author.display_name
    ?.split(' ')
    .map((n: string) => n[0])
    .join('')
    .toUpperCase() || '?';

  // Format timestamp
  const formattedDate = new Date(cast.timestamp).toLocaleDateString();

  // Find the Spotify URL in any of the embeds
  let spotifyUrl = '';
  let embedUrl = '';

  // Check all embeds for a Spotify URL
  if (cast.embeds && cast.embeds.length > 0) {
    for (const embed of cast.embeds) {
      if (embed.url && validateSpotifyUrl(embed.url)) {
        spotifyUrl = embed.url;
        try {
          embedUrl = convertToEmbedUrl(spotifyUrl);
        } catch (error) {
          console.error("Failed to convert Spotify URL:", error);
        }
        break; // Stop after finding the first valid Spotify URL
      }
    }
  }

  // Remove all Spotify URLs from text
  const cleanedText = cast.text.replace(/https?:\/\/open\.spotify\.com\/\S+/g, '').trim();

  // If no valid Spotify URL was found, don't render the card
  if (!embedUrl) {
    return null;
  }

  return (
    <Card className="w-full max-w-xl mx-auto">
      {context ? (
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar onClick={() => sdk.actions.viewProfile({ fid: cast.author.fid })} className="h-10 w-10">
            <AvatarImage src={cast.author.pfp_url} alt={cast.author.display_name} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <h3 className="font-semibold">{cast.author.display_name}</h3>
            <p className="text-sm text-muted-foreground">@{cast.author.username}</p>
          </div>
        </CardHeader>
      ) : (
        <CardHeader className="flex flex-row items-center gap-4">
          <a href={`https://warpcast.com/${cast.author.username}`} target="_blank" rel="noreferrer">
            <Avatar className="h-10 w-10">
              <AvatarImage src={cast.author.pfp_url} alt={cast.author.display_name} />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
          </a>
          <div className="flex flex-col">
            <h3 className="font-semibold">{cast.author.display_name}</h3>
            <p className="text-sm text-muted-foreground">@{cast.author.username}</p>
          </div>
        </CardHeader>
      )}
      <CardContent className="space-y-4">
        {cleanedText && (
          <div className="whitespace-pre-line">
            <p>{cleanedText}</p>
          </div>
        )}
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
        <Link href={spotifyUrl}>
          <Button className="font-bold text-black cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 64 64"><path fill="currentColor" d="M32 1C14.8 1 1 14.8 1 32s13.8 31 31 31s31-13.8 31-31S49.2 1 32 1m14.2 44.7c-.6.8-1.7 1.1-2.7.7c-7.3-4.5-16.5-5.5-27.2-3.1c-1.1.3-2.1-.4-2.3-1.4c-.3-1.1.4-2.1 1.4-2.4C27.2 36.8 37.2 38 45.6 43c.9.7 1.2 1.8.6 2.7m3.8-8.3c-.7 1.1-2.3 1.4-3.2.7c-8.3-5.1-21-6.6-30.9-3.5c-1.3.4-2.7-.3-3-1.7c-.4-1.3.3-2.7 1.7-3c11.3-3.5 25.2-1.7 34.8 4.1c.9.7 1.3 2.1.6 3.4m.3-8.9c-10-5.9-26.5-6.5-36.1-3.5c-1.4.4-3.1-.4-3.5-2c-.4-1.4.4-3.1 2-3.5c11-3.2 29-2.7 40.6 4.2c1.4.8 1.8 2.7 1.1 3.9c-.8 1.3-2.7 1.7-4.1.9" /></svg>
            Open in Spotify
          </Button>
        </Link>
      </CardContent>

      <CardFooter className="text-sm text-muted-foreground">
        <Link className="flex flex-row gap-1 items-center" href={`https://warpcast.com/${cast.author.username}/${cast.hash}`}>
          <time dateTime={cast.timestamp}>{formattedDate}</time>
          <ExternalLinkIcon className="h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
}
