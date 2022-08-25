
export default function InfoCat({ titulo, descripcion, nivel }) {
    return (
        <div>
            <div className="grid-cat-info">
                <div className="titulo-cat-info">
                    <div>
                        {nivel === 'medio' ?
                            <span>Intermediate level course</span>
                            :
                            <span>{nivel} level course</span>}
                        <h1>{titulo} in Spanish</h1>
                    </div>
                </div>
                <div style={{ height: '10px' }}></div>
                <div className="detalles-cat-info">
                    <h2>{descripcion}</h2>
                </div>
            </div>
        </div>
    )
}