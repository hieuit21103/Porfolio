import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import { MusicAssets } from '../assets/music';

export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(true);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play().catch((error) => {
                console.log("Autoplay prevented:", error);
                setIsPlaying(false);
            });
        }
    }, []);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="fixed bottom-8 right-8 bg-white/10 backdrop-blur-lg p-4 rounded-2xl shadow-2xl border border-white/20">
            <div className="relative">
                <div 
                    className={`w-20 h-20 rounded-full overflow-hidden relative ${isPlaying ? 'animate-spin' : ''} 
                    shadow-[0_0_20px_rgba(0,0,255,0.5)] group`}
                    style={{ 
                        animationDuration: '6s', 
                        animationTimingFunction: 'linear', 
                        animationIterationCount: 'infinite' 
                    }}
                >
                    <img 
                        src={MusicAssets.cover} 
                        alt="Album Cover" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent"></div>
                    <div className="w-6 h-6 bg-black rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                        border-2 border-blue-400 shadow-[0_0_10px_rgba(0,0,255,0.3)]"></div>
                </div>
                
                <button
                    onClick={togglePlay}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                    bg-black/50 backdrop-blur-sm p-2.5 rounded-full hover:bg-black/70 
                    transition-all duration-300 border border-white/20
                    hover:scale-110 active:scale-95 z-10"
                >
                    {isPlaying ? 
                        <Pause size={20} className="text-white drop-shadow" /> : 
                        <Play size={20} className="text-white drop-shadow ml-0.5" />
                    }
                </button>

                <audio ref={audioRef} loop>
                    <source src={MusicAssets.music} type="audio/mp3" />
                    Your browser does not support the audio element.
                </audio>
            </div>
        </div>
    );
}
