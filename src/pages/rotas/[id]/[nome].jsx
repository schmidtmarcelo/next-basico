import { useRouter } from "next/router"
import Link from 'next/link'
//dist/client/

export default function idENome() {
    const router = useRouter()
    const id = router.query.id
    const nome = router.query.nome

    console.log 

    return (
        <div>
            <h1>ROTAS / {id} / {nome}</h1>
            <Link href="/rotas">
                <button>Voltar</button>
            </Link>
        </div>
    )
}