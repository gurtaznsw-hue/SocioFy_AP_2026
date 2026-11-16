import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, AlertCircle } from 'lucide-react';

/**
 * IntroVideo Component
 * A clean, refined video player for the SocioFy product introduction.
 * Displays the video directly without artificial browser chrome, badges, or mockups.
 * - Original 16:9 aspect ratio
 * - Clean rounded corners (16px) with subtle shadow
 * - Autoplay muted with playsInline
 * - Minimal, accessible play/pause and mute controls
 */
const IntroVideo = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Enforce muted for browser autoplay policy
    video.muted = true;
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // If browser policy prevents autoplay, user can tap play
          setIsPlaying(false);
        });
    }
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !isMuted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-[#E5E7EB] shadow-md group">
      {/* Direct Video Element */}
      <video
        ref={videoRef}
        src="/videos/sociofy-intro.mp4"
        autoPlay
        muted={isMuted}
        playsInline
        loop
        preload="metadata"
        onClick={togglePlay}
        onError={() => setHasError(true)}
        className="w-full h-full object-cover cursor-pointer"
        aria-label="SocioFy product introduction video"
      />

      {/* Error Fallback */}
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-slate-900 text-white">
          <AlertCircle className="w-8 h-8 text-amber-400 mb-2" />
          <p className="text-sm font-medium text-gray-200">Video unavailable</p>
          <p className="text-xs text-gray-400 mt-1">
            Please place the video at <code className="text-[#5277D9]">public/videos/sociofy-intro.mp4</code>
          </p>
        </div>
      )}

      {/* Minimal Accessible Play/Pause & Mute Controls Overlay */}
      {!hasError && (
        <>
          {/* Centered Play Button when paused */}
          {!isPlaying && (
            <button
              type="button"
              onClick={togglePlay}
              aria-label="Play video"
              className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-[#17233B]/80 hover:bg-[#17233B] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#5277D9] cursor-pointer"
            >
              <Play className="w-6 h-6 fill-white ml-0.5" />
            </button>
          )}

          {/* Discreet bottom corner controls bar */}
          <div className="absolute bottom-3 right-3 flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
              className="p-1.5 rounded-lg bg-black/60 hover:bg-black/80 text-white transition-colors focus:outline-none focus:ring-1 focus:ring-white cursor-pointer"
              title={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
            </button>

            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
              className="p-1.5 rounded-lg bg-black/60 hover:bg-black/80 text-white transition-colors focus:outline-none focus:ring-1 focus:ring-white cursor-pointer"
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-gray-300" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default IntroVideo;
