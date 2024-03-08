import Link from "next/link"

export const PriceCardStandar = () => {
  return (
    <div className="w-full max-w-sm p-4 rounded-lg shadow-2xl shadow-red-800 sm:p-8 bg-stone-900 border border-red-600">
        <h5 className="mb-4 text-xl font-medium text-gray-300">Plan Estandar</h5>
        <div className="flex items-baseline text-white">
          <span className="text-3xl font-semibold">$</span>
          <span className="text-5xl font-extrabold tracking-tight">50</span>
          <span className="ms-1 text-xl font-normal text-gray-400">/video</span>
        </div>
      <ul role="list" className="space-y-5 my-7">
        <li className="flex items-center">
          <svg className="flex-shrink-0 w-4 h-4 text-red-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
          </svg>
          <span className="text-base font-normal leading-tight text-gray-400 ms-3">Video recibido de 2hr maxima de duracion</span>
        </li>
        <li className="flex items-center">
          <svg className="flex-shrink-0 w-4 h-4 text-red-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
          </svg>
          <span className="text-base font-normal leading-tight text-gray-400 ms-3">Video finalizado de 8-15 minutos</span>
        </li>
        <li className="flex">
          <svg className="flex-shrink-0 w-4 h-4 text-red-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
          </svg>
          <span className="text-base font-normal leading-tight text-gray-400 ms-3">Zooms, efectos de sonido y musica de fondo</span>
        </li>
        <li className="flex">
          <svg className="flex-shrink-0 w-4 h-4 text-red-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
          </svg>
          <span className="text-base font-normal leading-tight text-gray-400 ms-3">Comunicacion por twitter, discord o whatsapp</span>
        </li>
        <li className="flex">
          <svg className="flex-shrink-0 w-4 h-4 text-red-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
          </svg>
          <span className="text-base font-normal leading-tight text-gray-400 ms-3">Subtitulos</span>
        </li>
        <li className="flex">
          <svg className="flex-shrink-0 w-4 h-4 text-red-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
          </svg>
          <span className="text-base font-normal leading-tight text-gray-400 ms-3">Integrar memes</span>
        </li>
        <li className="flex">
          <svg className="flex-shrink-0 w-4 h-4 text-red-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
          </svg>
          <span className="text-base font-normal leading-tight text-gray-400 ms-3">Uso de imagenes/videos de referencia</span>
        </li>
      </ul>
      <Link href={`https://twitter.com/kento_mx`} target="_blank">
        <button type="button" className="text-white bg-red-600 hover:bg-red-700 focus:ring-2 focus:outline-none focus:ring-red-100 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Contacto</button>
      </Link>
    </div>

  )
}
