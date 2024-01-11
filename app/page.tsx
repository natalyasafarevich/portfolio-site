import Image from 'next/image';
import styles from './page.module.css';
import Header from '@/components/Header/Header';
import Preview from '@/components/Preview/Preview';
import Project from '@/components/Project/Skills';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Preview />
      <Project />
    </main>
  );
}
