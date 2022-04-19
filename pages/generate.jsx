import { useState } from 'react'
import QRCode from 'react-qr-code'

export default function generate() {
  const [text, setText] = useState('')
  return (
    <div>
      <input
        type="text"
        className="border border-gray-400 p-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {text && <QRCode value={text} />}
      {/* <QRCode value="https://www.google.com" size={256} /> */}
    </div>
  )
}
