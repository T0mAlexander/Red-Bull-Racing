import '@google/model-viewer'

const RB15 = () => {
  return (
    <model-viewer
      class='cars__slide'
      src='https://hoottyll.sirv.com/3D%20Cars/RB15.glb'
      alt='RB15'
      auto-rotate
      ar
      shadow-intensity='1'
      camera-controls
      touch-action='pan-y'
      magic-leap>
    </model-viewer>
  )
}

export default RB15