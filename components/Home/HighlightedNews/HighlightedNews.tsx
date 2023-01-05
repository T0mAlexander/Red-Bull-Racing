import style from './HighlightedNews.module.css'
import { newsSlide } from '../Carousel'
import Timeline from '../Timeline/Timeline'

const HighlightedNews = () => {
  return (
    <div className={style.content}>
      {newsSlide.map((news, id) => (
        <div key={id} className={style.item}>
          <div className={style.itemContent}>
            <h2 className={style.newsCategory}> {news.category} </h2>
            <div className={style.titleWrapper}>
              <a href="">
                <h2> {news.name} </h2>
              </a>
              <div className={style.buttonWrapper}>
                <a href="" className={`button ${style.button}`}>
                  <span className={style.buttonContent}>
                    <span className={style.buttonLabel}>
                      Watch Video
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Timeline />
    </div>
  )
}

export default HighlightedNews