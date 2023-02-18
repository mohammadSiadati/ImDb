import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import { Header } from '@/components/organism/header';
import { HomePage } from '@/components/page/landingHomePage';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Header />
      <HomePage />
    </>
  );
}
