import type { NextPage } from "next";
import Image from "next/image";
import styles from "@styles/Home.module.css";
import * as React from "react";
import { DashboardLayout } from "@components/dashboard-layout";
import { Box, Stack } from "@mui/system";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Button, IconButton, Slide, Switch, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import ItemQuiz from "@components/quiz/item-quiz";
import Container from "@mui/material/Container";
import AddIcon from "@mui/icons-material/Add";
import ModalQuestion from "@components/question/modal-question";
type Props = {
  // image: string;
  title: string;
  owner: string;
  key: string;
};
const Question = ({ title, owner, key }: Props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleOpenq = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [checked, setChecked] = React.useState(false);
  const containerRef = React.useRef(null);
  console.log(containerRef);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    <>
      <Container maxWidth="lg">
        <ItemQuiz key={""} title={""} owner={""}></ItemQuiz>
        <div key={key}>
          <Stack
            direction="column"
            sx={{
              mt: 2,
              pl: 3,
              py: 3,
              pb: 0
            }}
          >
            <Stack
              justifyContent="space-between"
              direction="row"
              flexWrap="nowrap"
              sx={{ borderBottom: "1px solid rgb(242 242 242)" }}
            >
              <Typography
                display="inline-block"
                component="div"
                variant="h5"
                pb={3}
                mr={3}
              >
                {} {title} aaa
              </Typography>
              <Box>
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
              </Box>
            </Stack>

            <FormControl>
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
            </FormControl>
          </Stack>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={handleOpenq} color="default" aria-label="add">
              <AddIcon />
            </IconButton>
          </Box>
          {/* <Slide direction="up" in={checked} container={containerRef.current}>
            <FormControlLabel
              control={<Switch checked={checked} onChange={handleChange} />}
              label="Show from target"
            /> */}
          <ModalQuestion
            handleClose={handleClose}
            open={open}
            key={""}
            title={""}
            owner={""}
          />
          {/* </Slide> */}
        </div>
      </Container>
    </>
  );
};
Question.getLayout = (page: any) => <DashboardLayout>{page}</DashboardLayout>;
export default Question;
