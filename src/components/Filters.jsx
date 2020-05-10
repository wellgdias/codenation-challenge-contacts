import React from "react";

import Button from "./Button";

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "",
      sorted: "",
    };
  }

  handleOnClickSort(event, sortBy) {
    event.preventDefault();

    let order = "asc";
    if (this.state.selected === sortBy) {
      order = "desc" === this.state.sorted ? "asc" : "desc";
    } 

    const contacts = this.props.contactsList;
    contacts.sort(this.compareValues(sortBy, order));
    this.props.setStateApp(contacts);

    this.setState({
      selected: sortBy,
      sorted: order,
    });
  }

  compareValues(key, order = "asc") {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
      }

      const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
      const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return order === "desc" ? comparison * -1 : comparison;
    };
  }

  isActive(option) {
    return option === this.state.selected
      ? "filters__item is-selected"
      : "filters__item";
  }

  isSort(option) {
    let icon = "fas fa-sort-down";
    if (option === this.state.selected) {
      icon =
        this.state.sorted === "asc"
          ? "fas fa-sort-down"
          : "fas fa-sort-up";
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
            />

            <Button
              className="filters__search__icon"
              classNameI="fa fa-search"
            />
          </div>

          <Button
            content="Nome"
            className={this.isActive("name")}
            classNameIcon={this.isSort("name")}
            handleOnClick={(event) => this.handleOnClickSort(event, "name")}
          />
          <Button
            content="País"
            className={this.isActive("country")}
            classNameIcon={this.isSort("country")}
            handleOnClick={(event) => this.handleOnClickSort(event, "country")}
          />
          <Button
            content="Empresa"
            className={this.isActive("company")}
            classNameIcon={this.isSort("company")}
            handleOnClick={(event) => this.handleOnClickSort(event, "company")}
          />
          <Button
            content="Departamento"
            className={this.isActive("department")}
            classNameIcon={this.isSort("department")}
            handleOnClick={(event) =>
              this.handleOnClickSort(event, "department")
            }
          />
          <Button
            content="Data de admissão"
            className={this.isActive("admissionDate")}
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
