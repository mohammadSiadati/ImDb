import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import { Header } from '@/components/organism/header';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { HomePage } from '@/components/page/landingHomePage';
import { CookiesProvider } from 'react-cookie';

const clientId =
  '555383435561-vioa7ivbmfp5j692bpmufuki31ajuds9.apps.googleusercontent.com';

export default function Home() {
  return (
    <CookiesProvider>
      <GoogleOAuthProvider clientId={clientId}>
        <Header />
        <HomePage />
      </GoogleOAuthProvider>
    </CookiesProvider>
  );
}
