/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Checkbox from './Checkbox/Checkbox'
import style from './Newsletter.module.css'

const Newsletter = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <img className={style.bgImg} src="https://res.cloudinary.com/tommello/image/upload/v1668524528/Projeto%20Red%20Bull%20Racing/red-bull-car_ls5rkr_ecai3m.jpg" alt="RB18 Speed Photo" />
        <div className={style.signUp}>
          <div className={style.signUpContainer}>
            <p className={style.signUpHeading}>Get closer to the Team</p>
            <div className={style.signUpStatus}>
              <form className={style.signUpArea}>
                <p className={style.serviceDescription}>
                  Sign up to our newsletter to get all the latest updates from the Team as well as information on exclusive competitions and giveaways. Tell us what you want to hear about by selecting your preferences in the check boxes below:
                </p>
                <input type="email" placeholder="Your email:" />
                <div className={style.signUpOption}>
                  <Checkbox />
                  <label>
                    I have read and understood the
                    <a href=""> privacy policy</a>.
                  </label>
                </div>
                <div className={style.signUpOption}>
                  <Checkbox />
                  <label>
                    I want to hear from the Oracle Red Bull Racing Esports team.
                  </label>
                </div>
                <div className={style.signUpOption}>
                  <Checkbox />
                  <label>
                    I want to hear about occasional
                    <a href=""> sponsor and partner offers</a>.
                  </label>
                </div>

                <button disabled className={`button ${style.submitButton}`}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter