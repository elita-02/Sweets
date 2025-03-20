import React from 'react'
import "./Google.scss"
import google from "../../assets/svg/google.svg"
function Google() {
  return (
       <div className='googl'>
           <button>
                  <img src={google} alt="" />
                  Продолжить с Google
          </button>
        </div>
  )
}

export default Google
