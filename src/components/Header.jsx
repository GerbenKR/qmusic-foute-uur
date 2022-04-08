import React from 'react';

import qmusicLogo from '../assets/images/qmusic-logo.svg';

export default function Header() {
    return (
        <div className="pt-3 text-white flex justify-center items-center text-center">
            <img className="w-[90px]" src={qmusicLogo} alt="" />
            <h1 className="text-6xl ml-5">Foute Uur</h1>
        </div>
    );
}
