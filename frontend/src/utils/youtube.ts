// frontend/src/utils/youtube.ts
export interface YouTubeVideo {
  videoId: string;
  title: string;
}

export const fetchPlaylistVideos = async (playlistId: string): Promise<YouTubeVideo[]> => {
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
  if (!apiKey) {
    console.error("YouTube API Keyが設定されていません");
    return [];
  }

  let allVideos: YouTubeVideo[] = [];
  let nextPageToken = '';

  try {
    // nextPageToken がある限り、最大50件ずつ繰り返し取得して結合する
    do {
      const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${apiKey}&maxResults=50${nextPageToken ? `&pageToken=${nextPageToken}` : ''}`;
      
      const response = await fetch(url);
      if (!response.ok) throw new Error('プレイリストの取得に失敗しました');
      
      const data = await response.json();
      const videos = data.items.map((item: any) => ({
        videoId: item.snippet.resourceId.videoId,
        title: item.snippet.title,
      }));
      
      allVideos = [...allVideos, ...videos];
      nextPageToken = data.nextPageToken; // 次のページがあればトークンが入る
      
    } while (nextPageToken);

    return allVideos;
  } catch (error) {
    console.error('YouTube API Error:', error);
    return [];
  }
};