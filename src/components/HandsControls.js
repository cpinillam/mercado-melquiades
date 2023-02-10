import 'aframe'
import 'aframe-controller-cursor-component'


function HandsControls() {
  return (
    <>
        

        <a-entity oculus-touch-controls="hand: left"></a-entity>
        <a-entity oculus-touch-controls="hand: right" controller-cursor="radius:0.02; color:'#f2f2f2' "></a-entity>


        
        
    </>
  )
}

export default HandsControls