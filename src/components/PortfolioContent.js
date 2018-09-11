import React, { Component } from "react";

import Header from "./Header"
import Summary from "./Summary"
import ContactInfo from "./ConctactInfo"

class PortfolioContent extends Component {
  render() {
    return (
      <div class="portfolio-content">
        <Header />
        <Summary />
        <ContactInfo />
      </div>
    );
  }
}

export default PortfolioContent;
