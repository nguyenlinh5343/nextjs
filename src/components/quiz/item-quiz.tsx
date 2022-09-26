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
import QuizModal from "@components/quiz/modal-quiz";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
type Props = {
  // image: string;
  title: string;
  description: string;
  id: string;
  item: any;
  namequiz: string;
  handleDelete: (message: string, memessagetitle: string) => void;
  handleEditInput: (message: any) => void;
  handleEditSubmit: (message: any) => void;
};
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  borderRadius: "10px",
  p: 4
};
const ItemQuiz = ({
  title,
  description,
  id,
  item,
  namequiz,
  handleDelete,
  handleEditInput,
  handleEditSubmit
}: Props) => {
  const [open, setOpen] = React.useState(false);
  const [idItem, setidItem] = React.useState("");
  const handleOpen = (id: string) => {
    setOpen(true);
    setidItem(id);
  };
  const handleClose = () => setOpen(false);
  return (
    // <div key={id}>
    <Stack
      direction="row"
      sx={{
        border: "1px solid rgba(9, 9, 9, 0.1)",
        mt: 2,
        borderRadius: "10px",
        width: "100%"
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
      <CardContent sx={{ width: "calc(100% - 151px)", flex: "1 0 auto" }}>
        <Link
          href="quiz/question"
          sx={{
            color: "unset",
            textDecoration: "unset"
          }}
        >
          <Box>
            <Typography variant="h5" sx={{}}>
              {title}
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              component="div"
            >
              {description}
            </Typography>
          </Box>
        </Link>
        {/* <QuizModal
          handleClose={handleClose}
          title={title}
          open={open}
          namequiz={""}
          handleInput={handleClose}
        /> */}
        <div>
          {/**/}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Edit quiz
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
              <TextField
                // html input attribute
                required
                fullWidth
                name="quiz"
                type="text"
                value={namequiz}
                // pass down to FormLabel as children
                label="Name this quiz"
                sx={{ mt: 3 }}
                onChange={handleEditInput}
                placeholder={title}
              />
              <Stack
                direction="row"
                mt={2}
                justifyContent="flex-end"
                spacing={2}
              >
                <Button size="small" variant="outlined" onClick={handleClose}>
                  Cancel
                </Button>
                <Button
                  onClick={handleEditSubmit}
                  size="small"
                  variant="contained"
                >
                  Save
                </Button>
              </Stack>
            </Box>
          </Modal>
        </div>
        <Stack justifyContent="flex-end" alignItems="flex-end" direction="row">
          <Button
            sx={{
              mr: 2,
              border: "1px solid rgba(9, 9, 9, 0.1)",
              color: "#65748B;"
            }}
            variant="outlined"
            size="small"
            onClick={() => handleDelete(id, title)}
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>

          <Button
            onClick={() => handleOpen(id)}
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
    // </div>
  );
};

export default ItemQuiz;
