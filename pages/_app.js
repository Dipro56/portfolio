import '@/styles/globals.css';
import '../styles/navbar.css';
import '../styles/upper-section.css';
import '../styles/about-me-section.css';
import '../styles/education-section.css';
import '../styles/work-experience-section.css';
import '../styles/skill-section.css';
import '../styles/project-section.css';
import '../styles/footer.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;700;900&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/ssbd.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
