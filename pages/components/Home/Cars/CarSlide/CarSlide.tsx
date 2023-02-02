/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import style from './CarSlide.module.css'

interface CarModel {
  carName: string
  imageSource: string
}

const CarSlide = ({ imageSource }: CarModel) => {
  return (
    <div className={`car__slide ${style.Slide}`}>
      <div className={style.Container}>
        <div className={style.carContent}>
          <div className={style.carModel} style={{ backgroundImage: `url(${imageSource})`, opacity: 1}} >
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarSlide