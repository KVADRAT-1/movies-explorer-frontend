import './Register.css';

import Authorization from '../reusableComponents/Authorization/Authorization.js'

function Register({registerUser}) {
  return (
    <div className="Register">
      <Authorization
        registerUser={registerUser}
      />
    </div>
  );
}

export default Register;

// Register — компонент страницы регистрации.