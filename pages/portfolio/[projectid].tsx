
import { useRouter } from 'next/router';

import styles from '@/styles/Home.module.css'

export default function PortfolioProjectPage() {

    const router = useRouter();

    console.log(router.pathname);
    console.log(router.query);
    
    return (
        <main className={styles.main}>
        <h1>Portfolio project is here</h1>
      </main>
    );
}