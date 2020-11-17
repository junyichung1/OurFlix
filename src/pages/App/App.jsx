import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import List from '../../components/List/List';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import MoviePage from '../MoviePage/MoviePage';
import * as moviesApi from '../../utils/movies-api';
import * as moviesListApi from '../../utils/moviesList-api';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      trendingList: [],
      moviesList: [],
      invalidForm: true,
      formData: {newListName: ''}
    };
  }

  formRef = React.createRef();

  /*--- Callback Methods ---*/
  handleChange = e => {
  const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  handleNewList = async newListData => {
    const newList = await moviesListApi.create(newListData);
    this.setState(state => ({
      moviesList: [...state.moviesList, newList]
    }),
    () => this.props.history.push('/'))
    console.log("This is getting called");
  }

  handleSubmit = e => {
    e.preventDefault();
    const newState = {...this.state.formData}
    this.handleNewList(newState)
  };

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
    console.log("component did mount!");
    const lists = await moviesListApi.getAll();
    this.setState({trendingList: movies, moviesList: lists})
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
              <div>Home Page</div> 
              <List />
              <form ref={this.formRef} onSubmit={this.handleSubmit}>
                <input type="text" name="newListName" value={this.state.formData.newListName} onChange={this.handleChange}/>
                <button type='submit'>Add List</button>
              </form>
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
