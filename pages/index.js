import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import FeatureList from '../components/FeatureList'

export default function Home() {
  return (
    <div>
      <Hero />
      <FeatureList />
      <Footer />
    </div>
  )
}
