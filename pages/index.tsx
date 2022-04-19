import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>ScanIt!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className='flex justify-around w-screen text-lg font-semibold '>
        <div className='flex space-x-1 items-center'>
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3zm1 2v1h1V5h-1z" clip-rule="evenodd"></path><path d="M11 4a1 1 0 10-2 0v1a1 1 0 002 0V4zM10 7a1 1 0 011 1v1h2a1 1 0 110 2h-3a1 1 0 01-1-1V8a1 1 0 011-1zM16 9a1 1 0 100 2 1 1 0 000-2zM9 13a1 1 0 011-1h1a1 1 0 110 2v2a1 1 0 11-2 0v-3zM7 11a1 1 0 100-2H4a1 1 0 100 2h3zM17 13a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM16 17a1 1 0 100-2h-3a1 1 0 100 2h3z"></path></svg>
        
        <p className='text-xl'><Link href='/'>ScanIt</Link></p>
        </div>
        <div className='flex space-x-2'>
          <p className='hover:text-blue-600 focus:text-blue-600 cursor-pointer'><Link href='/scanqr'>Scan</Link></p>
          <p className='hover:text-blue-600 focus:text-blue-600 cursor-pointer'><Link href='/generate'>Generate</Link></p>
          <p className='hover:text-blue-600 focus:text-blue-600 cursor-pointer'><Link href='https://github.com/logan1x/'>Github</Link></p>
        </div>
      </nav>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
          ScanIt!
          </a>
        </h1>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
        <a
            href="https://nextjs.org/learn"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Scan QR &rarr;</h3>
            <p className="mt-4 text-xl">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>
          
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Generate QR &rarr;</h3>
            <p className="mt-4 text-xl">
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          

         
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
      <p>Developed By
        <a
          className="hover:text-blue-600 focus:text-blue-600 hover:underline font-semibold"
          href="https://logan1x.github.io"
          target="_blank"
          rel="noopener noreferrer"
        > Logan1x</a></p>
      </footer>
    </div>
  )
}

export default Home
