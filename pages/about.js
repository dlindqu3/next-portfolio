import Head from 'next/head'; 
import Header from '../components/Header';
import Footer from '../components/Footer';


export default function about(){
  return (
    <>
    <Head>
      <title>About Me</title>
    </Head>
    <Header />
      about me stuff here 
    <Footer />
    </>
  )
}