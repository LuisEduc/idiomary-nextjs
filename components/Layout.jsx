import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'

export default function Layout({ children, home, buscar }) {

    const router = useRouter();

    useEffect(() => {

        const handleRouteChange = (url) => {
            NProgress.start()
        };

        router.events.on("routeChangeStart", handleRouteChange);
        router.events.on("routeChangeComplete", () => NProgress.done());
        return () => {
            router.events.off("routeChangeStart", handleRouteChange);
        };

    }, [])

    return (
        <div>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Suez+One&display=swap" rel="stylesheet" />
            </Head>

            <Navbar />
            <header>
                {home ? (
                    <Hero buscar={buscar} />
                ) : ''}
            </header>

            <main>
                {children}
            </main>

            <Footer />
        </div>
    )
}

// Si no se envia la informacion meta
Layout.defaultProps = {
    title: "Next.js | Mi sitio web",
    description: "Descripción de mi sitio web"
}