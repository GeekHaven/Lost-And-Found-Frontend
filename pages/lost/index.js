import classes from "./Lost.module.css";
import Image from "next/image";
import test from "../../assets/test.jpg";
export default function Lost() {
  const images = [test, test, test, test];
  return (
    <>
      <p className={classes.heading}>Lost Items</p>
      <div className={classes.container}>
        {images.map((el) => {
          return <Image src={el} alt="img" width={300} height={300} />;
        })}
      </div>
    </>
  );
}
