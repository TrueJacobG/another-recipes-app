import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

import Menu from "../components/Menu";

export default function Home() {
  return (
    <>
      <Head>
        <title>Another Recipes App</title>
        <meta name="description" content="another recipe app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <main className={styles.main}>
        <Menu />
      </main>
    </>
  );
}
