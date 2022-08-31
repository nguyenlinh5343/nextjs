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
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
type Props = {
  // image: string;
  title: string;
  owner: string;
  key: string;
};
const AddQuestion = ({ title, owner, key }: Props) => {
  return (
    <>
      <Container maxWidth="lg">
        <div key={key}>
          <Stack
            direction="column"
            sx={{
              mt: 2,
              pl: 3,
              py: 3
            }}
          >
            <Typography
              component="div"
              variant="h5"
              pb={3}
              mr={3}
              sx={{ borderBottom: "1px solid rgb(242 242 242)" }}
            >
              {} {title} aaa
            </Typography>
            <Box
              sx={{
                backgroundColor: "#ffffff",
                width: "50%",
                borderRadius: "20px",
                mt: 2,
                p: 3
              }}
            >
              <InputBase
                placeholder="Enter answer"
                sx={{
                  backgroundColor: "#ffffff",
                  width: "100%",
                  border: "none",
                  height: "100px",
                  textAlign: "center"
                }}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </Box>
            <Box>
              <IconButton
                type="button"
                sx={{ p: "10px", display: "inline-block" }}
                aria-label="create"
              >
                <AddCircleOutlineIcon />
              </IconButton>
            </Box>

            {/* <FormControl>
              <RadioGroup
                row
                sx={{
                  my: 2,
                  flexWrap: "wrap"
                }}
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female FemaleFemaleFemaleFemale FemaleFemaleFemaleFemale FemaleFemaleFemaleFemale"
                  sx={{
                    width: "calc(50% - 16px)",
                    borderRadius: "10px",
                    border: "1px solid rgba(9, 9, 9, 0.1)",
                    mb: 2,
                    ml: 0,
                    p: 1
                  }}
                />
                <FormControlLabel
                  sx={{
                    width: "calc(50% - 16px)",
                    borderRadius: "10px",
                    border: "1px solid rgba(9, 9, 9, 0.1)",
                    mb: 2,
                    ml: 0,
                    p: 1
                  }}
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  sx={{
                    width: "calc(50% - 16px)",
                    borderRadius: "10px",
                    border: "1px solid rgba(9, 9, 9, 0.1)",
                    mb: 2,
                    ml: 0,
                    p: 1
                  }}
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
                <FormControlLabel
                  sx={{
                    width: "calc(50% - 16px)",
                    borderRadius: "10px",
                    border: "1px solid rgba(9, 9, 9, 0.1)",
                    mb: 2,
                    ml: 0,
                    p: 1
                  }}
                  value="disabled"
                  control={<Radio />}
                  label="other"
                /> 
              </RadioGroup>
            </FormControl>*/}
          </Stack>
        </div>
      </Container>
    </>
  );
};
AddQuestion.getLayout = (page: any) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default AddQuestion;
