
import Layout from "../../../../components/Layout"
import BotonMain from "../../../../components/BotonMain"
import AudioContainer from "../../../../components/AudioContainer"
import BloqueInicio from "../../../../components/BloqueInicio"
import Head from "next/head"
import Cuestionario from "../../../../components/Cuestionario"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "react-h5-audio-player/lib/styles.css";
import Image from "next/image"
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Link from "next/link"
import JsxParser from 'react-jsx-parser'
import ListaLinks from "../../../../components/ListaLinks"
import AdSense from 'react-adsense'

const settings = {
    showIndicators: false,
    showArrows: true,
    emulateTouch: true,
    showStatus: false,
    showThumbs: false,
    centerMode: false,
    infiniteLoop: true,
    showIndicators: true,
    preventMovementUntilSwipeScrollTolerance: true,
    swipeScrollTolerance: 60,
};

export default function Individual({ dataLec, dataCat, cats, contLec }) {

    const { leccion, preguntas, imagenes } = dataLec;

    const [lecturas, setLecturas] = useState(true)

    useEffect(() => {
        const c_s = dataCat.categoria[0].slug
        c_s === 'rd' ? setLecturas(true) : setLecturas(false)
    }, [])

    const { contenido } = contLec.contenido[0];

    let texto = ''

    contenido ?
        texto = contenido
            .replace(/<p><br><\/p>/g, '<div class="space"></div>')
            .replace(/<h3><br><\/h3>/g, '<div class="space"></div>')
            .replace(/<h2><br><\/h2>/g, '<div class="space"></div>')
            .replace(/ql-cursor/g, '')
            .replace(/<a/g, '<Link')
            .replace(/target="_blank">/g, '><a class="enlace">')
            .replace(/<\/a>/g, '</a></Link>')
            .replace(/<u><\/u>/g, '')
            .replace('<h2>┬íCompleta', '*--*<h2>┬íCompleta')
            .replace(' style="color: rgb(0, 0, 0);"', '')
        : ''

    texto === '<div class="space"></div>' ?
        texto = ''
        : ''

    const miTexto = texto.split("*--*");

    let indexLeccion
    dataCat.lecciones.map((data, index) => (
        data.id === leccion[0].id ? indexLeccion = index : ''
    ))
    const numLeccion = dataCat.lecciones.length - indexLeccion

    const intro = `
    <p>Welcome to class <strong> number ${numLeccion}</strong>
     of the <strong>"${dataCat.categoria[0].titulo} in Spanish"</strong> course.
     Visit all available courses <Link href={'/#courses'}><a>HERE.</a></Link>
     Classes include translation, audio and practice questions.</p>
     <div class="space"></div>`

    let textos = intro.concat(miTexto[0])

    const [slide, setSlide] = useState(0);
    const onChange = (item) => {
        setSlide(item)
    }

    const dynamicRoute = useRouter().asPath

    useEffect(() => {
        setSlide(0)
    }, [dynamicRoute])

    const data = [];
    const nextQ = [];
    const firstQ = [];
    for (let index = 0; index < dataCat.lecciones.length; index++) {
        if (dataCat.lecciones[index].id != leccion[0].id) {
            const element = dataCat.lecciones[index];
            data.push(element)
        } else {
            dataCat.lecciones[index + 1] != undefined ?
                nextQ.push(dataCat.lecciones[index + 1]) :
                ''
        }
    }
    firstQ.push(dataCat.lecciones[0]);
    const dataRel = data.slice(0, 3)

    return (
        <>
            <Layout>
                <Head>
                    <link rel="shortcut icon" href="/favicon.png" />
                    <title>{leccion[0].titulo_seo}</title>
                    <meta name="description" content={leccion[0].descripcion} />

                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                    <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet"></link>
                </Head>

                <div className="text-center">
                    <AdSense.Google
                        // lec-300x50-alto-idiom
                        client='ca-pub-3630578707238850'
                        slot='4698359263'
                        style={{
                            display: 'block',
                            height: 50 + 'px',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            marginTop: 12 + 'px',
                            textAlign: 'center'
                        }}
                        format=''
                        responsive='true'
                    />
                </div>

                <div className="lecs-titulo">
                    <h1>{leccion[0].titulo_seo}</h1>
                </div>

                <div className="text-center">
                    <AdSense.Google
                        // lec-full-idiom
                        client='ca-pub-3630578707238850'
                        slot='8138663402'
                        style={{
                            display: 'block',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            marginTop: 15 + 'px',
                            textAlign: 'center'
                        }}
                        format='auto'
                        responsive='true'
                    />
                </div>

                <BotonMain
                    titulo='Similar classes'
                    icono='fa-chevron-circle-left'
                    dir={`/en/${dataCat.categoria[0].slug}`}
                    bg='bg-secundario'
                />

                <div className="div-carousel-lec">
                    <Carousel {...settings} selectedItem={slide} onChange={onChange}>
                        {
                            imagenes.map(({ imagen }, id) => (
                                <div key={id} className="carousel-lec" >
                                    <Image
                                        src={`https://admin.idiomary.com/imagen/${imagen}`}
                                        alt={`${leccion[0].titulo_seo}`}
                                        width="85%"
                                        height="100%"
                                        layout="responsive"
                                        objectFit="cover"
                                        placeholder="blur"
                                        blurDataURL="/img/placeholder.webp"
                                        sizes="48vw"
                                        priority
                                    />
                                </div>
                            ))
                        }
                    </Carousel>
                </div>

                <div className="text-center">
                    <AdSense.Google
                        // lec-300x50-medio-idiom
                        client='ca-pub-3630578707238850'
                        slot='8779444197'
                        style={{
                            display: 'block',
                            height: 50 + 'px',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            marginTop: 5 + 'px',
                            textAlign: 'center'
                        }}
                        format=''
                        responsive='true'
                    />
                </div>

                {
                    lecturas ?
                        <Link href={`/en/${dataCat.categoria[0].slug}/${leccion[0].slug}/translation`}>
                            <a>
                                <div className={`btn btn-cuestionario bg-primario`}>
                                    <i className={`fas fa-edit`}></i>
                                    <p>Translate reading</p>
                                    <i className="fas fa-chevron-right"></i>
                                </div>
                            </a>
                        </Link>
                        :
                        ''
                }

                <Cuestionario
                    questions={preguntas}
                    nextQ={nextQ}
                    firstQ={firstQ}
                    valorInicial={0}
                >
                </Cuestionario>

                <AudioContainer
                    titulo={leccion[0].titulo}
                    audio={leccion[0].audio}
                />

                {(textos === '') ?
                    ''
                    :
                    (
                        <div>
                            <JsxParser components={{ Link }} jsx={`${textos}`} className="contenido" />
                        </div>
                    )
                }

                <BotonMain
                    titulo='Related classes'
                    icono='fa-grip-horizontal'
                    dir={`/en/${dataCat.categoria[0].slug}`}
                    bg='bg-secundario'
                />

                {
                    <div className="galeria-bloque-inicio" style={{ marginTop: -15 + 'px' }}>
                        {
                            dataRel.map(({ id, titulo, imagen, slug_cat, slug }) => (
                                <div key={id}>
                                    <BloqueInicio
                                        titulo={titulo}
                                        imagen={imagen}
                                        slug_cat={slug_cat}
                                        slug={slug}
                                    >
                                        <div style={{ height: '25px' }}></div>
                                    </BloqueInicio>
                                </div>
                            ))
                        }
                    </div>
                }

                <BotonMain
                    titulo='More Spanish courses'
                    icono='fa-grip-horizontal'
                    dir={`/#courses`}
                    bg='bg-primario'
                />

                <div className="div-lista-links">
                    {
                        cats.categorias.map(({ id, icono, slug, nivel, titulo }) => (
                            <div key={id}>
                                <ListaLinks
                                    icono={icono}
                                    nivel={nivel}
                                    titulo={titulo}
                                    slug={slug}
                                />
                            </div>
                        ))
                    }
                </div>

                <div className="text-center">
                    <AdSense.Google
                        // 300x50-footer-idiom-1
                        client='ca-pub-3630578707238850'
                        slot='8283887960'
                        style={{
                            display: 'block',
                            height: 50 + 'px',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            marginBottom: 15 + 'px',
                            textAlign: 'center'
                        }}
                        format=''
                        responsive='true'
                    />
                </div>
                <div className="text-center">
                    <AdSense.Google
                        // 300x50-footer-idiom-2
                        client='ca-pub-3630578707238850'
                        slot='5657724625'
                        style={{
                            display: 'block',
                            height: 50 + 'px',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            marginBottom: 15 + 'px',
                            textAlign: 'center'
                        }}
                        format=''
                        responsive='true'
                    />
                </div>

            </Layout>
        </>
    )
}

export async function getStaticPaths() {
    try {
        const res = await fetch('https://admin.idiomary.com/api/lecciones',
            {
                method: "GET",
                headers: {
                    "User-Agent": "*",
                    Accept: "application/json; charset=UTF-8",
                },
            })
        const data = await res.json()
        const paths = data.map(({ slug_cat, slug }) => ({
            params: {
                categoria: `${slug_cat}`,
                slug: `${slug}`,
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
        const resLec = await fetch(`https://admin.idiomary.com/api/lecciones/${params.categoria}/${params.slug}`
            ,
            {
                method: "GET",
                headers: {
                    "User-Agent": "*",
                    Accept: "application/json; charset=UTF-8",
                },
            })
        const dataLec = await resLec.json()

        const resCat = await fetch(`https://admin.idiomary.com/api/categoria/${params.categoria}`,
            {
                method: "GET",
                headers: {
                    "User-Agent": "*",
                    Accept: "application/json; charset=UTF-8",
                },
            }
        )
        const dataCat = await resCat.json()

        const resCats = await fetch('https://admin.idiomary.com/api/categorias',
            {
                method: "GET",
                headers: {
                    "User-Agent": "*",
                    Accept: "application/json; charset=UTF-8",
                },
            })
        const cats = await resCats.json()

        const resContLec = await fetch(`https://admin.idiomary.com/api/contenido/${params.categoria}/${params.slug}`,
            {
                method: "GET",
                headers: {
                    "User-Agent": "*",
                    Accept: "application/json; charset=UTF-8",
                },
            })
        const contLec = await resContLec.json()

        return {
            props: {
                dataLec,
                dataCat,
                cats,
                contLec
            },
            revalidate: 5, // In seconds
        }
    } catch (error) {
        console.log(error)
    }
}