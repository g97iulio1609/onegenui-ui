/**
 * Detect Video Embed URL
 * Supports YouTube, Vimeo, and Dailymotion
 */
export function detectVideoEmbed(
  url: string,
): { embedUrl: string; provider: string } | null {
  if (!url) return null;

  // YouTube patterns
  const youtubeMatch = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/,
  );
  if (youtubeMatch?.[1]) {
    return {
      provider: "youtube",
      embedUrl: `https://www.youtube.com/embed/${youtubeMatch[1]}?rel=0&modestbranding=1`,
    };
  }

  // Vimeo patterns
  const vimeoMatch = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeoMatch?.[1]) {
    return {
      provider: "vimeo",
      embedUrl: `https://player.vimeo.com/video/${vimeoMatch[1]}?byline=0&portrait=0`,
    };
  }

  // Dailymotion patterns
  const dailymotionMatch = url.match(
    /(?:dailymotion\.com\/video\/|dai\.ly\/)([a-zA-Z0-9]+)/,
  );
  if (dailymotionMatch?.[1]) {
    return {
      provider: "dailymotion",
      embedUrl: `https://www.dailymotion.com/embed/video/${dailymotionMatch[1]}`,
    };
  }

  return null;
}
