import * as React from "react";
import { DashboardLayout } from "@components/dashboard-layout";
import Container from "@mui/material/Container";
import ItemQuiz from "@components/quiz/item-quiz";
import { useConfirm } from "material-ui-confirm";
import { Box, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ModalCreate from "@components/quiz/modal-create";

const Quiz = (data: any) => {
  const confirm = useConfirm();
  const [openCreate, setOpenCreate] = React.useState(false);
  const [items, setItems] = React.useState(data.data);
  const [namequiz, setNamequiz] = React.useState("");
  const handleOpen = () => {
    setOpenCreate(true);
  };
  const handleClose = () => setOpenCreate(false);

  const handleEditInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNamequiz(e.target.value);
  };
  const deletedquiz = (id: any, title: string) => {
    confirm({ description: `This will permanently delete ${title}` }).then(
      async () => {
        let newItem = items.filter((e: { id: number }) => e.id !== id);
        setItems(newItem);
        console.log(newItem);
        const response = await fetch(`/api/quizes/${id}`, {
          method: "DELETE"
        });
        const data = await response.json();
        console.log(data);
      }
    );
  };

  // const handleSubmit = (item: any, index: number) => {
  //   let newItem = items.filter((e) => e.id !== item);
  //   let updateItem = items.filter((e) => e.id == item);
  //   setItems(newItem);
  //   console.log(newItem);
  // };
  console.log(items);
  console.log(data);
  return (
    <div>
      <Container maxWidth="lg">
        {items.map((item: any) => (
          <ItemQuiz
            item={item}
            title={item.title}
            description={item.description}
            id={item.id}
            // user={item.user}
            namequiz={namequiz}
            handleDelete={deletedquiz}
            handleEditInput={handleEditInput}
            handleEditSubmit={function (message: any): void {
              throw new Error("Function not implemented.");
            }}
          />
        ))}

        <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
          <IconButton color="default" aria-label="add">
            <AddIcon onClick={handleOpen} />
          </IconButton>
        </Box>
        <ModalCreate handleClose={handleClose} openCreate={openCreate} />
      </Container>
    </div>
  );
};

Quiz.getLayout = (page: any) => <DashboardLayout>{page}</DashboardLayout>;
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("http://localhost:3000/api/quizes");
  const data = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      data
    }
  };
}
export default Quiz;
