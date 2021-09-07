import './Login.css';

import { useState } from 'react'

import Authorization from '../reusableComponents/Authorization/Authorization.js'

function Login({loginUser}) {
  const [userLoginData, setUserLoginData] = useState({
    mail: '',
    password: '',
  });

  function onChangeMail(e) {
    const { value } = e.target
    setUserLoginData({
      mail: value,
      password: userLoginData.password,
    })
  }

  function onChangePassword(e) {
    const { value } = e.target
    setUserLoginData({
      mail: userLoginData.mail,
      password: value,
    })
  }

  function onSubmit(e) {
    e.preventDefault();
    loginUser(userLoginData)
  }

  return (
    <div className="Login">
      <Authorization
        onChangeMail={onChangeMail}
        onChangePassword={onChangePassword}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default Login;

// Login — компонент страницы авторизации.
