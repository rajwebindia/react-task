import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Logo from '../../assets/imges/logo-digi.png'; 
import SigninLeft from '../../assets/imges/signin-left-image.png';
import '../SignIn/SignIn.css';
import validUsers from './validUsers.json'; 
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // State for button disabled status

  const handleIdentifierChange = (e) => {
    setIdentifier(e.target.value);
    updateButtonState(e.target.value, password);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    updateButtonState(identifier, e.target.value);
  };

  const updateButtonState = (identifierValue, passwordValue) => {
    setIsButtonDisabled(!(identifierValue.trim() && passwordValue.trim())); // Disable button if either field is empty
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validUser = validUsers.find(user =>
      (user.email === identifier || user.mobileNumber === identifier || user.subscriberID === identifier) &&
      user.password === password
    );

    if (validUser) {
      console.log('Login successful!');
      navigate('/dashboard'); // Navigating to the dashboard
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
      <Row>
        <Col xl={6} style={{ paddingLeft: 0, paddingRight: 0 }}>
          <div className='singin-left' style={{ backgroundImage: `url(${SigninLeft})` }}>
          </div>
        </Col>
        <Col xl={6} style={{ paddingLeft: 0, paddingRight: 0 }}>
          <div className='singin-form'>
            <div className='text-center'>
              <Image src={Logo} alt="Logo"/>
            </div>
            <div className="sing-content">
              <h3>Sign In</h3>
              <p>Welcome back to Woofy! Sign in now to continue exploring your connected details and progress with updated data.</p>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div>
                <label>Mobile Number, Email, or Subscriber ID</label>
                <input
                  type="text"
                  value={identifier}
                  onChange={handleIdentifierChange}
                  required
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <button type="submit" disabled={isButtonDisabled}>Log In</button>
              {error && <p className="error-msg">{error}</p>}
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;