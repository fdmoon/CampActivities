import React, { Component } from "react";
import Navpills from "./Navpills";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

class PortfolioContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  showPage = () => {
    console.log(this.state.currentPage);
    switch(this.state.currentPage) {
        case "Home":
          return <Home />;
        case "About":
          return <About />;
        case "Blog":
          return <Blog />;
        case "Contact":
          return <Contact />;
        default:
          return <div />;
    }    
  }

  render() {
    return (
      <div>
        <Navpills
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {/* {
          this.state.currentPage === "Home" ? <Home /> :
            this.state.currentPage === "About" ? <About /> :
              this.state.currentPage === "Blog" ? <Blog /> :
                this.state.currentPage === "Contact" ? <Contact /> : <div />
        } */}
        {this.showPage()}
      </div>
    );
  }
}

export default PortfolioContainer;
