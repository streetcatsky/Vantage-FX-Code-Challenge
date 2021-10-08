import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
export type SupportMessageType = 'error' | 'success';
type CustomSnackbarProps = {
    handelClose: (event?: React.SyntheticEvent, reason?: string) => void,
    open: boolean,
    hideDuration?: number,
    messageType: SupportMessageType,
    message: string,
}
export default function CustomSnackbar({ handelClose, open, hideDuration = 6000, message, messageType }: CustomSnackbarProps) {
    return (
        <Snackbar open={open} autoHideDuration={hideDuration} onClose={handelClose}>
            <Alert onClose={handelClose} severity={messageType}>
                {message}
            </Alert>
        </Snackbar>
    )
}