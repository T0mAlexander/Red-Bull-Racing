import Head from 'next/head'
import style from '../styles/Home.module.css'
import Nav from '../components/Home/Nav'
import Carousel from '../components/Home/Carousel'
import HighlightedNews from '../components/Home/HighlightedNews/HighlightedNews'
import EditorsPick from '../components/Home/EditorsPick/EditorsPick'
import Newsletter from '../components/Home/Newsletter/Newsletter'

export default function Home() {
  return (
    <>
      <Head>
        <title>Red Bull Racing</title>
        <meta name="description" content="Red Bull Racing website clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href='https://res.cloudinary.com/tommello/image/upload/v1668524496/Projeto%20Red%20Bull%20Racing/favicon-16_wwmpxg_sx2awg.png' />
      </Head>
      <main className={style.main}>
        <Nav />
        <Carousel />
        <HighlightedNews />
        <EditorsPick />
        <Newsletter />
      </main>
    </>
  )
}
