const sketch = (p) => {
  p.setup = () => {
    const canvas = document.getElementById('canvas-container')
    p.createCanvas(canvas.offsetWidth, canvas.offsetHeight)
  }

  p.draw = () => {
    p.fill(255, p.frameCount % 255, 0)
    p.circle(p.mouseX, p.mouseY, 100)
  }
}

export default sketch
