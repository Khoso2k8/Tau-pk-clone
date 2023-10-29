import { Link } from 'react-router-dom';

function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <img src="image/logo.png" alt="" className="logo-image" />
      </Link>
    </div>
  );
}

export default Logo;
