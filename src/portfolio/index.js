import { Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  container: {
    backgroundColor: 'rgba(100, 100, 100, 0.7)',
    borderRadius: 10,
    margin: 30,
    marginTop: 100,
    padding: 40,
  },
})

function Portfolio() {
  const classes = useStyles()
  return <Box className={classes.container}> Portfolio </Box>
}

export default Portfolio
