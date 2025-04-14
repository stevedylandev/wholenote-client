import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import sdk from "@farcaster/frame-sdk"
import { ShareIcon } from "lucide-react"
import { useState } from "react"

export function ShareForm() {
  const [url, setUrl] = useState('')
  const [open, setOpen] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const validateSpotifyUrl = (url: string): boolean => {
    const spotifyUrlRegex = /^https:\/\/open\.spotify\.com\/(track|album|playlist|artist)\/[a-zA-Z0-9]+(\?.*)?$/;
    return spotifyUrlRegex.test(url);
  }

  const cleanUrl = (url: string): string => {
    try {
      const urlObj = new URL(url);
      return `${urlObj.origin}${urlObj.pathname}`;
    } catch (error) {
      console.log(error)
      return url; // Return original if parsing failed
    }
  }

  async function composeCast() {
    if (!url.trim()) {
      setError("Please enter a Spotify URL");
      return;
    }

    if (!validateSpotifyUrl(url)) {
      setError("Please enter a valid Spotify URL");
      return;
    }

    const cleanedUrl = cleanUrl(url);

    await sdk.actions.composeCast({
      text: "Check out this song!",
      embeds: [`https://share.wholenote.live?url=${cleanedUrl}`]
    })
    setOpen(false);
  }

  return (
    <div className="flex flex-col items-center">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button className="font-bold text-black mb-6">
            <ShareIcon />
            Share a Song</Button>
        </SheetTrigger>
        <SheetContent side="top">
          <SheetHeader>
            <SheetTitle>Share a Song</SheetTitle>
            <SheetDescription>
              Paste in your Spotify link then click share!
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col">
            <Input
              id="link"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
                setError(null);
              }}
              placeholder="https://open.spotify.com/track/4madkqL1bB8rweDVBG8FvR"
              className="w-full"
            />
            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
          </div>
          <SheetFooter>
            <Button onClick={composeCast} className="font-bold w-full" type="submit">Share</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
