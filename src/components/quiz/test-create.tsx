import React, { Fragment } from "react";
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
import ReactDOM from "react-dom";

import "./styles.css";

let renderCount = 0;

function App() {
  const { register, control, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      questions: [
        {
          id: "",
          title: "Bill",
          description: "Luo",
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
  const { fields, append, prepend, remove, swap, move, insert, replace } =
    useFieldArray({
      control,
      name: "questions"
    });

  const onSubmit = (data) => console.log("data", data);

  // if you want to control your fields with watch
  // const watchResult = watch("questions");
  // console.log(watchResult);

  // The following is useWatch example
  // console.log(useWatch({ name: "questions", control }));

  renderCount++;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Field Array </h1>
      <p>The following demo allow you to delete, append, prepend items</p>
      <span className="counter">Render Count: {renderCount}</span>
      <div>
        {fields.map((item, index) => {
          return (
            <div key={item.id}>
              <p>
                <input {...register(`questions.${index}.id`)} />
                <input {...register(`questions.${index}.title`)} />
              </p>
              <p>
                <Controller
                  render={({ field }) => <input {...field} />}
                  name={`questions.${index}.description`}
                  control={control}
                />
              </p>
              <p style={{ display: "flex", gap: "8px" }}>
                {item?.answers.map((a, aIndex) => {
                  return (
                    <Fragment key={aIndex}>
                      <input
                        {...register(`questions.${index}.answers.${aIndex}.id`)}
                        value={index}
                        style={{ display: "none" }}
                      />
                      <input
                        {...register(
                          `questions.${index}.answers.${aIndex}.title`
                        )}
                      />
                    </Fragment>
                  );
                })}{" "}
              </p>
              <button type="button" onClick={() => remove(index)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
      <section>
        <button
          type="button"
          onClick={() => {
            append({
              id: "",
              title: "Bill",
              description: "Luo",
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
          }}
        >
          append
        </button>

        <button
          type="button"
          onClick={() =>
            reset({
              questions: [{ title: "Bill", description: "Luo" }]
            })
          }
        >
          reset
        </button>
      </section>

      <input type="submit" />
    </form>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
