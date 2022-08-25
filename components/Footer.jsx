import Link from "next/link"
import Script from 'next/script'

export default function Footer() {
    return (
        <>
            <Script
                id="bootstrap-min-js"
                strategy="afterInteractive"
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js"
                integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc"
                crossOrigin="anonymous"
            />

            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossOrigin="anonymous">
            </link>

            <div className="text-center bg-light rounded mx-1 py-1 mb-2">
                <div className="container">
                        &copy; 2022 idiomary |
                        All rights reserved |
                        <Link href="/privacy">
                            <a className="text-info" > Privacy Policy <span className="text-secondary"> | </span></a>
                        </Link>

                        <Link href="/terms">
                            <a className="text-info" >Terms and Conditions <span className="text-secondary"> | </span></a>
                        </Link>

                        <Link href="/cookies">
                            <a className="text-info" >Cookie Policy</a>
                        </Link>
                </div>
            </div>
        </>
    )
}
