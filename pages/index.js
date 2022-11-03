import Head from 'next/head'
import Header from '../components/Header'
import BackgroundImage from '../components/BackgroundImage'
import MainSection from '../components/MainSection'
import AboutMeSection from '../components/AboutMeSection'
import Resume from '../components/Resume'
import ContactMeSection from '../components/ContactMeSection'
import Copyright from '../components/Copyright'
import {LoadingContext} from '../utils/LoadingContext'
import { useState } from 'react'
import LoadingAnimation from '../components/LoadingAnimation'

export default function Home(props) {

  const [loading,setLoading] = useState(true)

  return (
    <div className='bg-main overflow-x-clip py-0 h-20'>  
    <LoadingContext.Provider value={{loading,setLoading}}>
      <Head>
        <title>Siravij Praevisvakij - Your choice of currious developer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="The Siravij Portfolio."/>
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/code.gif"></link>
        <meta name="googlebot" content="index, follow"/>
        <meta name="keywords" content="Siravij Praevisavakij, three js, 3d Portfolio, s6403102168120@gmail.com, Portfolio, Siravij Portfolio" />
        <meta name='image' content="https://res.cloudinary.com/dwvwjxizk/image/upload/v1641491432/banner_b4lbdc.png" />
        <meta itemProp="name" content="Siravij Praevisavakij - Payload Failure Analysis"/>
        <meta itemProp="description" content="The Siravij Portfolio."/>
        <meta property="og:title" content="Siravij Praevisavakij - Payload Failure Analysis"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="www.siravijbb.me"/>
        <meta property="og:image" content="https://res.cloudinary.com/dwvwjxizk/image/upload/v1641491432/banner_b4lbdc.png"/>
        <meta property="og:description" content="A Failure analysis engineer who interest in  wedevelopment with currious."/>
        <meta itemProp='name' content="Oussama Dhraief - Full-Stack Web Developer"/>
        <meta itemProp='description' content="A Failure analysis engineer who interest in  wedevelopment with currious."/>
        <meta itemProp='image' content="https://res.cloudinary.com/dwvwjxizk/image/upload/v1641491432/banner_b4lbdc.png"/>
        <meta name="twitter:card" value="summary_large_image"/>
        <meta name="twitter:title" value="Siravij Praevisavakij - Payload Failure Analysis"/>
        <meta name="twitter:description" value="A Failure analysis engineer who interest in  wedevelopment with currious."/>
        <meta name="twitter:image" value="https://res.cloudinary.com/dwvwjxizk/image/upload/v1641491432/banner_b4lbdc.png"/>
      </Head>
      <Header />
      <MainSection />
      <AboutMeSection />
      <Resume />
      <ContactMeSection />
      <Copyright />
      </LoadingContext.Provider>
    </div>
  )
}


export async function getServerSideProps() {
  return { props: { data: 'results' } }
}