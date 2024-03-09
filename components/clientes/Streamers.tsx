'use client';

import Image, { StaticImageData } from "next/image"
import { useState } from "react";
import sin6n from '@/public/streamers/sin6n.jpg';
import erick from '@/public/streamers/erick.jpg';
import komanche from '@/public/streamers/komanche.jpg';

interface Cliente {
    name: string,
    src: StaticImageData,
    state: Boolean,
}

export const Streamers = ( {streamerSelect} : 
                            {streamerSelect : React.Dispatch<React.SetStateAction<string>>}) => {
    
    //Crear un hook para retornar el arreglo de objetos que use a continuacion
    const [clientes, setClientes] = useState<Cliente[]>([
        {name: 'komanche', src: komanche, state: false},
        {name: 'sin6n', src: sin6n, state: true},
        {name: 'erick', src: erick, state: false},
    ]);

    const onHandleStreamer = ( selectName : string) => {
        
        setClientes(previewClientes =>
            previewClientes.map(cliente => ({
                ...cliente,
                //Si resulta ser el mismo nombre, dara un true
                //Si no, dara false
                state: cliente.name === selectName,
            }))
        );
        
        streamerSelect(selectName);
    }

    return (
        <>
            <div className="flex justify-center w-full sm:gap-10">
               {
                clientes.map((cliente) => (
                    <Image
                        className={`scale-75 rounded-full cursor-pointer min-w-20
                                    transition-all ease-in delay-100
                                    saturate-0
                                    ${cliente.state === true ?
                                     'saturate-100 border-2 border-red-900 lg:scale-105'
                                    :
                                     'hover:saturate-50'}`}
                        key={cliente.name}
                        src={cliente.src}
                        width={100}
                        height={100}
                        alt="icono de cliente"
                        onClick={() => onHandleStreamer(cliente.name)}
                    />
                ))
               }
            </div>
        </>
    )
}
