import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import sdk from "@farcaster/frame-sdk"
import { useState } from "react"

export function ShareForm() {
  const [url, setUrl] = useState('')
  const [open, setOpen] = useState(false)

  async function composeCast() {
    await sdk.actions.composeCast({
      text: "Check out this song!",
      embeds: [`https://share.wholenote.live?url=${url}`]
    })
    setOpen(false)
  }

  return (
    <div className="flex flex-col items-center">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="font-bold text-black mb-6">Share a Song</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Share a Song</DialogTitle>
            <DialogDescription>
              Paste in your Spotify link then click share!
            </DialogDescription>
          </DialogHeader>
          <div className="flex">
            <Input
              id="link"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://open.spotify.com/track/4madkqL1bB8rweDVBG8FvR"
              className="w-full"
            />
          </div>
          <DialogFooter>
            <Button onClick={composeCast} className="font-bold w-full" type="submit">Share</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
