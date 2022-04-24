import { useRouter } from "next/dist/client/router"

function Doc(){
    const router = useRouter()
    const {params = []} = router.query
    console.log(params)

    console.log(params)
    return <h1>Docs home page</h1>
}
 export default Doc