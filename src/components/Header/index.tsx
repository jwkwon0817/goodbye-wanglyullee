import { Button, ButtonVariant, GlyphIcon } from "@tapie-kr/inspire-react";
import * as s from "./style.css";
import { useRollingPaperModalVisible } from "../../stores/RollingPaperModal";

export default function Header() {
  const rollingPaperModal = useRollingPaperModalVisible();

  const handleCreateRollingPaperButton = () => {
    rollingPaperModal.setVisible(true);
  };

  return (
    <header className={s.base}>
      타이틀
      <Button.Default
        variant={ButtonVariant.SECONDARY}
        leadingIcon={GlyphIcon.EDIT}
        onClick={handleCreateRollingPaperButton}
      >
        롤링페이퍼 작성하기
      </Button.Default>
    </header>
  );
}
