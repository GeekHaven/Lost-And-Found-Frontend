import classes from "./Card.module.css";
import bottle from "../../../assets/bottle.jpg";
import Image from "next/image";
export default function Card(props) {
  return (
    <div className={classes.card}>
      <div className={classes.cardItem}>
        <div className={classes.cardTitle}>
          <h2>Water Bottle</h2>
        </div>
        <div className={classes.cardImage}>
          <Image src={bottle} className={classes.img} />
        </div>
        <div className={classes.cardInfo}>
          <p class={classes.cardDescription}>Lost water bottle</p>
        </div>
      </div>
    </div>
  );
}
