'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {path: '/', about: 'Portafolio'},
    {path: '/precios', about: 'Precios'},
]

export const ActiveLink = () => {
    const pathname = usePathname();

    return (
        <>
            {
                links.map((item) => (
                    <Link
                        key={item.path}
                        href={item.path}
                        className={`${(pathname === item.path) ? 
                                        `uppercase underline underline-offset-8 decoration-4 decoration-red-900` :
                                        `uppercase
                                         hover:underline underline-offset-8 decoration-4 decoration-orange-600
                                         active:decoration-gray-300`}`}
                    >
                        {item.about}
                    </Link>
                ))
            }
        </>
    )
}
