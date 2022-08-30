import Link from 'next/link'
import { useRef } from 'react'

export default function Navbar() {

    let refMenu = useRef()
    let refNav = useRef()

    const Desplegar = () => {
        if (refMenu.current.className.includes('active')) {
            refMenu.current.className = 'menu-trigger'
            refNav.current.style.display = 'none'
        } else {
            refMenu.current.className += ' active'
            refNav.current.style.display = 'block'
        }
    }

    return (
        <>
            <div className="header-area header-sticky background-header">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                <Link href="/">
                                    <a className="logo">idiom<em>Ary</em></a>
                                </Link>
                                <ul ref={refNav} className="nav">
                                    <li onClick={Desplegar}>
                                        <Link href="/#lessons">
                                            <a href="/#lessons">Lessons</a>
                                        </Link>
                                    </li>
                                    <li onClick={() => window.open("https://www.facebook.com/idiomary.edu", "_blank")}>
                                        <a className="active fw-bold mano">Facebook</a>
                                    </li>
                                </ul>
                                <a ref={refMenu} onClick={Desplegar} className='menu-trigger'>
                                    <span>Menu</span>
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ height: 50 }}></div>
        </>
    )
}
