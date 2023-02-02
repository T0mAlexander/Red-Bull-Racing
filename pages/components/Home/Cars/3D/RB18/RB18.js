import '@google/model-viewer'

const RB18 = () => {
  return (
    <model-viewer
      class='cars__slide'
      src='https://hoottyll.sirv.com/3D%20Cars/RB18.glb'
      alt='RB18'
      auto-rotate
      ar
      shadow-intensity='1'
      camera-controls
      touch-action='pan-y'
      magic-leap>
    </model-viewer>
  )
}

export default RB18