import React, { Component } from "react";
import "./OrderCall.css";

export default class OrderCall extends Component {
  render() {
    return (
      <div className="OrderCall">
        <section className="section">
          <div className="top">
            <h1>Закажите прямо сейчас</h1>
            <p>Оставьте заявку и мы сами свяжемся с Вами.</p>
          </div>

          <div className="bottom">
            <div className="tel">
              <input type="tel" placeholder="+7 (000) 000-0000" />
              <button>Оставить заявку</button>
            </div>
            <p>
              Оставляя заявку, вы соглашаетесь на обработку персональных данных
              и с условиями бронирования счёта
            </p>
          </div>
        </section>
      </div>
    );
  }
}
