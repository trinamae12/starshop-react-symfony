import React from "react";

const Sidebar = () => {
    return (
        <aside
        className="pb-8 lg:pb-0 lg:w-[411px] shrink-0 lg:block lg:min-h-screen text-white transition-all overflow-hidden px-8 border-b lg:border-b-0 lg:border-r border-white/20"
    >
        <div className="flex justify-between mt-11 mb-7">
            <h2 className="text-[32px] font-semibold">My Ship Status</h2>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 448 512">
                {/** Font Awesome Pro 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc.*/}
                <path fill="#fff" d="M384 96c0-17.7 14.3-32 32-32s32 14.3 32 32V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V96zM9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L109.3 224 288 224c17.7 0 32 14.3 32 32s-14.3 32-32 32l-178.7 0 73.4 73.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-128-128z"/></svg>
            </button>
        </div>

        <div>
            <div className="flex flex-col space-y-1.5">
                <div className="rounded-2xl py-1 px-3 flex justify-center w-32 items-center" style={{ background: 'rgba(255, 184, 0, .1)' }}>
                    <div className="rounded-full h-2 w-2 bg-amber-400 blur-[1px] mr-2"></div>
                    <p className="uppercase text-xs">in progress</p>
                </div>
                {/* <h3 className="tracking-tight text-[22px] font-semibold">
                    <a className="hover:underline" href="{{ path('app_starship_show', {
                        id: myShip.id
                    }) }}">Ship Name</a>
                </h3> */}
                <h3 className="tracking-tight text-[22px] font-semibold">
                    <a className="hover:underline" href="#">Ship Name</a>
                </h3>
            </div>
            <div className="flex mt-4">
                <div className="border-r border-white/20 pr-8">
                    <p className="text-slate-400 text-xs">Captain</p>
                    <p className="text-xl">Ship Captain</p>
                </div>

                <div className="pl-8">
                    <p className="text-slate-400 text-xs">Class</p>
                    <p className="text-xl">Ship Class</p>
                </div>
            </div>
        </div>
    </aside>
    );
}

export default Sidebar;