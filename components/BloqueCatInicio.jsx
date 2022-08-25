import Link from 'next/link'

export default function BloqueCatInicio({ nivel, icono, slug, titulo, descripcion }) {
    return (
        <>
            <div className="grid-cat-inicio">
                <Link href={`/en/${slug}`}>
                    <a>
                        <div className="titulo-cat-inicio">
                            <div>
                                {nivel === 'medio' ?
                                <h2>Intermediate level course</h2>
                                :
                                <h2>{nivel} level course</h2>}
                                <h3>{titulo}</h3>
                            </div>
                            <div className="icon-cat-inicio">
                                <i className={`fas fa-2x ${icono}`}></i>
                            </div>
                        </div>
                    </a>
                </Link>
                <div className="detalles-cat-inicio">
                    <p>{descripcion}</p>
                    <div className="flex-center">
                        <Link href={`/en/${slug}`}>
                            <a type="button" className="btn btn-in-cat">I want to learn<i className="fas fa-headphones-alt ms-2"></i></a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
