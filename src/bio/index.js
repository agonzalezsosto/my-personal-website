import { Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  container: {
    backgroundColor: 'rgba(10, 100, 100, 0.7)',
    borderRadius: 10,
    margin: 30,
    marginTop: 100,
    padding: 40,
  },
})

function Bio() {
  const classes = useStyles()
  return <Box className={classes.container}> Bio </Box>
}

export default Bio
