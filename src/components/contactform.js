import React, {Component} from 'react';
import 'rc-notification/assets/index.css';
import Notification from 'rc-notification';
import $ from 'jquery';

function validate(contactName, contactEmail, contactMessage) {
  // true means invalid, so our conditions got reversed
  return {
    contactName: contactName.length === 0,
    contactEmail: contactEmail.length === 0,
    contactMessage: contactMessage.length === 0
  };
}

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      contactName: '',
      contactEmail: '',
      contactMessage: ''
    }

    this.handleSubmit = this
      .handleSubmit
      .bind(this);
    this.handleNameChange = this
      .handleNameChange
      .bind(this);
    this.handleEmailChange = this
      .handleEmailChange
      .bind(this);
    this.handleMessageChange = this
      .handleMessageChange
      .bind(this);
    this.errorFn = this
      .errorFn
      .bind(this);
    this.successFn = this
      .successFn
      .bind(this);
  }

  errorFn() {
    let notification = null;
    Notification.newInstance({}, (n) => notification = n);
    notification.notice({
      content: <span>Извините, произошла ошибка при отправке</span>,
      style: {
        'top': '10vw',
        'right': '25vw',
        'background': '#e4343493',
        'color': 'red'
      }
    });
  }

  successFn() {
    let notification = null;
    Notification.newInstance({}, (n) => notification = n);
    notification.notice({
      content: <span>Ваше сообщение отправлено, спасибо.</span>,
      style: {
        'top': '10vw',
        'right': '25vw',
        'background': '#36eb4e93',
        'color': 'green'
      }
    });
  }

  handleNameChange(event) {
    this.setState({contactName: event.target.value});
  }

  handleEmailChange(event) {
    this.setState({contactEmail: event.target.value});
  }

  handleMessageChange(event) {
    this.setState({contactMessage: event.target.value});
  }

  canBeSubmitted() {
    const errors = validate(this.state.contactName, this.state.contactEmail, this.state.contactMessage);
    const isDisabled = Object
      .keys(errors)
      .some(x => errors[x]);
    return !isDisabled;
  }

  handleSubmit(event) {

    if (!this.canBeSubmitted()) {
      evt.preventDefault();
      return;
    }

    event.preventDefault();

    let url = this.props.url


    $.ajax({

      url: url,
      type: 'POST',
      data: {

        "form_name": this.state.contactName,
        "form_email": this.state.contactEmail,
        "form_msg": this.state.contactMessage
      },
      cache: false,
      success: function (data) {

        this.setState({contactName: '', contactEmail: '', contactMessage: ''});

        this.successFn()

      }.bind(this),

      error: function (xhr, status, err) {

        this.errorFn()

      }.bind(this)

    });

  }

  render() {

    const errors = validate(this.state.contactName, this.state.contactEmail, this.state.contactMessage);
    const isDisabled = Object
      .keys(errors)
      .some(x => errors[x])

    return (

      <div className="col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
        <div className="panel panel-success">
          <div className="panel-body">
            <form
              id="contactForm"
              method="POST"
              action="mailer.php"
              onSubmit={this.handleSubmit}>
              <fieldset className="form-group">
                <input
                  type="text"
                  required="required"
                  className="form-control"
                  placeholder="Введите ваше имя"
                  value={this.state.contactName}
                  id="form_name"
                  onChange={this.handleNameChange}/>
              </fieldset>

              <fieldset className="form-group">
                <input
                  name="email"
                  required="required"
                  className="form-control"
                  placeholder="Введите ваш email"
                  value={this.state.contactEmail}
                  id="form_email"
                  type="email"
                  onChange={this.handleEmailChange}/>
              </fieldset>

              <fieldset className="form-group">
                <textarea
                  name="message"
                  rows="4"
                  minLength="10"
                  maxLength="300"
                  required="required"
                  className="form-control"
                  placeholder="Введите сообщение"
                  value={this.state.contactMessage}
                  id="form_msg"
                  onChange={this.handleMessageChange}></textarea>
              </fieldset>
              <button
                type="submit"
                value="Submit"
                className="btn btn-primary btn-lg center-block"
                id="btn-submit">
                Отправить</button>

            </form>
          </div>
        </div>
      </div>

    );
  }
}

export default ContactForm;