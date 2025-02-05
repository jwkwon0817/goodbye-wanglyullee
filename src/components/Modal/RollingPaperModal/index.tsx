import { useState } from "react";
import { createPortal } from "react-dom";
import {
  Button,
  ButtonSize,
  ButtonVariant,
  GlyphIcon,
  Input,
  Label,
  StackAlign,
  Typo,
  TypographyWeight,
  VStack,
} from "@tapie-kr/inspire-react";
import Modal from "..";
import * as s from "./style.css";
import { useRollingPaperModalVisible } from "../../../stores/RollingPaperModal";

export default function RollingPaperModal() {
  const { visible, setVisible } = useRollingPaperModalVisible();

  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  if (!visible) return null;

  const onClose = () => {
    setVisible(false);
  };

  const handleSubmit = (handleClose: () => void) => {
    const data = {
      author: name,
      message: content,
    };

    fetch("https://goodbye.sard.kr/message", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(() => {
      alert("[📩] 메시지가 전달되었습니다 :)");
      handleClose();
    });
  };

  return createPortal(
    <>
      <Modal
        visible={visible}
        onClose={onClose}
        render={(handleClose) => (
          <>
            <div className={s.top}>
              <Typo.Moderate weight={TypographyWeight.SEMIBOLD}>
                롤링페이퍼 작성하기
              </Typo.Moderate>
              <Button.Icon
                size={ButtonSize.SMALL}
                variant={ButtonVariant.SECONDARY}
                icon={GlyphIcon.CLOSE}
                onClick={handleClose}
              />
            </div>
            <VStack fullWidth spacing={20} className={s.form}>
              <VStack fullWidth align={StackAlign.START} spacing={6}>
                <Label isEssential>이름</Label>
                <Input.Text
                  placeholder="이름을 입력해주세요"
                  onChange={(e) => setName(e.target.value)}
                />
              </VStack>
              <VStack fullWidth align={StackAlign.START} spacing={6}>
                <Label isEssential>내용</Label>
                <Input.Paragraph
                  height={180}
                  placeholder="내용을 입력해주세요"
                  onChange={(e) => setContent(e.target.value)}
                />
              </VStack>
            </VStack>
            <Button.Default
              fullWidth
              leadingIcon={GlyphIcon.SEND}
              onClick={() => handleSubmit(handleClose)}
            >
              탈선린 축하해드리기
            </Button.Default>
          </>
        )}
      ></Modal>
    </>,
    document.body
  );
}
