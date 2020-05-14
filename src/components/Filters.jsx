import React from "react";

import Button from "./Button";

import compareValues from "../utils/compareValues";

import "./Filters.scss";

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "",
      sorted: "",
    };
  }

  handleOnChangeFilter(event) {
    event.preventDefault();
    const contacts = this.props.contactsList;
    const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(event.target.value.toLowerCase()));    
    this.props.setStateApp(filteredContacts);
  }

  handleOnClickSort(event, sortBy) {
    event.preventDefault();

    let order = "asc";
    if (this.state.selected === sortBy) {
      order = "desc" === this.state.sorted ? "asc" : "desc";
    }

    const contacts = this.props.contactsList;
    contacts.sort(compareValues(sortBy, order));
    this.props.setStateApp(contacts);

    this.setState({
      selected: sortBy,
      sorted: order,
    });
  }

  isSelected(option) {
    return option === this.state.selected
      ? "filters__item is-selected"
      : "filters__item";
  }

  isSort(option) {
    let icon = "fas fa-sort-down";
    if (option === this.state.selected) {
      icon =
        this.state.sorted === "asc" ? "fas fa-sort-down" : "fas fa-sort-up";
    }
    return icon;
  }

  render() {
    return (
      <div className="container" data-testid="filters">
        <section className="filters">
          <div className="filters__search">
            <input
              type="text"
              className="filters__search__input"
              placeholder="Pesquisar"
              onChange={(event) => this.handleOnChangeFilter(event)}
            />

            <Button
              className="filters__search__icon"
              classNameIcon="fa fa-search"              
            />
          </div>

          <Button
            content="Nome"
            className={this.isSelected("name")}
            classNameIcon={this.isSort("name")}
            handleOnClick={(event) => this.handleOnClickSort(event, "name")}
          />
          <Button
            content="País"
            className={this.isSelected("country")}
            classNameIcon={this.isSort("country")}
            handleOnClick={(event) => this.handleOnClickSort(event, "country")}
          />
          <Button
            content="Empresa"
            className={this.isSelected("company")}
            classNameIcon={this.isSort("company")}
            handleOnClick={(event) => this.handleOnClickSort(event, "company")}
          />
          <Button
            content="Departamento"
            className={this.isSelected("department")}
            classNameIcon={this.isSort("department")}
            handleOnClick={(event) =>
              this.handleOnClickSort(event, "department")
            }
          />
          <Button
            content="Data de admissão"
            className={this.isSelected("admissionDate")}
            classNameIcon={this.isSort("admissionDate")}
            handleOnClick={(event) =>
              this.handleOnClickSort(event, "admissionDate")
            }
          />
        </section>
      </div>
    );
  }
}

export default Filters;
