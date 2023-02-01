/* eslint-disable @next/next/no-img-element */
import { List } from 'phosphor-react'
import style from '../../styles/Home.module.css'

const Nav = () => {
  return (
    <div className={style.nav}>
      <a href="" className={style.logo}>
        <img
          src='https://res.cloudinary.com/tommello/image/upload/v1672638070/Projeto%20Red%20Bull%20Racing/oracle-red-bull-racing-logo_mcmgst.png'
          alt='Red Bull Racing Logo' />
      </a>
      <div className={style.menu}>
        <nav className={style.links}>
          <a href="#">
            <div className={style.link}>
              Races
            </div>
          </a>
          <a href="#">
            <div className={style.link}>
              Cars
            </div>
          </a>
          <a href="#">
            <div className={style.link}>
              The Paddock
            </div>
          </a>
          <a href="#">
            <div className={style.link}>
              NFTs
            </div>
          </a>
          <a href="#">
            <div className={style.link}>
              Esports
            </div>
          </a>
        </nav>
        <button className={style.buttonMenu}>
          <List size={18} />
        </button>
      </div>
    </div>
  )
}

export default Nav