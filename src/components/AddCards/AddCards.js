import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import CardComponent from "../CardComponent/CardComponent";
import useStyles from "./styles";

const AddCards = () => {
  const styles = useStyles();

  const [cards, setCards] = useState([]);

  const addCard = () => {
    setCards([...cards, { id: cards.length + 1 }]);
  };

  const removeCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  return (
    <div className={styles.wrapper}>
      <Box className={styles.container}>
        <Box className={styles.nav}>
          <Button variant="contained" color="primary" onClick={addCard}>
            Add Cards
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setCards([])}
          >
            Remove All Cards
          </Button>
        </Box>
        <Box id="grid-container" className={styles.cridContainer}>
          {cards.map((card) => (
            <CardComponent key={card.id} id={card.id} onRemove={removeCard} />
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default AddCards;
