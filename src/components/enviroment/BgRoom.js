import React from 'react'
import { Entity } from 'aframe-react';



function BgRoom() {

  const AFRAME = window.AFRAME
  

  AFRAME.registerComponent('load-model', {
    init: function () {
      // Wait for model to load.
      this.el.addEventListener('model-loaded', () => {
        // Grab the mesh / scene.
        const obj = this.el.getObject3D('mesh');
        // Go over the submeshes and modify materials we want.
        obj.traverse(node => {
          if (node.name.indexOf('ship') !== -1) {
            node.material.color.set('red');
          }
        });
      });
    }
  });
  return (
    <>
      <a-assets>
        <a-asset-item
          id="vrRoom"
          src="./assets/models/palmera6.gltf"
        ></a-asset-item>
      </a-assets>

      <Entity
        gltf-model="#vrRoom"
        load-model
        position={{ x: 0, y: 2.55, z: 0 }}
        rotation="0 110 0"
        scale= '0.5 0.5 0.5'
        shadow="cast: false"
      />



      <a-entity light="color: #cdcdfe;  type: ambient; intensity: 0.6"></a-entity>
      <a-entity light="intensity: 0.5; castShadow: true;  groundColor: #db3939;  shadowRadius: 5" position="-9.68577 8.7825 1.17569"></a-entity>
      <a-entity light="intensity: 0.5; castShadow:true; color: #cdcdfe" position="11.05306 10.2413 1"></a-entity>
   

      <a-entity geometry="primitive: cylinder; height: 0.54; radius: 0.5;" material="color: #f2f2f2" position="-1.732 0.458 0.41105" shadow=""></a-entity>
      <a-entity geometry="primitive: cylinder; height: 0.54; radius: 0.5;" material="color: #f2f2f2" position="1.8326 0.458 0.32946" shadow=""></a-entity>
      <a-entity geometry="primitive: cylinder; height: 0.54; radius: 0.5;" material="color: #f2f2f2" position="0.21154 0.45814 2.53982" shadow=""></a-entity>


      <a-entity geometry="primitive: cylinder; height: 0.1; radius: 0.5;" material="color: #f2f2f2" position="-1.732 1.9 0.41105" shadow=""></a-entity>
      <a-entity geometry="primitive: cylinder; height: 0.1; radius: 0.5;" material="color: #f2f2f2" position="1.8326 0.9 0.32946" shadow=""></a-entity>
      <a-entity geometry="primitive: cylinder; height: 0.1; radius: 0.5;" material="color: #f2f2f2" position="0.21154 0.9 2.53982" shadow=""></a-entity>



    </>
  );
}

export default BgRoom