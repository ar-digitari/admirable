import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Services from './components/Pages/Services'
import Projects from './components/Pages/Projects'
import Contact from './components/Pages/Contact'

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/services" component={Services} />
					<Route exact path="/projects" component={Projects} />
					<Route exact path="/contact" component={Contact} />
				</Switch>
			</Router>
		</>
	)
}

export default App
