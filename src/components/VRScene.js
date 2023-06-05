import React, {useState, useEffect} from 'react';
import { Scene, Entity } from 'aframe-react';
import nature from '../assets/p2_scaled.jpg';
import natureSound from '../assets/forest_sound.mp3';
import useSound from '../utils/sound';

const VRScene = () => {
    const [enteredVR, setEnteredVR] = useState(false);
    useSound(natureSound, enteredVR);

    useEffect(() => {
      const startVR = () => setEnteredVR(true);
      window.addEventListener('click', startVR);
      window.addEventListener('mousemove', startVR);
      return () => {
        window.removeEventListener('click', startVR);
        window.removeEventListener('mousemove', startVR);
      };
    }, []);

    if (!enteredVR) {
      return null;
    }

    return (
        <Scene>
            <a-assets>
                <img id="natureTexture" src={nature} alt="" />
            </a-assets>
            <Entity primitive="a-sky" src="#natureTexture" />
            <Entity primitive="a-camera" look-controls="enabled: true"/>
        </Scene>
    )
};

export default VRScene;
