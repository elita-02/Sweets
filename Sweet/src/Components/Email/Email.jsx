import React from 'react'
import "./Email.scss"
import email from "../../assets/svg/email.svg"
function Email() {
  return (
         <div className='emal'>
               <button>
                      <img src={email} alt="" />
                      Продолжить с почтой
              </button>
            </div>
  )
}

export default Email
