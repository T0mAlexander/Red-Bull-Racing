import style from './Timeline.module.css'
import { newsSlide } from '../Carousel'

const Timeline = () => {
  return (
    <div className={style.items}>
      {newsSlide.map((news, id) => (
        <div key={id} className={style.item}>
          <div className={style.itemContent}>
            <div className={style.progressBarMask}>
              <div className={style.progressBar}></div>
            </div>
            <div className={style.title}>{news.name}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Timeline