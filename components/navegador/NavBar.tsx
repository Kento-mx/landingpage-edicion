import { Roboto } from 'next/font/google'
import { ActiveLink } from './ActiveLink';

const roboto = Roboto({subsets: ["latin"], weight: ["500"]});

export const NavBar = () => {

  return (
    <nav
        className={`flex justify-center items-center top-0 gap-7 w-4/5 h-10 ${roboto.className} md:text-lg lg:text-xl `}
    >
        <ActiveLink />
    </nav>
  )
}
