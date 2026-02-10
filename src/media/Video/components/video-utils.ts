import type { VideoItem, VideoProvider } from "../schema";

export interface VideoEmbedInfo {
  provider: VideoProvider;
  embedUrl: string;
  videoId: string;
}

export interface VideoSourceInfo {
  type: "embed" | "direct" | "stream";
  url: string;
  provider?: VideoProvider;
  embedUrl?: string;
}

export interface ProviderInfo {
  name: string;
  color: string;
}

/**
 * Detect video provider and generate embed URL from various URL formats.
 */
export function detectVideoEmbed(url: string): VideoEmbedInfo | null {
  if (!url) return null;

  // YouTube patterns
  const youtubePatterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/,
  ];
  for (const pattern of youtubePatterns) {
    const match = url.match(pattern);
    if (match?.[1]) {
      return {
        provider: "youtube",
        videoId: match[1],
        embedUrl: `https://www.youtube.com/embed/${match[1]}?rel=0&modestbranding=1`,
      };
    }
  }

  // Vimeo patterns
  const vimeoMatch = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeoMatch?.[1]) {
    return {
      provider: "vimeo",
      videoId: vimeoMatch[1],
      embedUrl: `https://player.vimeo.com/video/${vimeoMatch[1]}?byline=0&portrait=0`,
    };
  }

  // Dailymotion patterns
  const dailymotionPatterns = [
    /dailymotion\.com\/video\/([a-zA-Z0-9]+)/,
    /dai\.ly\/([a-zA-Z0-9]+)/,
  ];
  for (const pattern of dailymotionPatterns) {
    const match = url.match(pattern);
    if (match?.[1]) {
      return {
        provider: "dailymotion",
        videoId: match[1],
        embedUrl: `https://www.dailymotion.com/embed/video/${match[1]}`,
      };
    }
  }

  // Twitch patterns (clips and videos)
  const twitchClipMatch = url.match(/twitch\.tv\/\w+\/clip\/([a-zA-Z0-9_-]+)/);
  if (twitchClipMatch?.[1]) {
    return {
      provider: "twitch",
      videoId: twitchClipMatch[1],
      embedUrl: `https://clips.twitch.tv/embed?clip=${twitchClipMatch[1]}&parent=${typeof window !== "undefined" ? window.location.hostname : "localhost"}`,
    };
  }

  const twitchVideoMatch = url.match(/twitch\.tv\/videos\/(\d+)/);
  if (twitchVideoMatch?.[1]) {
    return {
      provider: "twitch",
      videoId: twitchVideoMatch[1],
      embedUrl: `https://player.twitch.tv/?video=${twitchVideoMatch[1]}&parent=${typeof window !== "undefined" ? window.location.hostname : "localhost"}`,
    };
  }

  // TikTok patterns
  const tiktokMatch = url.match(
    /tiktok\.com\/@[\w.-]+\/video\/(\d+)|tiktok\.com\/t\/([a-zA-Z0-9]+)/,
  );
  if (tiktokMatch?.[1] || tiktokMatch?.[2]) {
    const videoId = tiktokMatch[1] || tiktokMatch[2];
    return {
      provider: "tiktok",
      videoId: videoId!,
      embedUrl: `https://www.tiktok.com/embed/v2/${videoId}`,
    };
  }

  // Twitter/X patterns
  const twitterMatch = url.match(/(?:twitter\.com|x\.com)\/\w+\/status\/(\d+)/);
  if (twitterMatch?.[1]) {
    return {
      provider: "twitter",
      videoId: twitterMatch[1],
      embedUrl: `https://platform.twitter.com/embed/Tweet.html?id=${twitterMatch[1]}`,
    };
  }

  return null;
}

/**
 * Get the best source URL for a video, detecting embeds automatically.
 */
export function getVideoSource(video: VideoItem): VideoSourceInfo {
  if (video.location?.embedUrl) {
    return {
      type: "embed",
      url: video.location.embedUrl,
      embedUrl: video.location.embedUrl,
      provider: video.location.provider ?? "custom",
    };
  }

  const videoRecord = video as unknown as Record<string, unknown>;
  const src =
    video.location?.src ||
    video.location?.streamUrl ||
    video.source ||
    (videoRecord.url as string) ||
    (videoRecord.link as string) ||
    (videoRecord.videoUrl as string) ||
    (videoRecord.embedUrl as string) ||
    "";

  const embedInfo = detectVideoEmbed(src);

  if (embedInfo) {
    return {
      type: "embed",
      url: src,
      embedUrl: embedInfo.embedUrl,
      provider: embedInfo.provider,
    };
  }

  if (video.location?.streamUrl) {
    return {
      type: "stream",
      url: video.location.streamUrl,
    };
  }

  return {
    type: "direct",
    url: src,
  };
}

/**
 * Provider-specific iframe attributes
 */
export function getIframeAttributes(provider?: VideoProvider): string {
  const base =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";

  switch (provider) {
    case "youtube":
    case "vimeo":
    case "twitch":
      return `${base}; fullscreen`;
    case "tiktok":
    case "twitter":
      return base;
    default:
      return `${base}; fullscreen`;
  }
}

/**
 * Get provider display name and icon color
 */
export function getProviderInfo(provider?: VideoProvider): ProviderInfo {
  switch (provider) {
    case "youtube":
      return { name: "YouTube", color: "#FF0000" };
    case "vimeo":
      return { name: "Vimeo", color: "#1AB7EA" };
    case "dailymotion":
      return { name: "Dailymotion", color: "#00AAFF" };
    case "twitch":
      return { name: "Twitch", color: "#9146FF" };
    case "tiktok":
      return { name: "TikTok", color: "#000000" };
    case "twitter":
      return { name: "X", color: "#1DA1F2" };
    default:
      return { name: "Video", color: "#666666" };
  }
}
