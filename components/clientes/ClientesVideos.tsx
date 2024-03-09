'use client';

import { Streamers } from "./Streamers";
import json from "@/streamersVideos.json";
import { useState } from "react";

export const ClientesVideos = () => {
    
    const [streamerSelect, setStreamerSelect] = useState<string>('sin6n');
    
    const [urlsClientes] = json.filter( element => element.name === streamerSelect);
    
    //Al tener caracteres especiales, lo pongo con comillas y asigno el valor
    //a la variable srcVideos
    const {'src/videos': srcVideos} = urlsClientes;

    return (
        <div className="flex flex-col w-3/4 divide-y-4 divide-red-900 mt-12 gap-8">
            
            <div className="flex flex-col items-center">
                <div className="flex justify-center titulos font-semibold decoration-4 decoration-dashed text-4xl mb-5 sm:text-5xl sm:mb-10">
                    Streamers
                </div>
                <div className="w-full">
                    <Streamers streamerSelect={setStreamerSelect}/>
                </div>
            </div>
            <div className="flex flex-col gap-10 items-center p-5 sm:p-10">
                {
                    srcVideos.map(video => (
                        <iframe
                            className="w-full aspect-video rounded-lg sm:w-3/4 h-3/4"
                            key={video} 
                            width="560" 
                            height="315" 
                            src={video} 
                            title="YouTube video player"
                            allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
                        </iframe>
                    ))
                }
            </div>
        </div>
    )
}
