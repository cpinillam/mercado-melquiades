function ShoeItem() {
   

  return (
    <>
      <a-entity id="adidas3"   gltf-model="./assets/models/nike1/scene.gltf"  position="-3.16888 -2.92392 -5.1687" rotation="0 180 0" shadow="cast: true"></a-entity>
      <a-entity id="adidas2" gltf-model="./assets/models/adidas_1/scene.gltf" position="0.2191 1.15 2.52709" scale="2.5 2.5 2.5" shadow="cast: true"></a-entity>
      <a-entity id="adidas1"  gltf-model="./assets/models/adidas_2/scene.gltf" position="1.86245 1.12345 0.31917" scale="2.5 2.5 2.5" shadow="cast: true"></a-entity>
      
      </>
  );
}

export default ShoeItem