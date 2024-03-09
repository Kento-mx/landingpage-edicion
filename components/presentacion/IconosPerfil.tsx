import Image from "next/image";
import Logo1 from '@/public/Logo1.png';
import Logo2 from '@/public/Logo2.png';
import style from '@/components/presentacion/presentacion.module.css';

export const IconosPerfil = () => {
  return (
    <div className={`flex justify-center items-center grow 
                    ${style.backgroundColorRed}`}>
        <div className="flex relative"
        >
            <Image
                className={`w-full h-full ${style.logo1}`}
                src={Logo1}
                width={150}
                height={150}
                alt="Logo1"
            />
            <Image 
                className={`w-full h-full ${style.logo2}`}
                src={Logo2}
                width={150}
                height={150}
                alt="Logo1"
            />
        </div>
    </div>
  )
}
