/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import style from './Cars.module.css'

const Cars = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.carSlider}>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cars