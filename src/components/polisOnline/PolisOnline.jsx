import React, { Component } from "react";
import "./PolisOnline.css";

export default class PolisOnline extends Component {
  render() {
    return (
      <div className="PolisOnline">
        <div className="conteiner">
          <div className="polis">
            <h1>Закажи полис онлайн</h1>
            <p>Заполните форму и закажите полис</p>
          </div>
          <form className="form-in" action="">
            <input className="inputt" type="text" placeholder="Ваша Имя" />
            <input
              className="inputt"
              type="tel"
              placeholder="+7 (000) 000-0000"
            />
            <input className="inputt" type="E-mail" placeholder="E-mail" />
            <p>Какой полис вас интересует</p>
            <div className="radi">
              <input className="inp" type="radio" /> <p>КАСКО</p>
            </div>
            <div className="radi">
              <input className="inp" type="radio" /> <p>ОСАГО</p>
            </div>
            <div className="radi">
              <input className="inp" type="radio" /> <p>Страхование жизни</p>
            </div>
            <div className="div-button">
              <button className="btn">Заказать полис</button>
              <p>
                Оставляя заявку, вы соглашаетесь на обработку персональных
                данных и с условиями бронирования счёта
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
