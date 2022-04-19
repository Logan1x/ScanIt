import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import Nav from '../component/Nav'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>ScanIt!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <Link href="/">
            <a className="text-blue-600">ScanIt!</a>
          </Link>
        </h1>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <Link href="/scanqr">
            <a className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
              <h3 className="text-2xl font-bold">Scan QR &rarr;</h3>
              <p className="mt-4 text-xl">
                Scan a QR code to get the data from the QR code.
              </p>
            </a>
          </Link>

          <Link href="/generate">
            <a className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
              <h3 className="text-2xl font-bold">Generate QR &rarr;</h3>
              <p className="mt-4 text-xl">
                Generate a QR code with the data you want to store.
              </p>
            </a>
          </Link>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <p>
          Developed By
          <a
            className="font-semibold hover:text-blue-600 hover:underline focus:text-blue-600"
            href="https://logan1x.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            Logan1x
          </a>
        </p>
      </footer>
    </div>
  )
}

export default Home
