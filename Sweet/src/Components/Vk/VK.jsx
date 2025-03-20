import React from 'react'
import vk from "../../assets/svg/vk.svg"
import "./VK.scss"
function VK() {
  return (
    <div className='btn'>
       <button>
              <img src={vk} alt="" />
              Продолжить с VK
      </button>
    </div>
  )
}

export default VK
