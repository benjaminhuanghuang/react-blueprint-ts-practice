import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { login } from '../../api/auth';
import { Link } from 'react-router-dom';
import { useSession } from '../../UserProvider';

//
import "./LoginView.scss" 


function LoginView(props) {
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setLoading] = useState(false);
  const {setToken} = useSession();

  // after login and get user information from API,
  // redirect user to default page based on user's role
  const routeOnLogin = async (token) => {
    //const token = await user.getIdTokenResult();
    const isAdmin = false; // token.claims.admin
    if (isAdmin) {
      props.history.push('/user-home');
    } else {
      props.history.push(`/admin-home`);
    }
  };

  const onSubmit = async (data) => {
    let token;
    setLoading(true);
    try {
      token = await login(data);
      setToken(token)
      reset();
    } catch (error) {
      console.log(error);
    }

    if (token) {
      routeOnLogin(token);
    } else {
      setLoading(false);
    }
  };

  const formClassName = `ui form ${isLoading ? 'loading' : ''}`;

  return (
    <div className="login-container">
      <div className="ui card login-card">
        <div className="content">
          <form className={formClassName} onSubmit={handleSubmit(onSubmit)}>
            <div className="field">
              <label>
                Email
                <input
                  // type="email"  I don't want UI validation here
                  name="email"
                  placeholder="Email"
                  ref={register}
                />
              </label>
            </div>
            <div className="field">
              <label>
                Password
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  ref={register}
                />
              </label>
            </div>
            <div className="field actions">
              <button className="ui primary button login" type="submit">
                Login
              </button>
              or
              <Link to="/signup">Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginView;
