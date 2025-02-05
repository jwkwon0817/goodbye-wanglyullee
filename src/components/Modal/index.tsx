import * as s from "./style.css";
import { ModalProps } from "./shared";
import { useState, useCallback } from "react";

export function Backdrop({ onClose, children }: Partial<ModalProps>) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      onClose?.();
    }, 400);
  }, [onClose]);

  return (
    <div 
      className={`${s.backdrop} ${isClosing ? s.backdropExit : ''}`} 
      onClick={handleClose}
    >
      {children}
    </div>
  );
}

export function Modal({ onClose, children }: Partial<ModalProps>) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      onClose?.();
    }, 400);
  }, [onClose]);

  return (
    <div 
      className={`${s.modal} ${isClosing ? s.modalExit : ''}`}
      onClick={handleClose}
    >
      {children}
    </div>
  );
}