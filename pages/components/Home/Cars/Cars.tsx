/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import style from './Cars.module.css'
import Glide from '@glidejs/glide'
import '@glidejs/glide/dist/css/glide.core.min.css'
import '@glidejs/glide/dist/css/glide.theme.min.css'
import CarSlide from './CarSlide/CarSlide'
import { useEffect } from 'react';
import dynamic from 'next/dynamic'

const Cars = () => {
  const RB15 = dynamic(() => import('./3D/RB15/RB15'), { ssr: false })
  const RB16B = dynamic(() => import('./3D/RB16B/RB16B'), { ssr: false })
  const RB18 = dynamic(() => import('./3D/RB18/RB18'), { ssr: false })

  useEffect(() => {
    const carsCarousel = new Glide('.cars', {
      type: 'slider',
      startAt: 0,
      perView: 1,
      swipeThreshold: false,
      dragThreshold: false
    })

    carsCarousel.mount()
  }, [])

  const disableContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  return (
    <div className={`cars ${style.wrapper}`}>
      <div className={style.Slider}>
        <div className={style.container}>
          <div className={style.layout}>
            <div className={style.layoutContainer}>
              <div className={style.layoutBackground}>
                <div className={style.carStats}>
                  <div className={style.dashedDivider}>
                    <img src="https://res.cloudinary.com/tommello/image/upload/v1668524493/Projeto%20Red%20Bull%20Racing/divider-lg_ghs20l_scl8t4.svg" />
                  </div>
                  <div className={style.statItem}>
                    <div className={style.itemWrapper}>
                      <div id='year' className={style.itemContainer}>
                        <div className={`${style.itemIcon} tagBold`}>
                          <img src="https://res.cloudinary.com/tommello/image/upload/v1668524501/Projeto%20Red%20Bull%20Racing/icon-year_k0zkhe_zgzpjl.svg" />
                        </div>
                        <div className={`${style.itemTitle} tagBold`}>Year</div>
                        <div className={`${style.itemValue} titleBold`}>2022</div>
                      </div>
                      <div id='wins' className={`${style.itemContainer}`}>
                        <div className={`${style.itemIcon} tagBold`}>
                          <img src="https://res.cloudinary.com/tommello/image/upload/v1673475239/Projeto%20Red%20Bull%20Racing/icon-wins_zhxzxn.svg" />
                        </div>
                        <div className={`${style.itemTitle} tagBold`}>Wins</div>
                        <div className={`${style.itemValue} titleBold`}>17</div>
                      </div>
                      <div id='podiums' className={style.itemContainer}>
                        <div className={`${style.itemIcon} tagBold`}>
                          <img src="https://res.cloudinary.com/tommello/image/upload/v1668524500/Projeto%20Red%20Bull%20Racing/icon-car-podiums_xhvpw0_piyoov.svg" />
                        </div>
                        <div className={`${style.itemTitle} tagBold`}>Podiums</div>
                        <div className={`${style.itemValue} titleBold`}>28</div>
                      </div>
                      <div id='poles' className={style.itemContainer}>
                        <div className={`${style.itemIcon} tagBold`}>
                          <img src="https://res.cloudinary.com/tommello/image/upload/v1668524501/Projeto%20Red%20Bull%20Racing/icon-car-pole-positions_tvassi_emez53.svg" />
                        </div>
                        <div className={`${style.itemTitle} tagBold`}>Poles</div>
                        <div className={`${style.itemValue} titleBold`}>8</div>
                      </div>
                      <div id='points' className={style.itemContainer}>
                        <div className={`${style.itemIcon} tagBold`}>
                          <img src="https://res.cloudinary.com/tommello/image/upload/v1668524501/Projeto%20Red%20Bull%20Racing/icon-car-scored-points_nk7g0c_r33iow.svg" />
                        </div>
                        <div className={`${style.itemTitle} tagBold`}>Points</div>
                        <div className={`${style.itemValue} titleBold`}>759</div>
                      </div>
                    </div>
                  </div>
                </div>
                <h1 className={style.carModel}>
                  <span className={style.carName}>RB</span>
                  <span className={style.carNumber}>18</span>
                </h1>
              </div>
              <div className={style.carsSliderContent}>
                <div className={style.carsSlider} onContextMenu={disableContextMenu}>
                  <div className='cars__track' data-glide-el='track'>
                    <ul className='cars__slides'>
                      <li className={`cars__slide ${style.glideSlide}`}>
                        <RB18 />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div data-glide-el='controls'>
                <button className={style.prevSlideButton} data-glide-dir='<' title='Previous Car'>
                  <img src="https://res.cloudinary.com/tommello/image/upload/v1668524500/Projeto%20Red%20Bull%20Racing/icon-arrow-left_d2fuuh_eqlxpe.svg" />
                </button>
                <button className={style.nextSlideButton} data-glide-dir='>' title='Next Car'>
                  <img src="https://res.cloudinary.com/tommello/image/upload/v1668524500/Projeto%20Red%20Bull%20Racing/icon-arrow-right_cdo5go_wezxj7.svg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cars