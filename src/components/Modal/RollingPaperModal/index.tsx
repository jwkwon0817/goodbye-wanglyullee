import { useState } from "react";
import { createPortal } from "react-dom";
import {
  Button,
  ButtonSize,
  ButtonVariant,
  GlyphIcon,
  Input,
  Label,
  Typo,
  TypographyWeight,
} from "@tapie-kr/inspire-react";
import { ModalProps } from "../shared";
import { Backdrop, Modal } from "..";
import * as s from "./style.css";

export default function RollingPaperModal({ visible, onClose }: ModalProps) {
  if (!visible) return null;

  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    // TODO: API 호출
  };

  return createPortal(
    <>
      <Backdrop onClose={onClose}>
        <Modal>
          <div className={s.top}>
            <Typo.Moderate weight={TypographyWeight.SEMIBOLD}>
              롤링페이퍼 작성하기
            </Typo.Moderate>
            <Button.Icon size={ButtonSize.SMALL} variant={ButtonVariant.SECONDARY} icon={GlyphIcon.CLOSE} />
          </div>
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
      </Backdrop>
    </>,
    document.body
  );
}
