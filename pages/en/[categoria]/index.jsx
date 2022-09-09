
import Layout from "../../../components/Layout"
import BotonMain from "../../../components/BotonMain"
import InfoCat from "../../../components/InfoCat"
import OnePostCat from "../../../components/OnePostCat"
import Head from "next/head"
import AdSense from 'react-adsense'
import JsxParser from 'react-jsx-parser'
import Link from "next/link"

export default function IndexCat({ dataCat, dataContCat }) {

    const { catcontenido } = dataContCat.contenido[0]
    let texto = ''

    catcontenido ?
        texto = catcontenido
            .replace(/<p><br><\/p>/g, '<div class="space"></div>')
            .replace(/ql-cursor/g, '')
            .replace(/<a/g, '<Link')
            .replace(/target="_blank">/g, '><a class="enlace">')
            .replace(/<\/a>/g, '</a></Link>')
        : ''

    texto === '<div class="space"></div>' ?
        texto = ''
        : ''

    return (

        <Layout>
            <Head>
                <link rel="icon" href="/favicon.png" />
                <title>{dataCat.categoria[0].titulo} in Spanish | Spanish Online Course</title>
                <meta name="description" content={dataCat.categoria[0].descripcion} />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            </Head>

            <AdSense.Google
                // cat-hero-idiom
                client='ca-pub-3630578707238850'
                slot='2730671479'
                style={{
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    textAlign: 'center'
                }}
                format='auto'
                responsive='true'
            />

            <InfoCat
                icono={dataCat.categoria[0].icono}
                titulo={dataCat.categoria[0].titulo}
                nivel={dataCat.categoria[0].nivel}
                descripcion={dataCat.categoria[0].descripcion}
            />

            <div className="text-center">
                <AdSense.Google
                    // cat-300x50-idiom
                    client='ca-pub-3630578707238850'
                    slot='2894323003'
                    style={{
                        display: 'block',
                        height: 50 + 'px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: 12 + 'px',
                        margitBottom: 12 + 'px',
                        textAlign: 'center'
                    }}
                    format=''
                    responsive='true'
                />
            </div>

            <div>
                <BotonMain
                    titulo='All lessons'
                    icono='fa-home'
                    dir='/#lessons'
                    bg='bg-primario'
                />
            </div>

            <div className="galeria-posts-cat">
                {
                    dataCat.lecciones.map(({ id, slug, slug_cat, titulo, imagen, audio }) => (
                        <div key={id}>
                            <OnePostCat
                                titulo={titulo}
                                imagen={imagen}
                                audio={audio}
                                slug={slug}
                                slug_cat={slug_cat}
                            />
                        </div>
                    ))
                }
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    try {
        const res = await fetch('https://admin.idiomary.com/api/categorias',
            {
                method: "GET",
                headers: {
                    "User-Agent": "*",
                    Accept: "application/json; charset=UTF-8",
                },
            })
        const data = await res.json()
        const paths = data.categorias.map(({ slug }) => ({
            params: {
                categoria: `${slug}`
            }
        }))
        return {
            paths,
            fallback: 'blocking',
            // fallback: false,
        }
    } catch (error) {
        console.log(error)
    }
}

export async function getStaticProps({ params }) {
    try {
        const resCat = await fetch(`https://admin.idiomary.com/api/categoria/${params.categoria}`,
            {
                method: "GET",
                headers: {
                    "User-Agent": "*",
                    Accept: "application/json; charset=UTF-8",
                },
            })
        const dataCat = await resCat.json()

        const resContCat = await fetch(`https://admin.idiomary.com/api/catcontenido/${params.categoria}`,
            {
                method: "GET",
                headers: {
                    "User-Agent": "*",
                    Accept: "application/json; charset=UTF-8",
                },
            })
        const dataContCat = await resContCat.json()

        return {
            props: {
                dataCat,
                dataContCat
            },
            revalidate: 5, // In seconds
        }
    } catch (error) {
        console.log(error)
    }
}