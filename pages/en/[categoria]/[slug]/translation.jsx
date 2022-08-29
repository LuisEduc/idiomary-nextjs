
import ReactDiffViewer, { DiffMethod } from 'react-diff-viewer';
import { useState, useEffect, useRef } from 'react'
import Layout from '../../../../components/Layout';
import BotonMain from '../../../../components/BotonMain';
import Link from 'next/link';
import Head from 'next/head';

export default function Traduccion({ contLec, slug_categoria, slug_leccion }) {

    let refTextArea = useRef()

    const { contenido } = contLec.contenido[0];

    let texto = contenido
        .replace(/ style="color((.|\n)*?);"/g, '')
        .replace(/<em> <\/em((.|\n)*?)>/g, '')
        .replace(/<strong><em><span class="ql-cursor((.|\n)*?)strong>/g, '')
        .replace(/<span class="ql-cursor((.|\n)*?)span>/g, '')
        .replace('<h2>', '*--*')
        .replace('</h2>', '*--*')
        .replace(/<p><strong><em>/g, '*--*')
        .replace(/<\/em><\/strong><\/p><p><em>/g, '*--*')
        .replace('</em></p>', '*--*')

    const miTexto = texto.split("*--*")
    const textoIng = miTexto[3]
    const textoEsp = miTexto[4]

    const [message, setMessage] = useState('');
    const [diferencia, setDiferencia] = useState(false);
    const [resultado, setResultado] = useState('Traducción');

    const handleChange = event => {
        setMessage(event.target.value);
        setDiferencia(false)
    };

    const handleClick = event => {
        event.preventDefault();
        if (textoIng === message) {
            setResultado('Correct translation')
            setDiferencia(true)
        } else if (message === '') {
            refTextArea.current.placeholder = 'Type something...'
        } else {
            setResultado('There are errors')
            setDiferencia(true)
        }
    };

    const auto_grow = () => {
        refTextArea.current.style.height = "5px";
        refTextArea.current.style.height = (refTextArea.current.scrollHeight) + "px";
    }

    const newStyles = {
        variables: {
            light: {
                wordRemovedBackground: '#fff',
                wordAddedBackground: '#fdb8c0',
                wordRemovedBackground: '#fdb8c0',
                removedBackground: '#e6ffed',
                addedBackground: '#fff',
            }
        },
    };

    return (

        <Layout>

            <Head>
                <link rel="shortcut icon" href="/favicon.png" />
                <title>{miTexto[1]} · Spanish translation exercise</title>
                <meta name="description" content={miTexto[3]} />
            </Head>

            <div className="lecs-titulo">
                <h1>
                    TRANSLATION EXERCISE
                    <br />
                    <span>Remember to respect accents and punctuation marks.</span>
                </h1>
            </div>

            <BotonMain
                titulo='Back to'
                icono='fa-chevron-circle-left'
                dir={`/en/${slug_categoria}/${slug_leccion}`}
                bg='bg-secundario'
            />

            <div className="texto-main-traduccion">
                <h2>{textoEsp}</h2>
            </div>

            <div className="div-textarea-traduccion">
                <textarea
                    onInput={() => auto_grow()}
                    ref={refTextArea}
                    className="textarea-traduccion"
                    type="text"
                    id="message"
                    name="message"
                    onChange={handleChange}
                    value={message}
                    placeholder='Translate the text...'
                    autoComplete="off"
                />
            </div>

            <Link href=''>
                <a>
                    <div className="btn-main bg-primario" onClick={handleClick}>
                        <i className="fas fa-graduation-cap"></i>
                        <p>Check</p>
                    </div>
                </a>
            </Link>

            {
                diferencia ?
                    <div className="texto-main-resultado">
                        <h3>{resultado}</h3>
                        <ReactDiffViewer
                            oldValue={textoIng}
                            newValue={message}
                            styles={newStyles}
                            hideLineNumbers={true}
                            showDiffOnly={false}
                            compareMethod={DiffMethod.WORDS}
                        />
                    </div>
                    :
                    ''
            }

        </Layout>
    )
}

export async function getStaticPaths() {
    try {
        const res = await fetch('https://admin.idiomary.com/api/lecturas',
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

        const slug_categoria = params.categoria
        const slug_leccion = params.slug
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
                contLec,
                slug_categoria,
                slug_leccion
            },
            revalidate: 5, // In seconds
        }
    } catch (error) {
        console.log(error)
    }
}