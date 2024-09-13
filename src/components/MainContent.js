import React from "react";
import Sidebar from "./sidebar";

const MainContent = () => {
    return (
        <main className="flex flex-col lg:flex-row">
            <Sidebar />
        <div className="px-12 pt-10 w-full">
            <h1 className="text-4xl font-semibold mb-8">
                Ship Repair Queue
            </h1>
            <button>Add new ship</button>

            <div className="space-y-5">
                {/* {{<!-- start ship item -->}} */}
                    <div className="bg-[#16202A] rounded-2xl pl-5 py-5 pr-11 flex flex-col min-[1174px]:flex-row min-[1174px]:justify-between">
                        <div className="flex justify-center min-[1174px]:justify-start">
                            {/* <img className="h-[83px] w-[84px]" src="{{ asset(ship.statusImageFileName) }}" alt="Status: {{ ship.statusString }}" />*/}
                            <img className="h-[83px] w-[84px]" src="/images/status-complete.png" alt="Status: Complete" />
                            <div className="ml-5">
                                <div className="rounded-2xl py-1 px-3 flex justify-center w-32 items-center bg-amber-400/10">
                                    <div className="rounded-full h-2 w-2 bg-amber-400 blur-[1px] mr-2"></div>
                                    <p className="uppercase text-xs text-nowrap">Ship Status</p>
                                </div>
                                <h4 className="text-[22px] pt-1 font-semibold">
                                    <a
                                        className="hover:text-slate-200"
                                        // href="{{ path('app_starship_show', { id: ship.id }) }}"
                                        href="#"
                                    >Ship Name</a>
                                </h4>
                            </div>
                        </div>
                        <div className="flex justify-center min-[1174px]:justify-start mt-2 min-[1174px]:mt-0 shrink-0">
                            <div className="border-r border-white/20 pr-8">
                                <p className="text-slate-400 text-xs">Captain</p>
                                <p className="text-xl">Ship Captain</p>
                            </div>

                            <div className="pl-8 w-[100px]">
                                <p className="text-slate-400 text-xs">Class</p>
                                <p className="text-xl">Ship Class</p>
                            </div>
                        </div>
                    </div>
                {/** end ship item */}
            </div>

            <p className="text-lg mt-5 text-center md:text-left">
                Looking for your next galactic ride?
                {/* <a href="#" className="underline font-semibold">Browse the {{ ships|length * 10 }} starships for sale!</a> */}
                <a href="#" className="underline font-semibold">Browse the 10 starships for sale!</a>
            </p>
        </div>
    </main>
    );
}

export default MainContent;