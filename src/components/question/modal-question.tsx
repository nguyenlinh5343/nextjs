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
import { v4 as uuid } from "uuid";
import { useEffect } from "react";
import { Label } from "@mui/icons-material";
interface IAnswer {
  id: string;
  value: string;
}
interface Props {
  handleClose: (message: any) => void;
  // handleInput: (message: string) => void;
  // handleSubmit: (message: any) => void;
  open: boolean;
  title: string;
  owner: string;
  id: string;
}
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  width: "calc(80%)",
  overflow: "auto",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4
  // height: "100vh"
};
[];
export default function ModalQuestion({
  handleClose,
  open,
  title,
  owner,
  id
}: Props) {
  const [namequiz, setNamequiz] = React.useState("");
  const [selectedValue, setSelectedValue] = React.useState("");
  const [anwsers, setAnwsers] = React.useState<IAnswer[]>([]);
  const [name, setName] = React.useState("");

  useEffect(() => {
    console.log("anwsers", anwsers);
  }, [anwsers]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNamequiz(e.target.value);
  };

  const handleChangeanwser = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const isExit = anwsers?.some((item: IAnswer) => console.log(item));
    console.log("isExit", isExit);

    if (anwsers?.some((item: IAnswer) => item.id === name)) {
      const dataUpdate = anwsers.map((a) =>
        a.id === name ? { ...a, value: value } : { ...a }
      );
      setAnwsers(dataUpdate);
    } else {
      setAnwsers([...anwsers, { id: name, value: value }]);
    }
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log("submit");
  };
  console.log(selectedValue);
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
          <div id={id}>
            <Stack
              direction="column"
              sx={{
                mt: 2,
                pl: 3,
                py: 3
              }}
            >
              <form onSubmit={() => handleSubmit}>
                <FormControl
                  variant="standard"
                  sx={{
                    mb: 4,
                    width: "100%"
                  }}
                >
                  <TextField
                    id="input-name"
                    rows={3}
                    onChange={handleChange}
                    sx={{
                      "& .MuiInputBase-input": {
                        height: "200px"
                      }
                    }}
                  />
                </FormControl>
                {/* get id , set result */}
                <RadioGroup
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  onChange={handleRadioChange}
                >
                  <Stack flexDirection="row">
                    <FormControlLabel
                      value="a"
                      name="answer1"
                      control={<Radio />}
                      label={
                        <TextField
                          required
                          id="outlined-name"
                          name="answer1"
                          onChange={handleChangeanwser}
                          sx={{ mr: 3 }}
                        />
                      }
                    />
                    <FormControlLabel
                      value="b"
                      control={<Radio />}
                      name="answer2"
                      label={
                        <TextField
                          id="outlined-name"
                          name="answer2"
                          onChange={handleChangeanwser}
                          required
                          sx={{ mr: 3 }}
                        />
                      }
                    />
                    <FormControlLabel
                      value="c"
                      control={<Radio />}
                      name="answer3"
                      label={
                        <TextField
                          required
                          id="outlined-name"
                          name="answer3"
                          onChange={handleChangeanwser}
                          sx={{ mr: 3 }}
                        />
                      }
                    />
                    <FormControlLabel
                      value="d"
                      control={<Radio />}
                      name="answer4"
                      label={
                        <TextField
                          required
                          id="outlined-name"
                          name="answer4"
                          onChange={handleChangeanwser}
                          sx={{ mr: 3 }}
                        />
                      }
                    />
                  </Stack>
                </RadioGroup>
                <Stack
                  justifyContent="flex-end"
                  alignItems="flex-end"
                  direction="row"
                >
                  <Button
                    onClick={handleClose}
                    variant="outlined"
                    sx={{ mr: 2 }}
                  >
                    Cancle
                  </Button>
                  <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                    Save
                  </Button>
                </Stack>
              </form>
            </Stack>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
