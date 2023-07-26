

function ShoeItem(props) {
  const {shoe} = props;


   function handleClick() {
    console.log('click');
   }

  return (
    <>
      <a-entity
        id={shoe.id}
        gltf-model={shoe.model}
        position={shoe.position}
        rotation={shoe.rotation}
        scale={shoe.scale}
        shadow="cast: true"
        load-model
        events={{
          click: () => handleClick(),
      }}
      ></a-entity>
    </>
  );
}

export default ShoeItem