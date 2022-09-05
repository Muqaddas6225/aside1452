import React from 'react';
import Fermentum from './Fermentum';
import Status from './Status';
import RatrumRisus from './RetrumRisus';
import MediaGallery from './MediaGallery';
import ProjectOverview from './ProjectOverview';
import IndividualNews from './IndividualNews';
import Calendar from './Calender';
import ListingManagment from './ListingManagment';
import PressKit from './PressKit';

const IndividualListing = () => {
  return (
   <>
    <Fermentum/>
    <Status/>
    <RatrumRisus/>
    <PressKit/>
    <MediaGallery/>
    <ProjectOverview/>
    <Calendar/>
    <IndividualNews/>
    <ListingManagment/>
   </>
  )
}

export default IndividualListing