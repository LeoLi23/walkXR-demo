import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ShowMuseums from './components/ShowMuseums';
import VRScene from './components/VRScene';

// import other pages as needed

const router = createBrowserRouter([
    {path: '/', element: <LandingPage />},  
    {path: '/museums', element: <ShowMuseums />},  
    {path: '/VRScene', element: <VRScene />}
]);

export default router;