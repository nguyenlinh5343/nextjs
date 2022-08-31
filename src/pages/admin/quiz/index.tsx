import type { NextPage } from "next";
import Image from "next/image";
import styles from "@styles/Home.module.css";
import * as React from "react";
import { DashboardLayout } from "@components/dashboard-layout";
import { Box, Stack } from "@mui/system";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Button, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import ItemQuiz from "@components/quiz/item-quiz";
import * as quizes from "../../../__mocks__/quizes";
const Quiz = () => {
  // console.log(quizes.quizes[0].documents[0].index);

  return (
    <div>
      <Container maxWidth="lg">
        {quizes.quizes[0].documents.map((item) => (
          <ItemQuiz title={item.title} owner={item.user} key={item.id} />
        ))}
      </Container>
    </div>
  );
};

Quiz.getLayout = (page: any) => <DashboardLayout>{page}</DashboardLayout>;
export default Quiz;
