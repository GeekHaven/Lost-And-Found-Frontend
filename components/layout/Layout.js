import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
export default function Layout(props) {
  return (
    <>
      <div className={classes.container}>
        <MainNavigation />
        <main>{props.children}</main>
      </div>
      <footer className={classes.footer}></footer>
    </>
  );
}
