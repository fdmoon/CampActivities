import React, { Component } from "react";
import API from "../../utils/API";

class Discover extends Component {
  state = {
    image: "",
    friendsCount: 0
  };

  componentDidMount() {
    this.getRandomImage();
  }

  getRandomImage = () => {
    API.randomImage()
      .then(res => {
        console.log(res.data);
        this.setState({ image: res.data.message})
      })
      .catch(err => console.log(err));
  }

  handleLikeButton = () => {
    let val = Math.floor(Math.random() * 2);
    if(val === 1) {
      this.setState({ friendsCount: this.state.friendsCount+1})
    }
    this.getRandomImage();
  }

  handleDisikeButton = () => {
    this.getRandomImage();
  }  

  render() {
    return (
      <div>
        <h1>Make New Friends</h1>
        <br />
        <h3>Thumbs up on any pups you'd like to meet!</h3>
        <br />
        <img src={this.state.image} alt="dog" />
        <br />
        <button onClick={this.handleLikeButton}>Like</button>
        <button onClick={this.handleDisikeButton}>Dislike</button>
        <h3>
          Made friends with {this.state.friendsCount} pups so far!
        </h3>
      </div>
    );
  }
}

export default Discover;
