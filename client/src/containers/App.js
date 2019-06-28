
// client/src/App.js
import React, { Component } from "react";
import axios from "axios";

import { BrowserRouter as Router } from 'react-router-dom'
import Routes from '../components/Routes'
import Layout from '../components/Layout/Layout'

import './App.module.css'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: '',
        email: '',
        password: '',
        _id: ''
      },
      tasks: [],
      selectedTask: {},
      loggedIn: false,
      userMenuOpen: false,
      message: '',
      error: '',
    }
  };

  componentDidMount() {
    if (this.state.loggedIn === true) {
      this.getUser()
      this.getTasks()
    }
  }

  handleUserMenuOpen = () => {
    this.setState({ userMenuOpen: true })
  };

  handleUserMenuClose = () => {
    this.setState({ userMenuOpen: false })
  };

  handleNewTask = (e) => {
    const task = {
      description: e.target.name === 'description' ? e.target.value : this.state.task.description
    }

    this.setState({ task })

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    })
    )

  }

  handleDeleteTask = async (e, taskId) => {

    e.preventDefault()

    await axios.delete('/tasks/' + taskId)
      .then(res => {
        this.setState({ message: "Good" })
      })
      .catch(e => {
        this.setState({ message: "Not good" })
      })

      this.getTasks()
  }

  handleModifyTask = async (e, data) => {

    e.preventDefault()

    await axios.patch('/tasks/' + data._id, {description: data.description})
      .then(res => {
        this.setState({ message: "Good" })
      })
      .catch(e => {
        this.setState({ message: "Not good" })
      })

      this.getTasks()
  }

  handlePostRequest = async (e, path, data) => {
    e.preventDefault();

    await axios.post(path, data)
      .then(res => {
        this.setState({ message: "Good" })
      })
      .catch(e => {
        this.setState({ message: "Not good" })
      })

    this.getUser()
    this.getTasks()
  }

  handleDeleteUser = async (e) => {
    e.preventDefault();
    await axios.delete('/users/me')
    .then(res => {
      this.setState({ message: "Good" })
    })
    .catch(e => {
      this.setState({ message: "Not good" })
    })

    this.getUser()

  }

  getTasks = async () => {
    const reqTask = await axios.get("/tasks")
    this.setState({ tasks: reqTask.data })
  }

  getUser = async () => {
    try {
      const reqUser = await axios.get("/users/me")
      this.setState({ user: reqUser.data, loggedIn: true })
    } catch (error) {
      error.response.status === 401 ? this.setState({ user: {}, tasks: [], loggedIn: false, userMenuOpen: false }) : console.log(error)
    }
  }

  render() {
    return (
      <Router>
        <Layout
          user={this.state.user}
          loggedIn={this.state.loggedIn}
          handlePostRequest={this.handlePostRequest}
          handleUserMenuClose={this.handleUserMenuClose}
          handleUserMenuOpen={this.handleUserMenuOpen}
          userMenuOpen={this.state.userMenuOpen}
          handleDeleteUser={this.handleDeleteUser}
        >
          <Routes
            handlePostRequest={this.handlePostRequest}
            handleNewTask={this.handleNewTask}
            user={this.state.user}
            tasks={this.state.tasks}
            loggedIn={this.state.loggedIn}
            handleSelectTask={this.handleSelectTask}
            handleDeleteTask={this.handleDeleteTask}
            handleModifyTask={this.handleModifyTask}
          />
        </Layout>
      </Router>
    )

  }
}

export default App;
