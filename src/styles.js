import { makeStyles } from "@mui/styles";
import { grey, red } from "@mui/material/colors";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: grey[50],
    padding: "20px",
  },
  icon: {
    marginRight: "20px",
  },
  buttons: {
    marginTop: "40px",
  },
  cardGrid: {
    padding: "20px 0",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", //16:9 aspec ratio
  },
  cardContent: {
    flexGrow: 1,
  },
}));
export default useStyles;
