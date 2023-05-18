import { NavLink } from 'react-router-dom';

const SplashNav = ({ dark }) => {

    console.log(dark)
 return (
    <nav className={dark ? "splash-nav-d" : "splash-nav"}>
       <ul>
          <li>
             <NavLink to="/">home</NavLink>
          </li>
          <li>
             <NavLink to="/about">about</NavLink>
          </li>
          <li>
             <NavLink to="/products">fonts</NavLink>
          </li>
          <li>
             <NavLink to="/cart">cart</NavLink>
          </li>
       </ul>
    </nav>
 );
};

export default SplashNav;