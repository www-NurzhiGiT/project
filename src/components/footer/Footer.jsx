import React, { Component } from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";

import { BsCcCircle } from "react-icons/bs";

export default class Footer extends Component {
  render() {
    return (
      <div className="footerContainer">
        <div className="border">
          <div className="sicons">
            <div className="socialIcons">
              <a href="">
                <FaFacebook />
              </a>
            </div>
            <div className="socialIcons">
              <a href="">
                <FaInstagram />
              </a>
            </div>
            <div className="socialIcons">
              <a href="">
                <FaTwitter />
              </a>
            </div>
            <div className="socialIcons">
              <a href="">
                <SlSocialVkontakte />
              </a>
            </div>
          </div>

          <div className="ul">
            <ul>
              <li>О компании</li>
              <li>Новости</li>
              <li>Помощь</li>
              <li>Контакты</li>
            </ul>
          </div>

          <div className="ff-text">
            <p className="pp">
              <BsCcCircle />
            </p>
            <p>2020 Название компании</p>
          </div>
        </div>
      </div>
    );
  }
}
