import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="page welcome-page" id="welcome-page">
      <h1>Welcome to PopX</h1>
      <p>
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipiscing elit,
      </p>
      <button
        id="btn-create-account"
        className="btn btn-primary"
        onClick={() => navigate('/signup')}
      >
        Create Account
      </button>
      <button
        id="btn-login"
        className="btn btn-secondary"
        onClick={() => navigate('/login')}
      >
        Already Registered? Login
      </button>
    </div>
  );
}

export default Welcome;
