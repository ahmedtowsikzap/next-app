import Link from "next/link"
import { useRouter } from "next/router"

function Home(){
    const router = useRouter()
     
    const handleClick =(e)=>{
         console.log('placing your order')
         router.push('/product')

    }
    return (
    <div>
     <h1>Home</h1>
     <Link href="/blog">
     <a>Blog</a>
     </Link>
     <Link href="/product">
     <a>products</a>
     </Link>
     <button onClick={handleClick}>
         placeorder
     </button>
    </div>
    )
}

export default Home
