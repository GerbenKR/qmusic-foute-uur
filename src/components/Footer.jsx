import React from 'react';

export default function Footer() {
    return (
        <div className=" bg-q-carbon-gray text-white p-10 mt-12 flex items-center justify-center flex-wrap gap-10 ">
            <p className="text-[20px]">
                Created with ❤️ by{' '}
                <a className="text-q-red underline" target="_blank" href="https://gerbenkr.nl">
                    GerbenKr
                </a>
            </p>
            <p className="text-[20px]">
                Source code on{' '}
                <a className="text-q-red underline" target="_blank" href="https://github.com/GerbenKR/qmusic-foute-uur">
                    GitHub
                </a>
            </p>
            <p>Deze site is op geen enkele manier verbonden met Qmusic.</p>
        </div>
    );
}
