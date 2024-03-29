import { useEffect, useState } from 'react';
import SockJS from 'sockjs-client';

import Header from './components/Header';
import NotActive from './components/NotActive';
import Active from './components/Active';
import Footer from './components/Footer';

function App() {
    const [active, setActive] = useState(false);
    const [data, setData] = useState(null);
    const [connected, setConnected] = useState(false);

    useEffect(() => {
        const websocket = new SockJS('https://socket.qmusic.nl/api/');

        websocket.onopen = () => {
            console.log('[websocket] connected to the websocket server');
            websocket.send(JSON.stringify({ action: 'join', backlog: 1, id: 1, sub: { action: 'change', entity: 'mgp', station: 'qmusic_nl' } }));
            setConnected(true);
        };

        websocket.onmessage = (data) => {
            console.log('[websocket] recieved message');
            const root = JSON.parse(data.data);
            const body = JSON.parse(root.data).data;

            if (body.running == false) {
                setActive(false);
                setData(null);
                return;
            }

            setActive(true);

            /* only for development */
            // body.songs = [
            //     { id: 1363709, title: "Doin' Ittt", artist: 'LL COOL J', image_hash: '/9/43/b3/03/29723/R-247990-1236334901.jpeg', score: { real: 113, percentage: 61.33333333333334 } },
            //     { id: 1363711, title: 'Return Of The Mack', artist: 'MARK MORRISON', image_hash: '/8/8b/a8/57/16409/mzi.cxptcevb.600x600-75.jpg', score: { real: 148, percentage: 80.0 } },
            // ];

            setData(body);
        };

        websocket.onclose = () => {
            console.log('[websocket] connection closed');
            setConnected(false);
        };
    }, []);

    return (
        <div className="bg-q-red h-full">
            {connected == true && <p className="lg:absolute lg:ml-10 lg:mt-10 lg:inline-block lg:p-3 text-white bg-q-carbon-gray p-3 text-center ">Status: verbonden</p>}
            {connected == false && <p className="lg:absolute lg:ml-10 lg:mt-10 lg:inline-block lg:p-3 text-red-600 bg-q-carbon-gray p-3 text-center ">Status: niet verbonden</p>}
            <Header />

            {active == true && data != null && <Active data={data} />}
            {active == false && <NotActive />}

            <br />

            <Footer />
        </div>
    );
}

export default App;
