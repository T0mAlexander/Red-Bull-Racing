/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import style from './CarSlide.module.css'

interface CarModel {
  carName: string
  imageSource: string
}

const CarSlide = ({ imageSource }: CarModel) => {
  return (
    <li className={`rbr-car__slide is-hidden ${style.Slide}`} >
      <div className={style.Container}>
        <div className={style.carContent}>
          <div className={style.carModel} style={{ backgroundImage: `url(${imageSource})`}} >
          </div>
        </div>
      </div>
    </li>
  )
}

export default CarSlide