import { useRouter } from "next/router"
import Link from 'next/link'

export default function Buscar() {
    const router = useRouter()
    const id = router.query.id

    return (
        <div>
            <h1>ROTAS / {id} / BUSCAR</h1>
            <Link href="/rotas" >
                <a>
                    <button>Voltar</button>
                </a>
            </Link>
        </div>
    )
}