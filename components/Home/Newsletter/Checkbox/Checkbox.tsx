import { Check } from "phosphor-react"
import { useState } from "react"
import style from '../Newsletter.module.css'

const Checkbox = () => {
  const [check, setCheck] = useState(false)

  return (
    <div onClick={() => setCheck(!check)} className={`checkbox ${check ? style.filled : style.notFilled}`}>
      <Check size={11.5} weight='bold' className={`${check ? style.checkIconVisible : style.checkIconDefault}`} />
    </div>
  )
}

export default Checkbox