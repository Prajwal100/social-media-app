import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
export default function Home() {
  return (
    <>
      <Head>
        <title>Social Media App</title>
      </Head>

      <Layout></Layout>
    </>
  );
}
