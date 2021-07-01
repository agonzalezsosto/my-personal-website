import { Box, makeStyles } from '@material-ui/core'

const tabNames = [
  'armando gonzalez',
  'portfolio',
  'contact',
  'bio',
  'my dogs bio',
]

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: 100,
  },
  headerElement: {
    marginLeft: 20,
    fontSize: 30,
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
})

function App() {
  const classes = useStyles()

  return (
    <Box className={classes.container}>
      {tabNames.map((item) => {
        return (
          <Box
            className={classes.headerElement}
            onClick={() => {
              console.log(item)
            }}
          >
            {item}
          </Box>
        )
      })}
    </Box>
  )
}

export default App
