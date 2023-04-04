
import { useRouter } from 'next/router';

import styles from '@/styles/Home.module.css'

export default function ClientProjectDetailPage() {

    const router = useRouter();
    console.log("Detail page");
    console.log(router.query);

    return (
        <main className={styles.main}>
        <h1>Client project detail</h1>
      </main>
    );
}