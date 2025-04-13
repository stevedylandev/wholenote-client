import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { validateSpotifyUrl, convertToEmbedUrl } from "../lib/spotify";
import sdk from "@farcaster/frame-sdk";
import { Cast } from "../lib/types";
import { Context } from "@farcaster/frame-sdk"

type SpotifyCardProps = {
  cast: Cast;
  context: Context.FrameContext;
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
        <CardHeader onClick={() => sdk.actions.viewProfile({ fid: cast.author.fid })} className="flex flex-row items-center gap-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src={cast.author.pfp_url} alt={cast.author.display_name} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <h3 className="font-semibold">{cast.author.display_name}</h3>
            <p className="text-sm text-muted-foreground">@{cast.author.username}</p>
          </div>
        </CardHeader>
      ) : (
        <a href={`https://warpcast.com/${cast.author.username}`} target="_blank" rel="noreferrer">
          <CardHeader className="flex flex-row items-center gap-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src={cast.author.pfp_url} alt={cast.author.display_name} />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <h3 className="font-semibold">{cast.author.display_name}</h3>
              <p className="text-sm text-muted-foreground">@{cast.author.username}</p>
            </div>
          </CardHeader>
        </a>

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
      </CardContent>

      <CardFooter className="text-sm text-muted-foreground">
        <time dateTime={cast.timestamp}>{formattedDate}</time>
      </CardFooter>
    </Card>
  );
}
