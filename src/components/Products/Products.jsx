import React, { Component } from "react";
import "./Products.css";

export default class Products extends Component {
  render() {
    return (
      <div className="Products">
        <div className="Product">
          <section className="Product-Top">
            <h1>Выберите продукт</h1>
            <p>
              Подберите страховой продукт, который наилучшим образом подойдёт
              именно Вам
            </p>
          </section>
          <section className="Product-Bottom">
            <div className="one">
              <p>ОСАГО</p>
              <h4>от 2890 ₽</h4>
              <div>
                <button className="btn">Заказать</button>
              </div>
            </div>
            <div className="two">
              <p>КАСКО</p>
              <h4>от 12 690 ₽</h4>
              <div>
                <button className="btn">Заказать</button>
              </div>
            </div>
            <div className="three">
              <p>Защита стёкол</p>
              <h4>1990 ₽</h4>
              <div>
                <button className="btn">Заказать</button>
              </div>
            </div>
            <div className="four">
              <p>Страхование жизни</p>
              <h4>
                450р <del>890 ₽</del>
              </h4>
              <div>
                <button className="btn">Заказать</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
