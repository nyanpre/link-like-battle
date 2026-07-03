// frontend/src/components/ui/BGMController.tsx
import React, { useState, useEffect, useRef } from 'react';
// ★ SkipForward（スキップボタン）のアイコンを追加
import { Play, Pause, Music, X, Volume2, SkipForward } from 'lucide-react';
import { useBGM } from '../../context/BGMContext';

const API_URL = 'https://nyanpre-hasu-song-quiz-api.hf.space/api/songs';

export const BGMController: React.FC = () => {
  const { isPlaying, setIsPlaying, currentVideo, setCurrentVideo, volume, setVolume } = useBGM();
  const [videos, setVideos] = useState<any[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isReady, setIsReady] = useState(false);
  
  const playerRef = useRef<any>(null);

  // ★ 最新のリストと現在曲をイベント内で参照するためのRef
  const videosRef = useRef<any[]>([]);
  const currentVideoRef = useRef<any>(null);
  
  useEffect(() => { videosRef.current = videos; }, [videos]);
  useEffect(() => { currentVideoRef.current = currentVideo; }, [currentVideo]);

  // 1. 自作APIから曲リストを取得
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setVideos(data);
          if (!currentVideo) {
            setCurrentVideo(data[0]); // 初回曲セット
          }
        } else {
          setCurrentVideo({ videoId: '', title: 'プレイリスト読込失敗' });
        }
      })
      .catch(err => {
        console.error('API Error:', err);
        setCurrentVideo({ videoId: '', title: 'サーバー通信エラー' });
      });
  }, []);

  // ★ 次の曲へ進むロジック（エラー時や曲終了時に発動）
  const playNextVideo = () => {
    const vids = videosRef.current;
    const curr = currentVideoRef.current;
    if (vids.length === 0) return;

    // 現在の曲のインデックスを探し、次の曲（最後なら最初）へ
    const currentIndex = vids.findIndex(v => v.videoId === curr?.videoId);
    const nextIndex = (currentIndex + 1) % vids.length;
    const nextVid = vids[nextIndex];

    setCurrentVideo(nextVid);

    // プレイヤーが準備できていれば即座に次の曲をロードして再生
    if (playerRef.current) {
      playerRef.current.loadVideoById(nextVid.videoId);
      playerRef.current.playVideo();
      setIsPlaying(true);
    }
  };

  // 2. YouTube IFrame APIの初期化
  useEffect(() => {
    // ★ Error 2対策：APIから最初の曲がセットされるまでプレイヤーを作らない
    if (!currentVideo || !currentVideo.videoId || playerRef.current) return;

    if (!document.getElementById('yt-iframe-script')) {
      const tag = document.createElement('script');
      tag.id = 'yt-iframe-script';
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      if (firstScriptTag && firstScriptTag.parentNode) {
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      } else {
        document.head.appendChild(tag);
      }
    }

    const initPlayer = () => {
      if (playerRef.current) return; 
      
      playerRef.current = new (window as any).YT.Player('bgm-yt-player', {
        height: '1',
        width: '1',
        videoId: currentVideo.videoId, // 確実に存在するIDが入る
        playerVars: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          fs: 0,
          rel: 0
        },
        events: {
          onReady: (event: any) => {
            setIsReady(true);
            event.target.setVolume(volume * 100);
          },
          onStateChange: (event: any) => {
            if (event.data === 1) setIsPlaying(true);
            else if (event.data === 2) setIsPlaying(false);
            else if (event.data === 0) {
              // ★ 曲が最後まで終わったらオートプレイで次の曲へ
              playNextVideo();
            }
          },
          onError: (event: any) => {
            // ★ エラーが起きた曲のタイトルとIDを分かりやすく出力する
            console.error(`❌ 再生エラー発生！`);
            console.error(` ・曲名: ${currentVideo.title}`);
            console.error(` ・動画ID: ${currentVideo.videoId}`);
            console.error(` ・エラーコード: ${event.data} (150なら埋め込み禁止)`);
            
            playNextVideo();
          }
        }
      });
    };

    if ((window as any).YT && (window as any).YT.Player) {
      initPlayer();
    } else {
      (window as any).onYouTubeIframeAPIReady = initPlayer;
    }
  }, [currentVideo]); // 初回曲セット時に依存して発火

  useEffect(() => {
    if (isReady && playerRef.current) {
      playerRef.current.setVolume(volume * 100);
    }
  }, [volume, isReady]);

  const togglePlay = () => {
    if (!playerRef.current || !isReady) return;
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  const handleSelectVideo = (vid: any) => {
    setCurrentVideo(vid);
    if (playerRef.current) {
      playerRef.current.loadVideoById(vid.videoId);
      playerRef.current.playVideo();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <div style={{ position: 'absolute', width: '1px', height: '1px', left: '-9999px', overflow: 'hidden' }}>
        <div id="bgm-yt-player"></div>
      </div>

      <div style={{ position: 'fixed', bottom: '10px', left: '10px', zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        
        {isExpanded && (
          <div style={{
            background: 'rgba(17, 24, 39, 0.95)', backdropFilter: 'blur(8px)',
            border: '1px solid #374151', borderRadius: '12px', padding: '16px',
            width: '280px', marginBottom: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.5)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#60a5fa', fontWeight: 'bold' }}>
                <Music size={18} />
                <span style={{ fontSize: '0.9rem' }}>蓮ノ空 BGM Player</span>
              </div>
              <button onClick={() => setIsExpanded(false)} style={{ background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer' }}>
                <X size={20} />
              </button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(0,0,0,0.4)', padding: '10px', borderRadius: '8px', marginBottom: '12px' }}>
              {/* 再生/一時停止ボタン */}
              <button 
                onClick={togglePlay}
                disabled={!currentVideo || currentVideo.videoId === '' || !isReady}
                style={{ 
                  background: isPlaying ? '#ef4444' : '#3b82f6', border: 'none', color: '#fff', 
                  cursor: (!currentVideo || currentVideo.videoId === '' || !isReady) ? 'not-allowed' : 'pointer', 
                  borderRadius: '50%', width: '36px', height: '36px', opacity: (!currentVideo || currentVideo.videoId === '' || !isReady) ? 0.5 : 1,
                  display: 'flex', justifyContent: 'center', alignItems: 'center', transition: 'background 0.2s', flexShrink: 0
                }}
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} style={{ marginLeft: '2px' }}/>}
              </button>
              
              {/* 曲名表示 */}
              <div style={{ flex: 1, overflow: 'hidden' }}>
                <div style={{ color: '#fff', fontSize: '0.8rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {currentVideo ? (isReady ? currentVideo.title : 'Buffering...') : 'Loading...'}
                </div>
              </div>

              {/* ★ スキップボタンを追加 */}
              <button 
                onClick={playNextVideo}
                disabled={!isReady || videos.length <= 1}
                style={{ 
                  background: 'transparent', border: 'none', color: '#9ca3af', 
                  cursor: (!isReady || videos.length <= 1) ? 'not-allowed' : 'pointer',
                  display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '4px'
                }}
                title="次の曲へ"
              >
                <SkipForward size={18} />
              </button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', padding: '0 4px' }}>
              <Volume2 size={16} color="#9ca3af" />
              <input 
                type="range" min={0} max={1} step={0.05} value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                style={{ flex: 1, cursor: 'pointer' }}
              />
            </div>

            <div style={{ fontSize: '0.75rem', color: '#9ca3af', marginBottom: '6px' }}>プレイリスト ({videos.length}曲)</div>
            <div style={{ maxHeight: '150px', overflowY: 'auto', paddingRight: '4px' }}>
              {videos.map((vid) => (
                <div 
                  key={vid.videoId}
                  onClick={() => handleSelectVideo(vid)}
                  style={{
                    fontSize: '0.8rem', padding: '8px', cursor: 'pointer', borderRadius: '6px', marginBottom: '4px',
                    color: currentVideo?.videoId === vid.videoId ? '#60a5fa' : '#d1d5db',
                    background: currentVideo?.videoId === vid.videoId ? 'rgba(96, 165, 250, 0.15)' : 'transparent',
                    borderLeft: currentVideo?.videoId === vid.videoId ? '3px solid #60a5fa' : '3px solid transparent',
                    whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                  onMouseOut={(e) => e.currentTarget.style.background = currentVideo?.videoId === vid.videoId ? 'rgba(96, 165, 250, 0.15)' : 'transparent'}
                >
                  <div style={{ fontWeight: 'bold' }}>{vid.title}</div>
                  <div style={{ fontSize: '0.65rem', color: '#9ca3af', marginTop: '2px' }}>{vid.artist}</div>
                </div>
              ))}
              {videos.length === 0 && (
                <div style={{ fontSize: '0.8rem', color: '#ef4444', padding: '8px' }}>動画が取得できませんでした</div>
              )}
            </div>
          </div>
        )}

        {!isExpanded && (
          <button 
            onClick={() => setIsExpanded(true)}
            style={{
              background: isPlaying ? '#3b82f6' : '#1f2937', 
              border: isPlaying ? '2px solid #60a5fa' : '2px solid #4b5563',
              color: '#fff', cursor: 'pointer', borderRadius: '50%',
              width: '36px', height: '36px', display: 'flex', justifyContent: 'center', alignItems: 'center',
              boxShadow: '0 4px 12px rgba(0,0,0,0.5)', transition: 'all 0.2s ease-in-out'
            }}
          >
            <Music size={22} color={isPlaying ? '#ffffff' : '#9ca3af'} />
          </button>
        )}

      </div>
    </>
  );
};