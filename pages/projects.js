import Head from 'next/head'; 
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectModal from '../components/ProjectModal';


export default function projects(){
  return (
    <>
    <Head>
      <title>Projects</title>
    </Head>
    <Header />
      add projects here 
      <ProjectModal />
    <Footer />
    </>
  )
}