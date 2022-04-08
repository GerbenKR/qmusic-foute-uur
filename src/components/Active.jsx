import React from 'react';

import TrackHolder from './TrackHolder';

export default function Active({ data }) {
    return (
        <>
            {data != null && (
                <div className="mt-5 mx-auto w-[80%] xl:w-[40%] text-white text-center">
                    <h1 className="text-[25px]">
                        {data.time_left} seconden ({data.total_time} seconden)
                    </h1>
                    <div className="mt-3 flex gap-5">
                        <div className="w-full">
                            <TrackHolder track={data.songs[0]} />
                        </div>
                        <div className="w-full">
                            <TrackHolder track={data.songs[1]} />
                        </div>
                    </div>
                    <div className="mt-5">
                        <h1 className="text-[25px]">Totaal aantal stemmen: {data.songs[0].score.real + data.songs[1].score.real}</h1>
                        <h1 className="text-[25px]">{Math.round((data.songs[0].score.real + data.songs[1].score.real) / (data.total_time - data.time_left))} stemmen per seconde</h1>
                    </div>
                </div>
            )}
        </>
    );
}
