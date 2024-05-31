import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import useStyles from "./styles";

const CardComponent = ({ id, onRemove }) => {
  const styles = useStyles();
  const [loading, setLoading] = useState(true);
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        const data = await response.json();
        setPostData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching post data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <Card className={styles.card}>
      <CardContent>
        <Typography variant="h5" component="div">
          Card {id}
        </Typography>
        {loading ? (
          <CircularProgress />
        ) : postData ? (
          <Typography variant="body1" component="div">
            {postData.title}
          </Typography>
        ) : (
          <Typography variant="body1" component="div">
            Error fetching data
          </Typography>
        )}
        <Button variant="outlined" color="primary" onClick={() => onRemove(id)}>
          Remove
        </Button>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
