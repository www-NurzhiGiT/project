import React, { Component } from "react";
import "./Review.css";

export default class Review extends Component {
  render() {
    return (
      <div className="Review">
        <section className="section">
          <div className="title">
            <h1>Отзывы</h1>
            <p>
              Продавать больше - это все, что нужно, чтобы направлять
              посетителей через правильные шаги
            </p>
          </div>
          <div className="comments">
            <div className="comment-one">
              <img
                src="https://s3-alpha-sig.figma.com/img/459f/eb99/82fc86f60927826cf542145d5e5dcb23?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZMxYR9uHHtmBhQja~TeGWynnthYksRDm1OPRXZ22f1pkjVc6V6INauAyYZdpiitxsjP1Sr4gGB60rlK9zKb31s8ZKDBX9nw8L9VkEnsEcmIuaphYBt7rfktxFVZSggxaeN0D5NXtwyGplJQYZhExgd6amdQPLiCJPLKz1GGx4sji1gnLwSI3aja6aGH6qP2fDosdOi28sp~HSYZ4sJtkPydmFoj4W3oxYzklCqEK0LZMUVcfWUbvu2lk5S6lv5ueGAbQOdc~nIlkgh2yym7TGeRV3XsxmT9VLeMtjIA8lwZu1w-rXvOMdu4cXlOtZ6GcpzWgtfhMjJp~Rs0iHUUIig__"
                alt="img"
              />
              <p className="p">
                Это супер крутая инструкция и вы делаете очень полезную вещь 🙂
                Спасибо ❤️
              </p>
              <p className="pp">Юрий Ставничий</p>
              <p className="ppp">фотограф</p>
            </div>
            <div className="comment-two">
              <img
                src="https://s3-alpha-sig.figma.com/img/459f/eb99/82fc86f60927826cf542145d5e5dcb23?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZMxYR9uHHtmBhQja~TeGWynnthYksRDm1OPRXZ22f1pkjVc6V6INauAyYZdpiitxsjP1Sr4gGB60rlK9zKb31s8ZKDBX9nw8L9VkEnsEcmIuaphYBt7rfktxFVZSggxaeN0D5NXtwyGplJQYZhExgd6amdQPLiCJPLKz1GGx4sji1gnLwSI3aja6aGH6qP2fDosdOi28sp~HSYZ4sJtkPydmFoj4W3oxYzklCqEK0LZMUVcfWUbvu2lk5S6lv5ueGAbQOdc~nIlkgh2yym7TGeRV3XsxmT9VLeMtjIA8lwZu1w-rXvOMdu4cXlOtZ6GcpzWgtfhMjJp~Rs0iHUUIig"
                alt="img"
              />
              <p className="p">
                Работа с сервисом приносит радость, потому что высочайший
                профессионализм, удобство, оперативность, и просто приятные
                люди!
              </p>
              <p className="pp">Александра Селезнева</p>
              <p className="ppp">фотограф</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
