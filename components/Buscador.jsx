import { useRouter } from 'next/router'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

export default function Buscador({ buscar }) {

    const router = useRouter()

    const handleOnSelect = ({ slug_cat, slug }) => {
        router.push({
            pathname: '/en/[categoria]/[slug]',
            query: { categoria: slug_cat, slug },
        })
    }

    return (
        <>
            <div>
                {
                    <ReactSearchAutocomplete
                        items={buscar.results}
                        fuseOptions={{ keys: ["titulo"] }}
                        resultStringKeyName="titulo"
                        onSelect={handleOnSelect}
                        placeholder="Search for lessons"
                    />
                }
            </div>
        </>
    )
}
