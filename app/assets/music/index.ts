import albumCover from './album-cover.jpg';
import backgroundMusic from './background-music.mp3';

export const MusicAssets = {
    cover: albumCover,
    music: backgroundMusic
} as const;

export{
    albumCover,
    backgroundMusic
}