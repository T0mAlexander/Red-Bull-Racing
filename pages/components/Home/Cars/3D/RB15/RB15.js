import '@google/model-viewer'

const RB15 = () => {
  const Car3DView = {
    height: '100%',
    width: '100%'
  }

  return (
    <model-viewer
      style={Car3DView}
      class='car3D'
      src='https://hoottyll.sirv.com/3D%20Cars/Red%20Bull%20RB15.glb'
      alt='RB15'
      auto-rotate
      ar
      disable-pan
      camera-controls
      touch-action='pan-y'
      magic-leap
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
      disable-zoom
      ar-status='not-presenting'>
    </model-viewer>
  )
}

export default RB15