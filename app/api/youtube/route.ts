import { NextResponse } from 'next/server';

type Video = {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
};

type YouTubeAPIResponse = {
  items: {
    id: { videoId: string };
    snippet: {
      title: string;
      thumbnails: {
        medium: { url: string };
      };
    };
  }[];
};

let cachedVideos: Video[] | null = null;
let lastFetchTime = 0;
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export async function GET() {
  const currentTime = Date.now();

  // Check if the cache is still valid
  if (cachedVideos && (currentTime - lastFetchTime) < CACHE_DURATION) {
    return NextResponse.json(cachedVideos);
  }

  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = 'UCQfausQM53-3mPHWxGJZNAw'; // Replace with your channel ID
  const maxResults = 6;

  try {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`);
    const data: YouTubeAPIResponse = await response.json();

    const videos: Video[] = data.items.map(item => ({
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.medium.url,
      url: `https://www.youtube.com/watch?v=${item.id.videoId}`
    }));

    // Update the cache
    cachedVideos = videos;
    lastFetchTime = currentTime;

    return NextResponse.json(videos);
  } catch {
    // Handle errors, possibly returning cached data if available
    if (cachedVideos) {
      return NextResponse.json(cachedVideos);
    }
    return NextResponse.json({ error: 'Failed to fetch videos' }, { status: 500 });
  }
}