import { Button, ButtonVariant, GlyphIcon } from "@tapie-kr/inspire-react";
import * as s from "./style.css";

export default function Header() {

  const handleCreateRollingPaperButton = () => {
    // TODO: Implement
  };

  return (
    <header className={s.base}>
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
