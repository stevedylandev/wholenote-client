export function validateSpotifyUrl(url: string): boolean {
  const regex = /^https:\/\/open\.spotify\.com\/(track|album|playlist|artist|show|episode)\/[a-zA-Z0-9]+/;
  return regex.test(url);
}

type SpotifyInfo = {
  type: string;
  id: string;
  valid: boolean;
};

// Extract content type and ID from Spotify URL
export function extractSpotifyInfo(url: string): SpotifyInfo {
  try {
    const urlObj = new URL(url);
    const pathParts = urlObj.pathname.split('/').filter(Boolean);

    if (pathParts.length >= 2) {
      return {
        type: pathParts[0],
        id: pathParts[1].split('?')[0], // Remove query parameters if present
        valid: true
      };
    }

    return { type: '', id: '', valid: false };
  } catch (error) {
    console.log(error)
    return { type: '', id: '', valid: false };
  }
}

// Convert regular Spotify URL to embed URL
export function convertToEmbedUrl(url: string): string {
  const info = extractSpotifyInfo(url);

  if (!info.valid) {
    throw new Error('Invalid Spotify URL format');
  }

  return `https://open.spotify.com/embed/${info.type}/${info.id}`;
}
