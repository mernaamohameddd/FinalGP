import { NavLink } from 'react-router-dom';

const NavItem = (props) => {
  return (
    <NavLink to={props.to} >
        {props.children}
    </NavLink>
  );
};

export default NavItem;
