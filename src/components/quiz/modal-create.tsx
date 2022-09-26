import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styles from "@styles/Home.module.css";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import AddIcon from "@mui/icons-material/Add";
import RadioGroup from "@mui/material/RadioGroup";
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
interface Props {
  handleClose: (message: any) => void;
  // handleInput: (message: string) => void;
  // handleSubmit: (message: any) => void;
  openCreate: boolean;
  // title: string;
  // namequiz: string;
  // handleInput: (message: any) => void;
}
interface IAnswer {
  id: string;
  value: string;
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
  p: 4,
  maxHeight: "650px"
};

export default function ModalCreate({
  handleClose,
  openCreate
}: // handleInput
Props) {
  const [namequiz, setNamequiz] = React.useState("");
  const [descriptionquiz, setDescriptionquiz] = React.useState("");
  const [anwsers, setAnwsers] = React.useState<IAnswer[]>([]);
  const [selectedValue, setSelectedValue] = React.useState("");
  // };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNamequiz(e.target.value);
  };
  const handleSubmitQuiz = async () => {
    const response = await fetch("http://localhost:3000/api/quizes", {
      method: "POST",
      body: JSON.stringify({
        title: namequiz,
        description: "",
        questions: "",
        results: "",
        user: ""
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await response.json();
    console.log(data);
  };
  const { register, control, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      questions: [
        {
          id: "",
          title: "",
          description: "",
          answers: [
            {
              id: "",
              title: ""
            },
            {
              id: "",
              title: ""
            },
            {
              id: "",
              title: ""
            },
            {
              id: "",
              title: ""
            }
          ]
        }
      ]
    }
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions"
  });
  const handleAddQuestion = () => {
    append({
      id: "",
      title: "",
      description: "",
      answers: [
        {
          id: "",
          title: ""
        },
        {
          id: "",
          title: ""
        },
        {
          id: "",
          title: ""
        },
        {
          id: "",
          title: ""
        }
      ]
    });
  };

  const onSubmit = async (data: any) => {
    console.log(data);
    const response = await fetch("http://localhost:3000/api/quizes/question", {
      method: "POST",
      body: JSON.stringify({ data }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const datas = await response.json();
    console.log(datas);
    console.log(data);
    handleSubmitQuiz();
  };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setNamequiz(e.target.value);
  // };

  // const handleChangeanwser = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   const isExit = anwsers?.some((item: IAnswer) => console.log(item));
  //   console.log("isExit", isExit);

  //   if (anwsers?.some((item: IAnswer) => item.id === name)) {
  //     const dataUpdate = anwsers.map((a) =>
  //       a.id === name ? { ...a, value: value } : { ...a }
  //     );
  //     setAnwsers(dataUpdate);
  //   } else {
  //     setAnwsers([...anwsers, { id: name, value: value }]);
  //   }
  // };
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value);
  };
  // const handleSubmit = () => {
  //   // console.log(namequiz);
  // };
  return (
    <div>
      <Modal
        open={openCreate}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Create quiz
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              // html input attribute
              required
              fullWidth
              name="quiz"
              type="text"
              // value={namequiz}
              // pass down to FormLabel as children
              label="Name this quiz"
              sx={{ mt: 3 }}
              onChange={handleInput}
              // placeholder={title}
            />
            {fields.map((item, index) => {
              return (
                <div key={item.id}>
                  <Typography
                    id="modal-modal-description"
                    variant="h6"
                    sx={{
                      mt: 4,
                      display: "flex",
                      justifyContent: "space-between"
                    }}
                  >
                    Question {index + 1}
                    <IconButton color="default" aria-label="delete">
                      <DeleteIcon onClick={() => remove(index)} />
                    </IconButton>
                  </Typography>

                  <FormControl
                    variant="standard"
                    sx={{
                      mb: 4,
                      mt: 4,
                      width: "100%"
                    }}
                  >
                    <TextField
                      id="input-name"
                      rows={3}
                      {...register(`questions.${index}.title`)}
                      sx={{
                        "& .MuiInputBase-input": {
                          height: "200px"
                        }
                      }}
                    />
                  </FormControl>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Description
                  </Typography>
                  <Controller
                    render={({ field }) => (
                      <TextField
                        sx={{
                          width: "100%",
                          mb: 4
                          // "& .MuiInputBase-input": {
                          //   height: "200px"
                          // }
                        }}
                        {...field}
                      />
                    )}
                    name={`questions.${index}.description`}
                    control={control}
                  />
                  {/* <TextField
							
                id="input-name"
                rows={3}
                // onChange={handleChange}
                sx={{
                  "& .MuiInputBase-input": {
                    height: "200px"
                  }
                }}
              />
            </Controller> */}
                  {/* get id , set result */}

                  <RadioGroup
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    onChange={handleRadioChange}
                  >
                    <Stack flexDirection="row">
                      {/* <FormControlLabel
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
                      /> */}
                      {item?.answers.map((a, aIndex) => {
                        return (
                          <React.Fragment key={aIndex}>
                            <input
                              {...register(
                                `questions.${index}.answers.${aIndex}.id`
                              )}
                              value={aIndex}
                              style={{ display: "none" }}
                            />
                            <FormControlLabel
                              value={aIndex}
                              name="answer1"
                              control={<Radio />}
                              label={
                                <TextField
                                  required
                                  {...register(
                                    `questions.${index}.answers.${aIndex}.title`
                                  )}
                                  sx={{ mr: 3 }}
                                />
                              }
                            />
                          </React.Fragment>
                        );
                      })}{" "}
                    </Stack>
                  </RadioGroup>
                </div>
              );
            })}
            <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
              <IconButton color="default" aria-label="add">
                <AddIcon onClick={handleAddQuestion} />
              </IconButton>
            </Box>

            <Stack direction="row" mt={2} justifyContent="flex-end" spacing={2}>
              <Button size="small" variant="outlined" onClick={handleClose}>
                Cancel
              </Button>
              <Button type="submit" size="small" variant="contained">
                Save
              </Button>
            </Stack>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
