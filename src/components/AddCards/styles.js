import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    padding: 0,
    width: "100dvw",
    height: "100dvh",
    overflow: "auto",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    margin: "16px",
    padding: "0",
    width: "100%",
    height: "100%",
  },
  nav: {
    display: "flex",
    justifyContent: "space-around",
    background: "#f5f5f5",
    width: "100%",
    padding: "16px",
    marginBottom: "16px",
  },
  cridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 300px)",
    gap: "36px",
    justifyContent: "center",
    padding: "36px",
    background: "#d4d4ce",
    width: "100%",
    margin: "0 auto",
    height: "100%",
    overflowY: "auto",
  },
});
export default useStyles;
