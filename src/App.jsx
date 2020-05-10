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

// To-do
// Loading da pagina no carregamento da api - exemplo rick morty
// filtro ao digitar https://www.w3schools.com/howto/howto_js_autocomplete.asp
//isolar metodos utils - pesquisar e ordenação


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
    };
  }

  updateState = (value) => {
    this.setState({
      contacts: value,
    });
  }

  async componentDidMount() {
    await this.getContacts();
  }

  async getContacts() {
    const url = "https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts";
    const response = await fetch(url);
    const data = await response.json();

    this.updateState(data);
  }

  render() {
    return (
      <React.Fragment>
        <Topbar />
        <Filters
          contactsList={this.state.contacts}
          setStateApp={this.updateState}
        />
        <Contacts data={this.state.contacts} />
      </React.Fragment>
    );
  }
}

export default App;
