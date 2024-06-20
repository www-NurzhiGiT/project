import React, { Component } from "react";
import "./HeroTop.css";
import { TiArrowRight } from "react-icons/ti";

export default class HeroTop extends Component {
  render() {
    return (
      <div className="Hero-Top">
        <div className="image">
          <img
            src="https://s3-alpha-sig.figma.com/img/1705/b256/4567683166c89b79bb18eb648398c0f4?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iAbI0~rjObPjkn2jvWw3CrBdFy9jaSpPi520ybjakr-7ncNPFW45bPoK~cSazsHBIQSgUV0bR9e1613E4kdpE0mIHmw2FmetyJooTKOaNMwaiNjb65~byT6r~-eOr1OTIL4ZegZT9yfILnYgVYN-kbCi-VH4CxGxtey9yFQ99--eV~PDw9nNWCqP90qQRdAKKIz11~dySBweVbYqpzdGaEPd5pxgDUdQn84M3kbiV5q5kkXHEtq8dY6eymSXW7kWXB-ZecciWY7SBJV6ZOEU1OF8vJI-q5tybsoyE2wTjzUXjGGVFe15k~c4pfkWXd0KcJml-Gfk678TKz2OYh9jDw__"
            alt=""
          />
        </div>
        <div className="hero-title">
          <h1>Страхование вашего автомобиля</h1>
          <p>
            КАСКО, ОСАГО и другие виды страхования имущества и транспортных
            средств
          </p>
          <div className="hero-btn">
            <button className="btn">
              Застраховать
              <i>
                <TiArrowRight />
              </i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
