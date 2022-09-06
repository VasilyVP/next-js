import { ReactElement, ReactNode, useEffect, useState } from "react"
import Image from 'next/image'
import churchImg from '/assets/church.jpg'
import iceImg from '/assets/ice.jpg'
import styles from './styles.module.scss'
import Link from "next/link"

const listData = ['one', 'two'];

/* export async function getStaticProps() {
    return {
        props: {
            list: listData,
        }
    }
} */

export async function getServerSideProps() {
    return new Promise(resolve => {
        setTimeout(() => resolve({
            props: {
                list: listData,
            }
        }), 1);
    });
}

export default function Part1({ list }: { list: string[] }) {
    //const [show, setShow] = useState(false);

    const content = list.map((el, i) => <p key={i}>{el}</p>);

    /* useEffect(() => {
        setTimeout(() => setShow(true));
    }, []); */

    return (
        <div /* className={styles.container} */>
            Some part 1 content {content} {/* {show ? 'Hidden content' : null} */}
            <div className={styles.imageContainer}>
                <Image
                    src={churchImg}
                    alt='Church'
                    layout='responsive'
                    className={styles.image}
                    objectFit='contain'
                />
            </div>
            <Link href='/level2/fejflk/dercfrew'>Link to id 'dercfrew'</Link>
        </div>
    )
}
