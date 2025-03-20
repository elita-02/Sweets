import React from 'react';
import VK from '../Components/Vk/VK';
import Google from '../Components/GoogleBtn/Google';
import Call from '../Components/Call/Call';
import './Emmail.scss'; 

function Emmail() {
  return (
    <div className='emmail container'>
      <div className='email_card'>
        <h1>Авторизация</h1>
        <div className='In'>
          <input type="text" placeholder='Ваша почта' />
        </div>
        <div className='In'>
          <input type="password" placeholder='Пароль' />
        </div>
        <div className='continue_button'>
          <button >Продолжить</button>
        </div>
        <p>Нажимая на кнопки “Продолжить”, вы соглашаетесь с политикой конфиденциальности</p>
        <div className='syz'>
          <p>--------------</p>
          <p>Или</p>
          <p>---------------</p>
        </div>
        <VK/>
        <Google/>
        <div className='kan'>
        <Call/>

        </div>
      </div>
    </div>
  );
}

export default Emmail;