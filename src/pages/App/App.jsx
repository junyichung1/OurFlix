import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import PlayList from '../../components/PlayList/PlayList';
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
      formData: {name: '',
      user: userService.getUser()
    }
  };
  this.initialState = {
    formData: {name: '', 
      user: userService.getUser()
  }
    }
  }

  formRef = React.createRef();

  /*--- Callback Methods ---*/

  handleFormReset = () => {
    this.setState(() => this.initialState)
  }

  handleChange = e => {
  const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  handleNewList = async newListData => {
    // newListData.user = userService.getUser(); 
    const newList = await moviesListApi.create(newListData);
    console.log(newListData)
    this.setState(state => ({
      moviesList: [...state.moviesList, newList]
    }),
    () => this.props.history.push('/'))
  }

  handleSubmit = e => {
    e.preventDefault();
    e.target.reset();
    const newState = {...this.state.formData}
    console.log(newState)
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
              <PlayList 
              lists={this.state.moviesList}
              />
              <form ref={this.formRef} onSubmit={this.handleSubmit.bind(this)} onReset={this.handleFormReset}>
                <input type="text" name="name" value={"" || this.state.formData.name} onChange={this.handleChange}/>
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
           moviesList={this.state.trendingList}
           />
        } />
        </Switch>
      </div>
    );
  }
}

export default App;
