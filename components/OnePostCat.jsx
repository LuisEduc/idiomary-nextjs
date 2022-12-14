

import Image from "next/image"
import Link from "next/link"
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";


export default function OnePostCat({ slug, slug_cat, titulo, imagen, audio }) {

    return (
        <>

            <div>
                <div className="one-post-cat">
                    <Link href={`/en/${slug_cat}/${slug}`}>
                        <a>
                            <div className="one-post-cat-top" style={{ height: '100%' }}>
                                <h3>{titulo}</h3>
                            </div>
                        </a>
                    </Link>
                    <Link href={`/en/${slug_cat}/${slug}`}>
                        <a className="bg-one-post-cat-mid ">
                            <div className="one-post-cat-mid">
                                <Image
                                    src={`https://admin.idiomary.com/imagen/${imagen}`}
                                    alt={`${titulo}`}
                                    width="85%"
                                    height="100%"
                                    layout="responsive"
                                    objectFit="cover"
                                    placeholder="blur"
                                    blurDataURL="/img/placeholder.webp"
                                    sizes="48vw"
                                />
                            </div>
                        </a>
                    </Link>
                    <div>
                        <AudioPlayer
                            src = {`https://admin.idiomary.com/api/audio/${audio}`}
                            customAdditionalControls={[]}
                            customVolumeControls={[]}
                            autoPlay={false}
                            autoPlayAfterSrcChange={false}
                            preload="none"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
