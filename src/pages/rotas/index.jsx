import Link from 'next/link'
import router from "next/router"

export default function rotas() {

    function navegacaoSimples(url) {
        router.push(url)
    }

    function navegacaoComParams() {
        router.push({
            pathname: "/rotas/params",
            query: {
                id: 123,
                nome: "marcelo schmidt"
            }
        })
    }

    return (
        <div>
            <h1>ROTAS Index</h1>
            <ul>
                <Link href="/rotas/params?id=12&nome=marcelo">
                    <li>params</li>
                </Link>
                <Link href="/rotas/123/buscar">
                    <li>buscar</li>
                </Link>
                <Link href="/rotas/123/MARCELO">
                    <li>MARCELO</li>
                </Link>
            </ul>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start"
            }}>
                <button onClick={navegacaoComParams}>Params</button>
                <button onClick={() => router.push("/rotas/123/buscar")}>Buscar</button>
                <button onClick={() => navegacaoSimples("/rotas/123/MARCELO")}>Marcelo</button>
            </div>
        </div>
    )
}