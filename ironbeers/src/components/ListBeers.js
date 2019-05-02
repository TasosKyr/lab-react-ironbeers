import React from "react";
import { Link } from 'react-router-dom'
import Home from "./Home";
import Nav from "./Nav";
import axios from "axios"

const BASE_URL = "https://ironbeerapi.herokuapp.com/beers/all"

class ListBeers extends React.Component {
  state = {
    beers: []
  }
  componentDidMount() {
    axios.get(BASE_URL).then(response => {
      console.log(response.data)
      this.setState({
        beers: response.data
      })
    })
  }

  render() {
    const { image_url, name, tagline, _id, contributed_by } = this.state.beers
    return (
      <div>
        <Nav />
        <ul>
          this.sta
          <li>
            <img src={image_url} alt="" />
            <div className="info">
              <h2>{name}</h2>
              <cite>{tagline}</cite>
              <span>Created by: {contributed_by}</span>
            </div>
          </li>
        </ul>
      </div>
    );
  }
};

export default ListBeers;
