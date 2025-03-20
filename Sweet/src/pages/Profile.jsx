
import React from 'react';
import "./Profile.scss";
import VK from '../Components/Vk/VK';
import Google from '../Components/GoogleBtn/Google';
import Email from '../Components/Email/Email';
import Call from '../Components/Call/Call';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <div className='profils container'>
      <div className='profile'>
        <h1>Авторизация</h1>
        <p>Кварк, как следует из совокупности экспериментальных наблюдений, квантуем. Многочисленные расчеты предсказывают</p>
        <VK/>
        <Google/>
        <div className='syz'>
          <p>--------------</p>
          <p>Или</p>
          <p>---------------</p>
        </div>
        <Link to="/emmail">
          <Email/>
        </Link>
        <Call/>
        <p>Нажимая на кнопки “Продолжить”, вы соглашаетесь с политикой конфиденциальности</p>
      </div>
    </div>
  );
}

export default Profile;