import close from "../assets/close.svg";
import "./ErrorFile.css";

type Props = {
    message: string;
    handleClose: () => void;
}

export function ErrorModal({ message , handleClose }: Props) {
    return (
        <div className="overlay">
            <div className="error-container">
                <button className="close-btn" onClick={() => handleClose()}>
                    <img src={close} alt="close" />
                </button>
                <h1 className="error-title">Error</h1>
                <p className="error-message">{message}</p>
            </div>
        </div>
    )
}