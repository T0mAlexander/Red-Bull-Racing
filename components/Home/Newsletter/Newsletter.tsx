import Checkbox from './Checkbox/Checkbox'
import style from './Newsletter.module.css'

const Newsletter = () => {

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <img src="https://res.cloudinary.com/tommello/image/upload/v1668524528/Projeto%20Red%20Bull%20Racing/red-bull-car_ls5rkr_ecai3m.jpg"
          className={style.background} />
      </div>
      <div className={style.newsletterSignup}>
        <div className={style.newsletterSignupContent}>
          <p className={style.newsletterHead}>Get closer to the Team</p>
          <div className={style.paragraphContent}>
            <p className={style.newsletterParagraph}>Sign up to our newsletter to get all the latest updates from the Team as well as information on exclusive competitions and giveaways. Tell us what you want to hear about by selecting your preferences in the check boxes below:</p>
          </div>
          <input className={style.input} type="email" name="account-email" placeholder='Your email:' />
          <div className={style.signupOptionContainer}>
            <div className={style.signupOption}>
              <Checkbox />
              <label>I have read and understood the <a href="">privacy policy</a>.</label>
            </div>
            <div className={style.signupOption}>
              <Checkbox />
              <label>I want to hear from the Oracle Red Bull Racing Esports team.</label>
            </div>
            <div className={style.signupOption}>
              <Checkbox />
              <label>I want to hear about occasional <a href="">sponsor and partner offers</a>.</label>
            </div>
            <button className={`button ${style.buttonSubmit}`}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
