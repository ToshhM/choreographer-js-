var choreographer = new Choreographer({
    animations: [
      { range: [-1, window.innerWidth], selector: '#box', type: 'scale', style: 'height', from: 100, to: 50, unit: 'vh' },
      { range: [-1, window.innerWidth / 2], selector: '#box', type: 'scale', style: 'opacity', from: 0.2, to: 1 },
      { range: [window.innerWidth / 2, window.innerWidth], selector: '#box', type: 'change', style: 'backgroundColor', to: '#00c9ff' },
    ]
  })
  window.addEventListener('mousemove', function(e) {
    choreographer.runAnimationsAt(e.clientX)
  })