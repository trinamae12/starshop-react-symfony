import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function ShipDetails() {
    const { id } = useParams();
    const [ship, setShip] = useState([]);

    const fetchShip = async (signal) => {
        try {
            const response = await fetch(`https://localhost/api/starships/${id}`, { signal })
            const data = await response.json();
            setShip(data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        fetchShip(signal);

        return () => {
            controller.abort();
        };
    }, []);
    
  return (
    <>
    <div className="my-4 px-8">
    {/* <a className="bg-white hover:bg-gray-200 rounded-xl p-2 text-black" href={{ path('app_main_homepage') }}> */}
    <Link className="bg-white hover:bg-gray-200 rounded-xl p-2 text-black" to="/">
        <svg className="inline text-black" xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">{/**<!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->*/    }<path fill="#000" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
        Back
    </Link>
</div>
<div className="md:flex justify-center space-x-3 mt-5 px-4 lg:px-8">
    <div className="flex justify-center">
        <img className="max-h-[300px] md:max-h-[500px]" src="/images/purple-rocket.png" alt="purple ship launching" />
    </div>
    <div className="space-y-5">
        <div className="mt-8 max-w-xl mx-auto">
            <div className="px-8 pt-8">
                <div className="rounded-2xl py-1 px-3 flex justify-center w-32 items-center bg-amber-400/10">
                    <div className="rounded-full h-2 w-2 bg-amber-400 blur-[1px] mr-2"></div>
                    <p className="uppercase text-xs">{ship.status}</p>
                </div>

                <h1 className="text-[32px] font-semibold border-b border-white/10 pb-5 mb-5">
                    {ship.name}
                </h1>
                <h4 className="text-xs text-slate-300 font-semibold mt-2 uppercase">Spaceship Captain</h4>
                <p className="text-[22px] font-semibold">{ship.captain}</p>

                <h4 className="text-xs text-slate-300 font-semibold mt-2 uppercase">Class</h4>
                <p className="text-[22px] font-semibold">{ship.class}</p>

                <h4 className="text-xs text-slate-300 font-semibold mt-2 uppercase">Ship Status</h4>
                <p className="text-[22px] font-semibold">30,000 lys to next service</p>
            </div>
        </div>
    </div>
</div>
</>
  )
}

export default ShipDetails