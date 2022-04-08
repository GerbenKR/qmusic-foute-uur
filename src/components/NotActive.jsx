import React from 'react';

export default function NotActive() {
    return (
        <div className="container mx-auto mt-8 text-center">
            <h1 className="text-white text-2xl">Het stem systeem is momenteel niet actief!</h1>

            <h3 className="text-white text-2xl font-medium mt-10">Screenshot:</h3>
            <img className="inline w-[600px] border-2 mt-2" src="https://i.gerbenkr.nl/images/b6wdzjqy8679.png" />
        </div>
    );
}
