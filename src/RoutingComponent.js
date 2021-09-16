import React from 'react'
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'
import App from './App'
import Banner from './Banner';
import Footer from './Footer';
import './App.css';
import MoviesList from './MoviesList';
const RoutingComponent = () => {
    
    return (
        <div>
        <div className='navBar'>
            <Link  className='link nav'  to='/'>Home: Barre de navigation</Link>
            <Link  className='link' to='/app'>Toute la page</Link>
            <Link className='link'  to='/banner'>En tete de la page</Link>
            <Link className='link'  to='/footer'>Pied de la page</Link>
            <Link className='link'  to='/films'>Liste des films</Link>

        </div>
        <div>
            <Switch>
            <Route exact path='/'></Route>
            <Route exact path='/app' component={App}></Route>
            <Route exact path='/banner' component={Banner}></Route>
            <Route exact path='/footer' component={Footer}></Route>
            <Route exact path='/films' component={MoviesList}></Route>

            </Switch>
        </div>
        </div>
    )
}

export default RoutingComponent
