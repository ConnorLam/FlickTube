
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import UploadVideo from '../Video/CreateVideo/UploadVideo';
import ProfileButton from './ProfileButton';
// import 'videoplayback.mp4'
import './NavBar.css'
import { useSelector } from 'react-redux';

const NavBar = () => {
  
  const user = useSelector(state => state.session.user)
  console.log(user)

  let session;
  if(!user){
    session = (
      <nav>
        <div>
          <NavLink to='/login' exact={true}>Log In</NavLink>
        </div>
        <div>
          <NavLink to='/sign-up' exact={true}>Sign Up</NavLink>
        </div>
      </nav>
    )
  } else {
    session = (
      <div>
        <ProfileButton user={user}/>
      </div>
    )
  }

  return (
    <>
      <nav className='whole-nav'>
          <div>
            <NavLink to='/' exact={true} activeClassName='active'>
              DropShotz
            </NavLink>
          </div>
          {session}

          {/* <div>
            search bar
          </div> */}
          {/* <div>
            <NavLink to='/login' exact={true} activeClassName='active'>
              Login
            </NavLink>
          </div>
          <div>
            <NavLink to='/sign-up' exact={true} activeClassName='active'>
              Sign Up
            </NavLink>
          </div> */}
          {/* <div>
            <NavLink to='/users' exact={true} activeClassName='active'>
              Users
            </NavLink>
          </div> */}
          {/* <div>
            <LogoutButton />
          </div>
          <div>
            <NavLink to='/upload-video' exact={true}>Upload Video</NavLink> */}
            {/* <UploadVideo /> */}
          {/* </div> */}
      </nav>
      {/* <div className='navbar-spacer'></div> */}
    </>
  );
}

export default NavBar;
