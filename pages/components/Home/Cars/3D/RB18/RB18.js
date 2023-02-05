import '@google/model-viewer'

const RB18 = () => {
  const Car3DView = {
    height: '100%',
    width: '100%',
    outline: 'none',
    opacity: 1,
    visibility: 'visible'
  }

  return (
    <model-viewer
      style={Car3DView}
      class='car3D'
      src='https://hoottyll.sirv.com/3D%20Cars/Red%20Bull%20RB18.glb'
      alt='RB18'
      ar-modes='webxr scene-viewer quick-look fallback'
      ar-scale='auto'
      quick-look-browsers='safari chrome'
      preload
      autoplay
      play
      disable-pan
      auto-rotate
      auto-rotate-delay='1500'
      camera-controls
      background-color='transparent'
      poster
      camera-target='auto auto auto'
      camera-orbit='34deg 74deg auto'
      min-camera-orbit='auto 74deg 28deg'
      max-camera-orbit='auto 74deg 28deg'
      min-field-of-view='28deg'
      max-field-of-view='28deg'
      field-of-view='35deg'
      shadow-intensity='1.5'
      shadow-softness='1'
      stage-light-intensity='3'
      environment-intensity='3'
      ar-status='not-presenting'>
    </model-viewer>
  )
}

export default RB18