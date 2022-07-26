import type { NextPage } from "next";
import Image from "next/image";
import styles from "@styles/Home.module.css";
import * as React from "react";
import { DashboardLayout } from "@components/dashboard-layout";
import { Box, Stack } from "@mui/system";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Button, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
type Props = {
  // image: string;
  title: string;
  owner: string;
  key: string;
};
const ItemQuestion = ({ title, owner, key }: Props) => {
  return (
    <div key={key}>
      <Stack
        direction="row"
        sx={{
          border: "1px solid rgba(9, 9, 9, 0.1)",
          mt: 2,
          borderRadius: "15px"
        }}
      >
        <Stack direction="row" justifyContent="space-between">
          <Box></Box>
        </Stack>
        <Typography component="div" variant="h5">
          {title}
        </Typography>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {owner}
          </Typography>
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

export default ItemQuestion;
