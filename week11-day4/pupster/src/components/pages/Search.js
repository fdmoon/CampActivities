import React, { Component } from "react";
import API from "../../utils/API";

class Search extends Component {
  state = {
    search: "",
    results: []
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBreedImages(this.state.search);
  };  

  searchBreedImages = query => {
    console.log(query);
    API.searchList(query)
      .then(res => {
        if(res.data.status === "success") {
          console.log(res.data.message);
          this.setState({ results: res.data.message })
        }
        else {
          this.setState({ results: [] });  
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({ results: [] });
      });
  };

  render() {
    return (
      <div>
        <h1>Search By Breed!</h1>
        <br />
        <input
          onChange={this.handleInputChange}
          value={this.state.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search For a Breed"
          id="search"
        />
        <br />
        <button onClick={this.handleFormSubmit} className="btn btn-primary">
          Search
        </button>
        <br />
        <br />
        {
          this.state.results.length > 0 ?
            this.state.results.map( item => {
              return <img src={item} width="100px" />;
            }) : <p>Not Found</p>
        }
      </div>
    );
  }
}

export default Search;
