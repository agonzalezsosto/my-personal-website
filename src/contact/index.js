import { Box, makeStyles } from '@material-ui/core'
import p5 from 'p5'
import { useEffect } from 'react'
import Sketch from './sketch'

const useStyles = makeStyles({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
})

function Contact() {
  const classes = useStyles()

  useEffect(() => {
    new p5(Sketch)
  }, [])

  return <Box className={classes.container} id="canvas-container" />
}

export default Contact
