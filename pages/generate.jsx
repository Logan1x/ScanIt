import { useState } from 'react'
import QRCode from 'react-qr-code'

import Nav from '../component/Nav'

export default function generate() {
  const [text, setText] = useState('')
  return (
    <div>
      <Nav />
      <main className="mt-4 flex min-h-screen flex-col items-center py-2">
        <h1 className="py02 my-4 text-3xl">Generate QR</h1>
        <div className="flex flex-col items-center">
          <input
            type="text"
            className="my-2 my-4 rounded border-2 border-gray-400 p-2"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter Text/URL Here"
          />
        </div>

        {text && <QRCode value={text} />}
      </main>
    </div>
  )
}
