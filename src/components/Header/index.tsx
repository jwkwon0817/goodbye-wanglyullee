import {
  Button,
  ButtonVariant,
  GlyphIcon,
  HStack,
  StackJustify,
} from "@tapie-kr/inspire-react";
import * as s from "./style.css";
import { useRollingPaperModalVisible } from "../../stores/RollingPaperModal";
import TitleSymbol from "../TitleSymbol";

export default function Header() {
  const rollingPaperModal = useRollingPaperModalVisible();

  const handleCreateRollingPaperButton = () => {
    rollingPaperModal.setVisible(true);
  };

  return (
    <HStack fullWidth justify={StackJustify.BETWEEN}>
      <TitleSymbol />
      <Button.Default
        variant={ButtonVariant.SECONDARY}
        leadingIcon={GlyphIcon.EDIT}
        onClick={handleCreateRollingPaperButton}
      >
        롤링페이퍼 작성하기
      </Button.Default>
    </HStack>
  );
}
