import React from "react";


class Contact extends React.Component {
  render() {

    const {
      avatar,
      name,
      phone,
      country,
      admissionDate,
      company,
      department,
    } = this.props.data; 

    const data = new Date(admissionDate).toLocaleDateString('pt-br');    

    return (     
      <article className="contact" data-testid="contact">
        <span data-testid="contact-avatar" className="contact__avatar">
          <img src={avatar} alt={name} />
        </span>
        <span data-testid="contact-name" className="contact__data">{name}</span>
        <span data-testid="contact-phone" className="contact__data">{phone}</span>
        <span data-testid="contact-country" className="contact__data">{country}</span>
        <span data-testid="contact-date" className="contact__data">{data}</span>
        <span data-testid="contact-company" className="contact__data">{company}</span>
        <span data-testid="contact-department" className="contact__data">{department}</span>          
      </article>    
    );
  }
}

export default Contact;
