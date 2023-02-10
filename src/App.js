import 'aframe';
import {Entity, Scene} from 'aframe-react';
import BgRoom from './components/BgRoom';
import HandsControls from './components/HandsControls';
import ShoeItem from './components/ShoeItem';
import './css/main.css'

 function App(){
     return (
       <Scene
         vr-mode-ui="cardboardModeEnabled: true"
         fog="color: #cdcdfe; far: 12; near: 1; density: 0"
         loading-screen="dotsColor: #cdcdfe; backgroundColor: #cdcdfe"
         >
         
         <BgRoom />
         <Entity id="mainCam" position="0 0.8 7" rotation="-10 0 0">
           <a-camera id="camera" fov="60" drag-controls="objects: .draggable"></a-camera>
           <HandsControls/>
         </Entity>

         <ShoeItem/>
        
        
          <a-entity geometry="primitive: cylinder; height: 0.54; radius: 0.5;" material="color: #f2f2f2" position="-1.732 0.458 0.41105" shadow=""></a-entity>
          <a-entity geometry="primitive: cylinder; height: 0.54; radius: 0.5;" material="color: #f2f2f2" position="1.8326 0.458 0.32946" shadow=""></a-entity>
          <a-entity geometry="primitive: cylinder; height: 0.54; radius: 0.5;" material="color: #f2f2f2" position="0.21154 0.45814 2.53982" shadow=""></a-entity>


          <a-entity geometry="primitive: cylinder; height: 0.1; radius: 0.5;" material="color: #f2f2f2" position="-1.732 0.9 0.41105" shadow=""></a-entity>
          <a-entity geometry="primitive: cylinder; height: 0.1; radius: 0.5;" material="color: #f2f2f2" position="1.8326 0.9 0.32946" shadow=""></a-entity>
          <a-entity geometry="primitive: cylinder; height: 0.1; radius: 0.5;" material="color: #f2f2f2" position="0.21154 0.9 2.53982" shadow=""></a-entity>

        
       </Scene>
     );
 }

 export default App