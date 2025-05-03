import { toast } from "react-toastify";
import { AlertProps } from "../interface";

const notify = ({text, position="top-right", theme="dark"}: AlertProps) => toast(text, { theme: theme})

export {
    notify
}
