import { useState } from 'react'
import QRCode from 'react-qr-code'

import Nav from '../component/Nav'

export default function generate() {
  const [text, setText] = useState('')
  return (
    <div>
      <Nav />
      <main>
        <input
          type="text"
          className="border border-gray-400 p-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {text && <QRCode value={text} />}
        {/* <QRCode value="https://www.google.com" size={256} /> */}
      </main>
    </div>
  )
}
