import './Login.css';

import Authorization from '../reusableComponents/Authorization/Authorization.js'

function Login({loginUser}) {
  return (
    <div className="Login">
      <Authorization
        loginUser={loginUser}
      />
    </div>
  );
}

export default Login;

// Login — компонент страницы авторизации.
