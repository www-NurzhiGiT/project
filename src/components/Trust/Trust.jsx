import React, { Component } from "react";
import "./Trust.css";

export default class Trust extends Component {
  render() {
    return (
      <div className="Trust">
        <div className="Trust-Trust">
          <section className="Top">
            <h4>Преимущества</h4>
            <h1>Почему доверяют</h1>
            <p>
              Более 10 000 клиентов доверили нашему агентству страхование
              транспортных средств
            </p>
          </section>
          <section className="Bottom">
            <div className="Bottom-text">
              <div className="text">
                <h3>%</h3>
              </div>
              <div className="text-one">
                <h1>Помощь при ДТП</h1>
                <p>
                  Если у вас случилось ДТП - просто позвоните нам и мы подскажем
                  порядок действий
                </p>
              </div>
            </div>
            <div className="Bottom-text">
              <div className="text">
                <h3>%</h3>
              </div>
              <div className="text-two">
                <h1>Юридическое сопровождение</h1>
                <p>
                  Представительство в суде, юридические консультации даже по
                  сымым сложным вопросам
                </p>
              </div>
            </div>
            <div className="Bottom-text">
              <div className="text">
                <h3>%</h3>
              </div>
              <div className="text-three">
                <h1>Скидки постоянным клиентам</h1>
                <p>Накопительная система скидок. Получите выгоду до 80%</p>
              </div>
            </div>
            <div className="Bottom-text">
              <div className="text">
                <h3>%</h3>
              </div>
              <div className="text-four">
                <h1>Доставка полиса на дом</h1>
                <p>Доставим полис на дом в любое удобное для вас время</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
