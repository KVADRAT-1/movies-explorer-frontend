import './Register.css';

import { useState } from 'react'

import Authorization from '../reusableComponents/Authorization/Authorization.js'

function Register({registerUser}) {
  const [userRegistrationData, setUserRegistrationData] = useState({
    name: '',
    email: '',
    password: '',
  });

  function onChangeName(e) {
    const { value } = e.target
    setUserRegistrationData({
      name: value,
      email: userRegistrationData.email,
      password: userRegistrationData.password,
    })
  }

  function onChangeMail(e) {
    const { value } = e.target
    setUserRegistrationData({
      name: userRegistrationData.name,
      email: value,
      password: userRegistrationData.password,
    })
  }

  function onChangePassword(e) {
    const { value } = e.target
    setUserRegistrationData({
      name: userRegistrationData.name,
      email: userRegistrationData.email,
      password: value,
    })
  }

  function onSubmit(e) {
    e.preventDefault();
    registerUser(userRegistrationData)
  }

  return (
    <div className="Register">
      <Authorization
        onChangeName={onChangeName}
        onChangeMail={onChangeMail}
        onChangePassword={onChangePassword}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default Register;

// Register — компонент страницы регистрации.