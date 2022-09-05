import React from 'react';
import './hero.scss';
import { msgIcon } from 'assests/images';

const Header = () => {
  return (
   <section className='headerSection'>
    <div className='container'>
        <div className='header-content'>
            <h3>Boosting the Film Industry</h3>
            <p>The marketplace for investing in film royalties</p>
        </div>
        {/* <div className='msgIcon-div'>
            <img src={msgIcon} alt='msg icon '/>
        </div> */}
    </div>
   </section>
  )
}

export default Header