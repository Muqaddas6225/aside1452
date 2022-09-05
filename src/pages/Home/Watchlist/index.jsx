import React from 'react'
import WatchistHeading from 'common/watchlistHeading'
import '../../../styles/home/Watchlist.scss';
import FilmInfoDetails from 'common/filmInfo';
// import '../../../styles/common/filmInfo.scss'
// import Accordion from 'react-bootstrap/Accordion';
// import {deleteIcon, listImg, listChart} from '../../../assests/images/index'

const Watchlist = () => {
  return (
    <section>
        <div className='container'>
            <div>
               <WatchistHeading
                heading3= 'My watchlist'
                watchlistPara = 'Here you can find all the catalogues and indexes you saved.'
               />
                <FilmInfoDetails/>
             
            </div>
        </div>
    </section>
  )
}

export default Watchlist