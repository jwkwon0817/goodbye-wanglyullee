import * as s from "./style.css";
import { ModalProps } from "./shared";

export function Backdrop({ onClose, children }: Partial<ModalProps>) {
  return (
    <div className={s.backdrop} onClick={onClose}>
      {children}
    </div>
  );
}

export function Modal({ onClose, children }: Partial<ModalProps>) {
  return (
    <div className={s.modal} onClick={onClose}>
      {children}
    </div>
  );
}
