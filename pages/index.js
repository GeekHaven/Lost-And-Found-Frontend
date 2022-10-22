import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ListItem from "../components/interfaces/ListItem";
import Footer from "../components/interfaces/Footer";
import Category from "./../components/Sections/Category";
import FoundHeader from "./../components/interfaces/FoundHeader";
export default function Home() {
    return (
        <>
            <FoundHeader />
            <Category />
            <ListItem />
            <Footer />
        </>
    );
}
