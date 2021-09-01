import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  stakeButton: {
    backgroundColor: "rgba(224, 7, 125, 0.9)",
    color: "white",
    width: 130,
    height: 40,
    textTransform: "none",
    fontSize: 16,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    "&:hover": {
      background: "rgba(224, 7, 125, 0.7)",
    },
    [theme.breakpoints.down("sm")]: {
      width: 120,
      fontSize: 15,
    },
  },
  unstakeButton: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "#f6f6f6",
    borderColor: "#f6f6f6",
    width: 130,
    height: 40,
    textTransform: "none",
    fontSize: 16,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    "&:hover": {
      background: "rgba(255, 255, 255, 0.3)",
    },
  },
}));

const CustomButton = ({
  onClick,
  children,
  variant = "primary",
  disabled = false,
}) => {
  const classes = useStyles();
  return (
    <Button
      onClick={onClick}
      color="primary"
      disabled={disabled}
      className={
        variant == "primary" ? classes.stakeButton : classes.unstakeButton
      }
    >
      {children}
    </Button>
  );
};

export default CustomButton;
