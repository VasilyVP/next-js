import { useRouter } from "next/router"

export default function Part1() {
    const router = useRouter();

    console.log('router: ', router);

    const { id } = router.query;

    return (
        <div>
            Some content with {id}
        </div>
    )
}
