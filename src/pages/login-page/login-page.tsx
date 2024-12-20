import {Helmet} from 'react-helmet-async';
import Header from '../../components/header/header';
import LocationItemLink from '../../components/location-item-link/location-item-link';
import {AuthorizationStatus, AppRoute} from '../../const';
import {Navigate} from 'react-router-dom';
import {randomizeCity, checkPassword} from '../../utils';
import {ChangeEvent, useState} from 'react';

type LoginPageProps = {
  authorizationStatus: AuthorizationStatus;
}

function LoginPage({authorizationStatus}: LoginPageProps): JSX.Element {
  const [passwordError, setPasswordError] = useState(true);
  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Main} />;
  }
  const randomCity = randomizeCity();

  const handlePasswordChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setPasswordError(checkPassword(evt.target.value));
  };

  return (
    <div className="page page--gray page--login">
      <Header/>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <Helmet>
              <title>Login</title>
            </Helmet>
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" onChange={handlePasswordChange} required />
                {passwordError || <div style={{color: 'red', marginBottom: '20px', fontSize: 'small'}}>The password must consist of at least one letter and number.</div>}
              </div>
              <button className="login__submit form__submit button" type="submit" disabled={!passwordError}>Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <LocationItemLink text={randomCity} isTab={false} isActive/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
