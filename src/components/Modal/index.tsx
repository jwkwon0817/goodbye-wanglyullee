import cn from 'classnames';
import { useCallback, useState } from 'react';
import { ModalProps } from './shared';
import * as s from './style.css';

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
      className={cn(s.backdrop, isClosing && s.backdropExit)}
      onClick={handleClose}>
      <div
        className={cn(s.modal, isClosing && s.modalExit)}
        onClick={(e) => e.stopPropagation()}>
        {render(handleClose)}
      </div>
    </div>
  );
}
