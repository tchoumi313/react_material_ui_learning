import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    padding: "65px",
  },

  appBr: {
    backgroundColor: "#FF8E53",
    color: "white",
    position: "relative",
  },

  footer: {
    backgroundColor: "#FE6B8B",
    padding: "20px",
    position: "relative",
  },
  icons: {
    marginRight: "20px",
  },

  buttons: {
    marginTop: "20px",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardGrid: {
    padding: "20px 0",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
}));

/*
const StyledGrid = styled("Grid")(({ theme }) => ({
  margin: 10,
  color: theme.palette.primary.dark,
  //backgroundColor: theme.palette.primary.light,
  padding: theme.spacing(2),
  justifyContent: "center",
}));*/
export default useStyles;
