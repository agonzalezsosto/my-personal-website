import { Box, makeStyles } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Portfolio from './portfolio'
import Bio from './bio'
import Contact from './contact'

const tabNames = [
  { text: 'armando gonzalez', link: '' },
  { text: 'portfolio', link: '/portfolio' },
  { text: 'contact', link: '/contact' },
  { text: 'bio', link: '/bio' },
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
    <Box>
      <Router>
        <Box className={classes.container}>
          {tabNames.map(({ text, link }) => {
            return (
              <Box className={classes.headerElement}>
                <Link to={link}>{text}</Link>
              </Box>
            )
          })}
        </Box>

        <Switch>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/bio">
            <Bio />
          </Route>
        </Switch>
      </Router>
    </Box>
  )
}

export default App

// return (

// )
