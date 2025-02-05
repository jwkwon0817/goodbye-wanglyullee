import { createPortal } from "react-dom";
import * as s from "./style.css";
import {
  Button,
  GlyphIcon,
  Input,
  Label,
  Typo,
  TypographyWeight,
} from "@tapie-kr/inspire-react";
import { useState } from "react";

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export default function RollingPaperModal({ visible, onClose }: ModalProps) {
  if (!visible) return null;

  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    // TODO: API 호출
  };

  return createPortal(
    <>
      <Backdrop onClose={onClose} />
      <Modal>
        <Typo.Moderate weight={TypographyWeight.SEMIBOLD}>
          롤링페이퍼 작성하기
        </Typo.Moderate>
        <div className={s.form}>
          <div className={s.inputContainer}>
            <Label isEssential>이름</Label>
            <Input.Text
              placeholder="이름을 입력해주세요"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={s.inputContainer}>
            <Label isEssential>내용</Label>
            <Input.Paragraph
              height={180}
              placeholder="내용을 입력해주세요"
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </div>
        <Button.Default
          fullWidth
          leadingIcon={GlyphIcon.SEND}
          onClick={handleSubmit}
        >
          탈선린 축하해드리기
        </Button.Default>
      </Modal>
    </>,
    document.body
  );
}

function Backdrop({ onClose }: Partial<ModalProps>) {
  return <div className={s.backdrop} onClick={onClose} />;
}

function Modal({ onClose, children }: Partial<ModalProps>) {
  return (
    <div className={s.modal} onClick={onClose}>
      {children}
    </div>
  );
}
