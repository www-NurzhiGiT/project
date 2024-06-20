import React, { Component } from "react";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">Страхование онлайн</div>
        <div className="menu">
          <ul>
            <li>О компании</li>
            <li>Новости</li>
            <li>Помощь</li>
            <li>Отзывы</li>
            <li>Контакты</li>
          </ul>
          <div className="menu-number">
            <p>Служба продаж </p>
            <h3>+7495 123-45-67</h3>
          </div>
          <div className="menu-btn">
            <button className="btn">Заказать онлайн</button>
          </div>
        </div>
      </div>
    );
  }
}
