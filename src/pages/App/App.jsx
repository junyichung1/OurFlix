import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import List from '../../components/List/List';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import MoviePage from '../MoviePage/MoviePage';
import * as moviesApi from '../../utils/movies-api'

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      moviesList: [],
    };
  }

  /*--- Callback Methods ---*/
  handleLogout = () => {
    userService.logout();
    this.setState({user: null})
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()})
  }
  /*--- Lifecycle Methods ---*/
  async componentDidMount() {
    const movies = await moviesApi.index()
    this.setState({moviesList: movies})
    console.log(this.state.moviesList.results[0].title)
    console.log(this.state.moviesList.results)
  }

  render() {
    return (
      <div>
        <NavBar 
        user={this.state.user} 
        handleLogout={this.handleLogout}
        />
       
        <Switch>
          <Route exact path='/' render={() =>
          <>
          <List />
           <div>Hello World!</div> 
           <button>Add List</button>
           
           </>
          }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
              
            />
          }/>
          <Route exact path='/login' render={({history}) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path = '/movies' render={() =>
           <MoviePage 
           moviesList={this.state.moviesList}
           />
        } />
        </Switch>
      </div>
    );
  }
}

export default App;
