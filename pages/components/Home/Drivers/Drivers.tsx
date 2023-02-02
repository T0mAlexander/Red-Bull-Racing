/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import style from './Drivers.module.css'
import Glide from '@glidejs/glide'
import '@glidejs/glide/dist/css/glide.core.min.css'
import '@glidejs/glide/dist/css/glide.theme.min.css'
import { useEffect } from 'react'

const Drivers = () => {
  useEffect(() => {
    const Slider = new Glide('.glide', {
      type: 'carousel',
      startAt: 0,
      perView: 1
    })

    let slide = document.getElementById('slide')
    let slide2 = document.getElementById('slide2')
    let img = document.querySelector('#driverImg')
    let name = document.querySelector('#driverName')
    let number = document.querySelector('#driverNumber')
    let surname = document.querySelector('#driverSurname')

    let img2 = document.querySelector('#driverImg2')
    let name2 = document.querySelector('#driverName2')
    let number2 = document.querySelector('#driverNumber2')
    let surname2 = document.querySelector('#driverSurname2')

    Slider.on(['build.before', 'move.after', 'swipe.start'], () => {
      if (slide?.classList.contains('glide__slide--active')) {
        img?.classList.add('fadeInLeft', 'animation')
        img2?.classList.remove('fadeInLeft', 'animation')

        name?.classList.add('fadeInRight', 'animation')
        name2?.classList.remove('fadeInRight', 'animation')

        number?.classList.add('fadeInRight', 'animation')
        number2?.classList.remove('fadeInRight', 'animation')

        surname?.classList.add('fadeInRight', 'animation')
        surname2?.classList.remove('fadeInRight', 'animation')
      }

      if (slide2?.classList.contains('glide__slide--active')) {
        img?.classList.remove('fadeInLeft', 'animation')
        img2?.classList.add('fadeInLeft', 'animation')

        name?.classList.remove('fadeInRight', 'animation')
        name2?.classList.add('fadeInRight', 'animation')

        number?.classList.remove('fadeInRight', 'animation')
        number2?.classList.add('fadeInRight', 'animation')

        surname?.classList.remove('fadeInRight', 'animation')
        surname2?.classList.add('fadeInRight', 'animation')
      }
    })

    Slider.mount()
  })

  return (
    <div className='glide'>
      <div className={style.container}>
        <div className={style.glide}>
          <h3 className={style.title}>The Drivers</h3>
          <div className={style.drivers}>
            <div className={style.controls} data-glide-el='controls'>
              <button data-glide-dir='<'>
                <img src="https://res.cloudinary.com/tommello/image/upload/v1668524500/Projeto%20Red%20Bull%20Racing/icon-arrow-left_d2fuuh_eqlxpe.svg" />
              </button>
              <button data-glide-dir='>'>
                <img src="https://res.cloudinary.com/tommello/image/upload/v1668524500/Projeto%20Red%20Bull%20Racing/icon-arrow-right_cdo5go_wezxj7.svg" />
              </button>
            </div>
            <div className={`glide__bullets ${style.bullets}`} data-glide-el='controls[nav]'>
              <button className='glide__bullet' data-glide-dir='=0'></button>
              <button className='glide__bullet' data-glide-dir='=1'></button>
            </div>
            <div className='glide__track' data-glide-el='track'>
              <ul className={`glide__slides ${style.slides}`}>
                <li id='slide' className={`glide__slide ${style.slide}`}>
                  <div className={style.slideWrapper}>
                    <div className={style.driverImg}>
                      <img id='driverImg' className={`${style.img}`} src='https://res.cloudinary.com/tommello/image/upload/v1668524515/Projeto%20Red%20Bull%20Racing/max-photo_j4n6d7_ye1zdf.avif' />
                    </div>
                    <div className={style.driverName}>
                      <div className={style.driverNameContainer}>
                        <div className={style.nameRow}>
                          <div className={style.name}>
                            <h1 id='driverName'>Max</h1>
                          </div>
                          <div className={style.number}>
                            <img id='driverNumber' src='https://res.cloudinary.com/tommello/image/upload/v1673292194/Projeto%20Red%20Bull%20Racing/number_fvebpt.svg' />
                          </div>
                        </div>
                        <div className={style.surnameRow}>
                          <h1 id='driverSurname'>Verstappen</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li id='slide2' className={`glide__slide ${style.slide}`}>
                  <div className={style.slideWrapper}>
                    <div className={style.driverImg}>
                      <img id='driverImg2' className={`${style.img}`} src='https://res.cloudinary.com/tommello/image/upload/v1668524492/Projeto%20Red%20Bull%20Racing/checo-photo_zmjfpu_tcgoaj.avif' />
                    </div>
                    <div className={style.driverName}>
                      <div className={style.driverNameContainer}>
                        <div className={style.nameRow}>
                          <div className={style.name}>
                            <h1 id='driverName2'>Sergio</h1>
                          </div>
                          <div className={style.number}>
                            <img id='driverNumber2' src='https://res.cloudinary.com/tommello/image/upload/v1673293108/Projeto%20Red%20Bull%20Racing/checo_number_gwqh0x.svg' />
                          </div>
                        </div>
                        <div className={style.surnameRow}>
                          <h1 id='driverSurname2'>Perez</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div className={style.profileButton}>
                <a href='' className={`button ${style.button}`}>
                  <span>View profile</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Drivers