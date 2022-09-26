import type { NextPage } from "next";
import Image from "next/image";
import styles from "@styles/Home.module.css";
import * as React from "react";
import Header from "@components/head";
import QuizModal from "@components/quiz/modal-quiz";
import Button from "@mui/material/Button";
const Home: NextPage = () => {
  const [open, setOpen] = React.useState(false);
  const [namequiz, setNamequiz] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setNamequiz(e);
  };
  return (
    <div>
      <Header title={"quiz"} image={""}></Header>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">Quizzz</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <Button
            onClick={handleOpen}
            className={styles.card}
            sx={{
              display: "block",
              border: "1px solid #eaeaea",
              margin: "1rem",
              padding: "1.5rem"
            }}
          >
            <h2>Create quiz &rarr;</h2>
            <p>Create quizzes and question. </p>
          </Button>
          <QuizModal
            handleClose={handleClose}
            open={open}
            namequiz={"namequiz"}
            handleInput={handleInput}
            title={""}
          />
          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn everything by answering sets of questions!</p>
          </a>

          {/* <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a> */}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};
export default Home;
