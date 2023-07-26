import 'aframe';
import {Scene} from 'aframe-react';
import BgRoom from './components/enviroment/BgRoom';
import ShoesList from './components/ShoesList';
import CameraMain from './components/ui/CameraMain';
import dataShoes from './data/data';


 function App(){
     return (
       <Scene
         vr-mode-ui="cardboardModeEnabled: true"
         fog="color: #cdcdfe; far: 12; near: 1; density: 0"
         loading-screen="enabled=false"
         >
        <BgRoom />
        <CameraMain/>
        <ShoesList dataShoes={dataShoes}/>
       </Scene>
     );
 }

 export default App