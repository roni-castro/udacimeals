import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { addRecipe, removeFromCalendar } from '../actions';

class App extends Component {
  selectRecipe = () => {
    this.props.selectRecipe({})
  }

  render() {
    console.log(this.props)
    return (
      <div>
       HELLO WORLD
      </div>
    )
  }
}

function mapDispatachToProps(dispatch) {
  return {
    selectRecipe: (data) => dispatch(addRecipe(data)),
    remove: (data) => dispatch(removeFromCalendar(data)),
  }
}

function mapStateToProps(calendar) {
  return {
    calendar: Object.keys(calendar)
    .map((day) => ({
      day,
      meals: {...calendar[day]}
    }))
  }
}

export default connect(mapStateToProps, mapDispatachToProps)(App);
