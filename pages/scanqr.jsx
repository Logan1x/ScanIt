import { useState } from 'react'
import { QrReader } from 'react-qr-reader'

import Nav from '../component/Nav'

export default function scanqr() {
  const [qrtext, setQrtext] = useState('')
  console.log(qrtext)

  function validURL(str) {
    var pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
      'i'
    ) // fragment locator
    return !!pattern.test(str)
  }

  const handleScan = (result, error) => {
    if (result) {
      setQrtext(result?.text)
    }
    if (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <Nav />
      <main>
        <h1>Scan QR</h1>
        {validURL(qrtext) ? (
          <a href={qrtext}>{qrtext}</a>
        ) : (
          <p className="text-3xl">{qrtext}</p>
        )}
        <div className="mx-auto w-1/2">
          <QrReader
            onResult={(result, error) => handleScan(result, error)}
            constraints={{ facingMode: 'environment' }}
            style={{ width: '40%', height: '40%' }}
          />
        </div>
      </main>
    </div>
  )
}
