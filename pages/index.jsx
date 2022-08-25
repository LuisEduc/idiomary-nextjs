import Layout from "../components/Layout"
import BloqueInicio from "../components/BloqueInicio"
import BotonMain from "../components/BotonMain"
import TituloBloque from "../components/TituloBloque"
import BloqueCatInicio from "../components/BloqueCatInicio"
import IconoSuperior from "../components/IconoSuperior"
import Head from "next/head"
import CookieConsent from "react-cookie-consent"
import AdSense from 'react-adsense'
import { useState, useEffect } from 'react'

export default function Index({ bloques, cats, buscar }) {

    return (
        <Layout home buscar={buscar}>
            <Head>
                <link rel="icon" href="/favicon.png" />
                <title>Spanish Online Course / idiomary</title>
                <meta name="description" content="Lecciones de inglés básico todos los días. En este curso en línea para principiantes aprende a hablar, leer y escribir en inglés gratis con nuestras publicaciones diarias, perfectas para niños, adolescentes y adultos." />
            </Head>

            <div id="lessons"></div>

            {
                bloques.secciones.map(({ id, icono, titulo, color, bg, data }) => (
                    <div key={id}>
                        <TituloBloque
                            titulo={titulo}
                            icono={icono}
                            bg="bg-primario"
                        />
                        <div className="galeria-bloque-inicio">
                            {
                                data.map(({ id, titulo, imagen, slug_cat, slug }) => (
                                    <div key={id}>
                                        <BloqueInicio titulo={titulo} imagen={imagen} slug_cat={slug_cat} slug={slug}>
                                            <IconoSuperior
                                                icono={icono}
                                                color={color}
                                                bg={bg}
                                            />
                                        </BloqueInicio>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }

            <div id="courses"></div>

            <TituloBloque
                titulo='All courses'
                icono='fa-th-list'
                bg='bg-primario'
            />

            <div className="galeria-cat">
                {
                    cats.categorias.map(({ id, icono, slug, nivel, titulo, descripcion }) => (
                        <div key={id}>
                            <BloqueCatInicio
                                icono={icono}
                                nivel={nivel}
                                titulo={titulo}
                                descripcion={descripcion}
                                slug={slug}
                            />
                        </div>
                    ))
                }
            </div>

            <CookieConsent
                location="bottom"
                buttonText="I agree"
                cookieName="CookieIXD"
                style={{ background: "#f6f6f6" }}
                buttonStyle={{
                    background: "#ff7c4b",
                    color: "#f6f6f6",
                    fontSize: "13px",
                    borderRadius: "5px",
                    margin: "0px 15px 10px"
                }}
                expires={150}
            >
                <span style={{ fontSize: "14px", color: "#232d39" }}>We use cookies. By using our website you agree to our use of cookies.</span>
            </CookieConsent>
        </Layout>

    )
}

export async function getStaticProps() {
    try {
        const resBloques = await fetch('https://admin.idiomary.com/api/inicio',
            {
                method: "GET",
                headers: {
                    "User-Agent": "*",
                    Accept: "application/json; charset=UTF-8",
                },
            })
        const bloques = await resBloques.json()
        const resCats = await fetch('https://admin.idiomary.com/api/categorias',
            {
                method: "GET",
                headers: {
                    "User-Agent": "*",
                    Accept: "application/json; charset=UTF-8",
                },
            })
        const cats = await resCats.json()
        const resBuscar = await fetch(`https://admin.idiomary.com/api/buscar`,
            {
                method: "GET",
                headers: {
                    "User-Agent": "*",
                    Accept: "application/json; charset=UTF-8",
                },
            })
        const buscar = await resBuscar.json()
        return {
            props: {
                bloques,
                cats,
                buscar,
            },
            revalidate: 5, // In seconds
        }
    } catch (error) {
        console.log(error)
    }
}
