import React, { useState } from 'react';

export default function TrackHolder({ track }) {
    if (!track) return <p>Er gaat iets fout..</p>;

    return (
        <div className="text-left">
            <img className="w-full" src={'https://static1.qmusic.medialaancdn.be/site/w480' + track.image_hash} />
            <h1 className="text-4xl mt-2">{track.title}</h1>
            <h2 className="text-[20px]">{track.artist}</h2>
            <div className="mt-3 w-full h-10">
                {Math.round(track.score.percentage) != 100 && (
                    <div className="bg-q-carbon-gray h-full flex items-center justify-center" style={{ width: track.score.percentage + '%' }}>
                        {Math.round(track.score.percentage)}% ({track.score.real})
                    </div>
                )}

                {Math.round(track.score.percentage) == 100 && (
                    <div className="bg-green-500 h-full flex items-center justify-center" style={{ width: track.score.percentage + '%' }}>
                        {Math.round(track.score.percentage) == 100 && <p>GEWONNEN! ({track.score.real})</p>}
                    </div>
                )}
            </div>
        </div>
    );
}
