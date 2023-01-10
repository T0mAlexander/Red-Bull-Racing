/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Carousel } from 'antd'
import style from '../../styles/Home.module.css'

const carouselContainer: React.CSSProperties = {
  position: 'absolute',
  top: '0',
  height: '100%',
  width: '100%',
}

const carouselStyle: React.CSSProperties = {
  position: 'absolute',
  height: '100%',
  width: '100%',
}

const itemImg: React.CSSProperties = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  opacity: '1',
  zIndex: '-1'
}

const imgView: React.CSSProperties = {
  opacity: '1',
  height: '100%',
  width: '100%',
  transform: 'scale(1)',
  transformOrigin: 'center right',
  transitionDelay: '0.3s',
  transitionDuration: '0.3s',
  transitionTimingFunction: 'cubic-bezier(0.32, 0, 1, 0.32)'
}

const imgViewContainer: React.CSSProperties = {
  position: 'relative',
  top: '0',
  height: '100%',
  width: '100%',
}

const img: React.CSSProperties = {
  display: 'block',
  objectFit: 'cover',
  height: '100%',
  width: '100%'
}

export const newsSlide = [
  {
    name: 'Farewell RB18',
    category: 'F1',
    src: 'https://res.cloudinary.com/tommello/image/upload/v1668524517/Projeto%20Red%20Bull%20Racing/merchadising-11_zpev6r_txywy9.avif',
  },
  {
    name: 'Championship Moments',
    category: 'F1',
    src: 'https://res.cloudinary.com/tommello/image/upload/v1668524492/Projeto%20Red%20Bull%20Racing/circuit-of-the-americas-3_v4iccd_grqgn8.avif',
  },
  {
    name: 'Christian & Adrian: The Making of World Champions',
    category: 'F1',
    src: 'https://res.cloudinary.com/tommello/image/upload/v1668524516/Projeto%20Red%20Bull%20Racing/merchadising-7_j9zvf6_owemoe.avif',
  },
]

const carousel = () => {
  return (
    <div className={style.newsContent}>
      <div style={carouselContainer}>
        <Carousel autoplay={true} autoplaySpeed={5000} style={carouselStyle} fade dots={false} className={style.carousel}>
          {newsSlide.map((slide, id) => (
            <div key={id} style={itemImg} className={style.bottomShadow}>
              <div style={imgView}>
                <div style={imgViewContainer}>
                  <img src={slide.src} style={img} />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default carousel