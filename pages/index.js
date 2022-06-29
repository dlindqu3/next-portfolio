import Header from '../components/Header'; 
import Footer from '../components/Footer';
import Head from 'next/head'; 

export default function Home() {
  return (
    <>
    <Head>
      <title>Dwight's Portfolio</title>
    </Head>
    <Header /> 
      Brief intro here 
    <Footer /> 
    </>
  )
}
