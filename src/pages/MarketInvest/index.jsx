import React from 'react';
import InvestmentNews from './InvestmentNews';
import ActiveListings from './ActiveListing';
import ComingSoonSection from 'pages/Home/ComingSoon';
import Watchlist from 'pages/Home/Watchlist';

const MarketInvest = () => {
  return (
        <>
            <InvestmentNews/>
            <ActiveListings/>
            <ComingSoonSection/>
            <Watchlist/>
        </>
  )
}

export default MarketInvest