import React from "react";
import PropTypes from "prop-types";

import Topbar from "./components/Topbar";
import Filters from "./components/Filters";
import Contacts from "./components/Contacts";

import "./App.scss";

Filters.propTypes = {
  contactsList: PropTypes.array.isRequired,
  setStateApp: PropTypes.func.isRequired,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      contactsList: []
    };
  }

  updateState = (value) => {
    this.setState({
      contactsList: value,
    });
  }

  async componentDidMount() {
    await this.getContacts();
  }

  async getContacts() {
    const url = "https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts";
    const response = await fetch(url);
    const data = await response.json();

    this.setState({
      contacts: data,
      contactsList: data,
    });
  }

  render() {
    return (
      <div className="app" data-testid="app">
        <Topbar />
        <Filters
          contactsList={this.state.contacts}
          setStateApp={this.updateState}
        />
        <Contacts data={this.state.contactsList} />
      </div>
    );
  }
}

export default App;
