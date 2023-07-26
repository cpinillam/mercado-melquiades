import React from 'react'
import 'aframe';
import {Entity} from 'aframe-react';
import HandsControls from './HandsControls';

function CameraMain() {
  return (
    <Entity id="mainCam" position="0 0.8 7" rotation="-10 0 0">
           <a-camera id="camera" fov="60" drag-controls="objects: .draggable"></a-camera>
           <HandsControls/>
    </Entity>
  )
}

export default CameraMain