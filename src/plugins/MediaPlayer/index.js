
// React
import React from 'react';

// Local
import Props from './props';
import Settings from './settings';
import MediaPlayer from './component';


// Plugin Details
MediaPlayer.craft = {
    name: "media-player",
    displayName: "Media Player",
    description: 'A media player component that can be used to play videos, audio, and images.',
    props: Props,
    related: {
        sidebar: Settings,
    },
};

export default MediaPlayer;