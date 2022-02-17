import { ReactNode, Fragment } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

interface IModalProps {
  children: ReactNode;
  className?: string;
  onClose: () => void;
}

interface IModalOverlayProps {
  children: ReactNode;
}

interface IBackdropProps {
  onClose: () => void;

}

const Backdrop = (props: IBackdropProps) => {
  return <div className="backdrop" onClick={props.onClose} />;
};

const ModalOverlay = (props: IModalOverlayProps) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};

const Modal = (props: IModalProps) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("overplays") as HTMLElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overplays") as HTMLElement
      )}
    </Fragment>
  );
};

export default Modal;
