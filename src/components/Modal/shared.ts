export interface ModalProps {
  visible: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  render: (close: () => void) => React.ReactNode;
}
