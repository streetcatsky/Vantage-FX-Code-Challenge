import { makeStyles } from '@material-ui/core/styles';
import RingLoader from "react-spinners/RingLoader";
import Backdrop, { BackdropProps } from '@material-ui/core/Backdrop';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.modal + 1,
        color: '#fff',
    },
}));
export default function CustomBackdrop(props: BackdropProps) {
    const classes = useStyles();
    return (
        <Backdrop className={classes.backdrop} {...props}>
            <RingLoader size={150} color={"#36D7B7"} />
        </Backdrop>
    )
}


