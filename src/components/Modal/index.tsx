import * as s from "./style.css";
import { ModalProps } from "./shared";
import { useState, useCallback } from "react";

export default function Modal({ onClose, render }: ModalProps) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      onClose?.();
    }, 400);
  }, [onClose]);

  return (
    <div
      className={`${s.backdrop} ${isClosing ? s.backdropExit : ""}`}
      onClick={handleClose}
    >
      <div
        className={`${s.modal} ${isClosing ? s.modalExit : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {render(handleClose)}
      </div>
    </div>
  );
}
