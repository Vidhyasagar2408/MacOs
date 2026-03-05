import React from 'react';
import MacWindow from './MacWindow';
import './spotify.scss';
const spotify = ({ windowName, setWindowState }) => {
  return (
    <MacWindow windowName={windowName} setWindowState={setWindowState} width='20vw' height='60vh'>
        <div className="spotify-window">
                <iframe data-testid="embed-iframe" style={{borderRadius: "0px"}} src="https://open.spotify.com/embed/album/0Rkv5iqjF2uenfL0OVB8hg?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
    </MacWindow>
  );
};

export default spotify;