import { Navbar, Button, Text } from "@nextui-org/react";
import logo from "../../assets/geekhaven.svg";
import Image from "next/image";
import classes from "./MainNavigations.module.css";
import Link from "next/link";
export default function App() {
  const collapseItems = ["Home", "Found", "Lost", "Submit", "Instructions"];

  return (
    <Navbar
      variant="static"
      css={{
        width: "100%",
        margin: "$0",
        padding: "$0",
      }}
    >
      <Navbar.Toggle showIn="xs" />
      <Navbar.Brand
        css={{
          "@xs": {
            w: "12%",
          },
        }}
      >
        <Image src={logo} alt="logo" width={50} height={50} />
      </Navbar.Brand>
      <Navbar.Content hideIn="xs">
        <Link href="/" className={classes.item}>
          Home
        </Link>
        <Link href="/found" className={classes.item}>
          Found
        </Link>
        <Link href="/lost" className={classes.item}>
          Lost
        </Link>
        <Link href="/listitem" className={classes.item}>
          Submit
        </Link>
        <Link href="/instructions" className={classes.item}>
          Instructions
        </Link>
        <Link href="/login" className={classes.item}>
          Login
        </Link>
      </Navbar.Content>
      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
