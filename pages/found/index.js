import classes from "./Found.module.css";
import Image from "next/image";
import test from "../../assets/test.jpg";
import Card from "../../components/layout/Card/Card";
export default function Found() {
  const images = [test, test, test, test];
  return (
    <>
      <p className={classes.heading}>Found Items</p>
      <div className={classes.container}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
