import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">

    <span className="isolate inline-flex rounded-md shadow-sm items-center pb-8">
      <button
        type="button"
        className="relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        Go to the past
      </button>
      <button
        type="button"
        className="relative -ml-px inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        Go to the present
      </button>
        <a href='/future'>
      <button
        type="button"
        className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        Go to the future
      </button>
  </a>
    </span>


        <iframe src="https://www.shpeuhchapter.com/" className='w-full' height='800' frameborder="0" allowfullscreen></iframe>
      </main>
    </>
  );
}
