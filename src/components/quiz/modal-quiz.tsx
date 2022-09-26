import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styles from "@styles/Home.module.css";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
interface Props {
  handleClose: (message: any) => void;
  // handleInput: (message: string) => void;
  // handleSubmit: (message: any) => void;
  open: boolean;
  title: string;
  namequiz: string;
  handleInput: (message: any) => void;
}
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

export default function QuizModal({
  handleClose,
  open,
  title,
  namequiz,
  handleInput
}: Props) {
  // const [namequiz, setNamequiz] = React.useState("");
  // const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setNamequiz(e.target.value);
  // };
  const handleSubmit = () => {
    console.log(namequiz);
  };
  return (
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
            onChange={handleInput}
            placeholder={title}
          />
          <Stack direction="row" mt={2} justifyContent="flex-end" spacing={2}>
            <Button size="small" variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={handleSubmit} size="small" variant="contained">
              Save
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
