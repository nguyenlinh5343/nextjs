import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import AddIcon from "@mui/icons-material/Add";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";

interface Props {
  handleClose: (message: any) => void;
  // handleInput: (message: string) => void;
  // handleSubmit: (message: any) => void;
  open: boolean;
  title: string;
  owner: string;
  key: string;
}
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  width: "calc(90% - 30px)",
  overflow: "auto",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4
  // height: "100vh"
};

export default function ModalQuestion({
  handleClose,
  open,
  title,
  owner,
  key
}: Props) {
  const [namequiz, setNamequiz] = React.useState("");
  const [name, setName] = React.useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNamequiz(e.target.value);
  };
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div key={key}>
            <Stack
              direction="column"
              sx={{
                mt: 2,
                pl: 3,
                py: 3
              }}
            >
              <FormControl
                variant="standard"
                sx={{
                  mb: 4
                }}
              >
                <InputLabel htmlFor="component-simple">Name</InputLabel>
                <Input
                  id="component-simple"
                  value={name}
                  onChange={handleChange}
                />
              </FormControl>
              {/* <Typography
                component="div"
                variant="h5"
                pb={3}
                mr={3}
                sx={{ borderBottom: "1px solid rgb(242 242 242)" }}
              >
                {} {title} aaa
              </Typography> */}
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
              </FormControl> */}
              <Box sx={{}}>
                <TextField
                  id="outlined-name"
                  // value={name}
                  onChange={handleChange}
                  sx={{ mr: 3 }}
                />
                <TextField id="outlined-name" />
              </Box>
            </Stack>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
