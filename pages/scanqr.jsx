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
      console.log(result?.text)
      setQrtext(result?.text)
    }
    if (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <Nav />
      <main className="flex min-h-screen flex-col items-center justify-center py-2 ">
        <h1 className="text-3xl ">Scan QR</h1>
        <div>
          {qrtext.length > 0 ? (
            <p className="mx-auto mt-2 w-3/4 pt-2 text-center text-xl">
              <span className="font-semibold">Scanned Text: </span>

              {validURL(qrtext) ? (
                <a href={qrtext} className=" text-blue-600">
                  {qrtext}
                </a>
              ) : (
                <span>{qrtext}</span>
              )}
            </p>
          ) : (
            ''
          )}
        </div>
        <div className="mx-2 w-full md:mx-auto md:w-1/2 ">
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
