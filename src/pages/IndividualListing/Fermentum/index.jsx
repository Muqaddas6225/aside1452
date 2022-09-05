import React from 'react';
import '../../../styles/Individuallisting/fermentum.scss';
import { Star, loading } from 'assests/images';

const Fermentum = () => {
  return (
   <section className='fermentum-section' >
   <div className='container'>
        <div className='fermentum-content'>
            <span className='fermentum-loading'><img src={loading}  alt='fermentum'/></span>
            {/* <div className='fermentum-desc' > */}
                <h3>Rutrum risus, fermentum</h3>
                <button>Invest Now</button>
                <span className='fermentum-star'><img src={Star}  alt='fermentum'/></span>
            {/* </div> */}
        </div>
   </div>
   </section>
  )
}

export default Fermentum