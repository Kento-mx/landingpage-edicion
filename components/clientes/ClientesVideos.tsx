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
        <div className="border border-blue-300 flex flex-col w-3/4 divide-y-4 divide-red-900 mt-12 gap-8">
            
            <div className="flex flex-col items-center">
                <div className="titulos font-semibold text-5xl mb-10 decoration-4 decoration-dashed">
                    Streamers / Clientes
                </div>
                <div>
                    <Streamers streamerSelect={setStreamerSelect}/>
                </div>
            </div>
            <div className="flex flex-col gap-10 items-center p-10">
                {
                    srcVideos.map(video => (
                        <iframe
                            className="w-3/4 h-3/4 aspect-video rounded-lg"
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
