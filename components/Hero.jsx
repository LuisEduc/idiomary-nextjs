import Image from "next/image"
import Buscador from "../components/Buscador"
import AdSense from 'react-adsense';
import Link from "next/link";

export default function Hero({ buscar }) {
    return (
        <>
            <div className="hero-bg">
            <div style={{ height: '15px' }}></div>

                <AdSense.Google
                    // index-hero-idiom
                    client='ca-pub-3630578707238850'
                    slot='2375448256'
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

                <div className="hero">
                    <div className="hero-text">
                        <div className="hero-titulo">
                            <h1>Spanish Online Course<span className="color-secundario">.</span></h1>
                        </div>
                        <div className="buscador">
                            <Buscador buscar={buscar} />
                        </div>
                    </div>

                    <div className="hero-resumen-grid">
                        <div className="hero-resumen-titulo">
                            <h2>What does <span className="resalt-mor">idiomary.com</span> offer?</h2>
                        </div>
                        <div className="hero-resumen-item">
                        <Link href="/#lessons">
                                <a href="/#lessons">
                                    <div className="item-hero-number">
                                        <span>1</span>
                                    </div>
                                </a>
                            </Link>
                            <div className="item-hero-text">
                                <Link href="/#lessons">
                                    <h3>
                                        <a href="/#lessons">Basic readings in Spanish.</a>
                                    </h3>
                                </Link>
                                <p>Basic and short readings in Spanish to improve your language skills and learn new vocabulary.</p>
                            </div>
                        </div>
                        <div className="hero-resumen-item">
                            <Link href="/#lessons">
                                <a href="/#lessons">
                                    <div className="item-hero-number">
                                        <span>2</span>
                                    </div>
                                </a>
                            </Link>
                            <div className="item-hero-text">
                                <Link href="/#lessons">
                                    <h3>
                                        <a href="/#lessons">Common Spanish phrases.</a>
                                    </h3>
                                </Link>
                                <p>We have prepared a list of common Spanish phrases that will help you have a basic conversation in Spanish.</p>
                            </div>
                        </div>
                        <div className="hero-resumen-item">
                            <Link href="/#courses">
                                <a href="/#courses">
                                    <div className="item-hero-number">
                                        <span>3</span>
                                    </div>
                                </a>
                            </Link>
                            <div className="item-hero-text" >
                                <Link href="/#courses">
                                    <h3>
                                        <a href="/#courses">Basic vocabulary.</a>
                                    </h3>
                                </Link>
                                <p>Basic vocabulary in Spanish such as weather, prepositions, personality, etc. With translation, pronunciation and test.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}