import React from 'react';
import Heading from 'common/headings';
import FilmInfoDetails from 'common/filmInfo';

const FilmMarket = () => {
  return (
    <section className='fimlMaket-section'>
      <div className='container'>
          <Heading
            heading3="Film Market"
          />
          <FilmInfoDetails/>

      </div>
    </section>
  )
}

export default FilmMarket