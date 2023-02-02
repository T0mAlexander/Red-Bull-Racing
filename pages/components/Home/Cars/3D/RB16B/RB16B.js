import '@google/model-viewer'

const RB16B = () => {
  return (
    <model-viewer
      class='cars__slide'
      src='https://hoottyll.sirv.com/3D%20Cars/RB16B.glb'
      alt='RB16B'
      ar
      ar-status='not-presenting'
      quick
      auto-rotate
      ar-modes='scene-viewer quick-look'
      camera-controls
      background-color='transparent'
      auto-rotate-delay='3000'
      camera-target='auto auto auto'
      camera-orbit='34deg 74deg auto'
      min-camera-orbit='auto 74deg 28deg'
      max-camera-orbit='auto 74deg 28deg'
      min-field-of-view='28deg'
      max-field-of-view='28deg'
      field-of-view='35deg'
      shadow-intensity='2'
      shadow-softness='1'
      stage-light-intensity='3'
      environment-intensity='3'
      disable-zoom='true'
      touch-action='pan-y'
      magic-leap>
    </model-viewer>
  )
}

export default RB16B