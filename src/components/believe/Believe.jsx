import React, { Component } from "react";
import "./Believe.css";

export default class Believe extends Component {
  render() {
    return (
      <div className="Believe">
        <section className="Believe-text">
          <h1>Будьте уверенными в завтрашнем дне</h1>
          <p>
            Юристы компании «Юридическое Бюро 812» уже долгие годы ведут
            успешную практику в предоставлении услуг физическим и юридическим
            лицам в различных правовых сферах, решая вопросы любой сложности.{" "}
          </p>
          <div className="Believe-button">
            <button className="btn">Подробнее</button>
          </div>
        </section>

        <section className="Believe-image">
          <img className="image-one"
            src="https://s3-alpha-sig.figma.com/img/fe0c/bfe7/4c86d34f0e832f4e4fe355da5c37573c?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HYHU95WE3UB~SeJHRkYHB4lKTGs2PxOLy~a4BHxnBNVImEND~J0eyVq3fUdtOP0zuKaimUdJxCPwS9lVgZm4Rjhqnnc6g18WK5cSt5t2k8zuGh2fCxkP0b53JhdRTicim1ZUdRR-bxcGncdB2wAvHKv8hv0zSPK1Av51ovPMnmEGhTRQBoF4iHCmRCMi2w80fmtqSAtR2ShNRdy5a2V77dE49zgobs22hhJEZpTi87AMg3UOfqLuyfHg5t9Sz6zfYmTI~4IP2-iYD7Ve1Q-9VIkxLLQZYnXAvpc2wo8VUQCv9J4f1SVlUNfI7IJQRbJNFGldekyja1KpZIa6UuRlGw__"
            alt=""
          />
          <img className="image-two"
            src="https://s3-alpha-sig.figma.com/img/08ab/8b91/88f220034f7c6403e98638ced9a06d63?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dpMeucFdMtsQuI331Srj1oD1-XkDB9yuu1~6eTwhEoI0abvYLxnSavZa37VDibixI0grwYkTUcQaQq6Qpi5aQcwkd71TbNS0IdYrGQXTqJHPVr7EyzCBeAZsumjYmZpWmneClDrpAsgXKbPXaMfCO2Xzep3l4HnFYJwWO5jVbkEycSxC1cEI0ArQNuA8OmhanQOolngcWupQiYcUJQ98ymoLzSEkGeMC1Fikrt9n3Xu5n8dHfsKLR67qR10KrMOeLvTVsQKvx2ex1ZLoo7p1XNpRYRryy0Dqlk02bG3v7TbRKYyR~w2PcDFwViiuIfsNkfCOOYtakbB06-DFZcNjRQ__"
            alt=""
          />
        </section>
      </div>
    );
  }
}
