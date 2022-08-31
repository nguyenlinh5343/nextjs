import type { NextPage } from "next";
import Image from "next/image";
import styles from "@styles/Home.module.css";
import * as React from "react";
import { DashboardLayout } from "@components/dashboard-layout";
import { Box, Stack } from "@mui/system";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Button, Modal, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import QuizModal from "@components/dashboard/modal-quiz";
import Link from "@mui/material/Link";
type Props = {
  // image: string;
  title: string;
  owner: string;
  key: string;
};

const ItemQuiz = ({ title, owner, key }: Props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div key={key}>
      <Stack
        direction="row"
        sx={{
          border: "1px solid rgba(9, 9, 9, 0.1)",
          mt: 2,
          borderRadius: "10px"
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: 151,
            backgroundColor: "rgb(136 84 192)",
            borderRadius: "5px"
          }}
          image="/assets/images/quiz_image.png"
          alt=""
        />
        <CardContent sx={{ flex: "1 0 auto", width: "auto" }}>
          <Link
            href="quiz/question"
            sx={{ color: "unset", textDecoration: "unset" }}
          >
            <Box>
              <Typography
                variant="h5"
                sx={{
                  width: "100%"
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {owner}
              </Typography>
            </Box>
          </Link>
          <QuizModal handleClose={handleClose} open={open} />
          <Stack
            justifyContent="flex-end"
            alignItems="flex-end"
            direction="row"
          >
            <Button
              sx={{
                mr: 2,
                border: "1px solid rgba(9, 9, 9, 0.1)",
                color: "#65748B;"
              }}
              variant="outlined"
              size="small"
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>

            <Button
              onClick={handleOpen}
              variant="outlined"
              size="small"
              sx={{
                border: "1px solid rgba(9, 9, 9, 0.1)",
                color: "#65748B;"
              }}
              startIcon={<EditIcon />}
            >
              Edit
            </Button>
          </Stack>
        </CardContent>
      </Stack>
    </div>
  );
};

export default ItemQuiz;
