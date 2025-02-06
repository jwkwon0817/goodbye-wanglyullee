import {
  Button,
  ButtonVariant,
  DStack,
  GlyphIcon,
  spacingVars,
  StackJustify,
} from '@tapie-kr/inspire-react';

import { useRollingPaperModalVisible } from '../../stores/RollingPaperModal';
import TitleSymbol from '../TitleSymbol';

export default function Header() {
  const rollingPaperModal = useRollingPaperModalVisible();

  const handleCreateRollingPaperButton = () => {
    rollingPaperModal.setVisible(true);
  };

  return (
    <DStack
      fullWidth
      justify={StackJustify.BETWEEN}
      spacing={spacingVars.medium}>
      <TitleSymbol />
      <Button.Default
        variant={ButtonVariant.SECONDARY}
        leadingIcon={GlyphIcon.EDIT}
        onClick={handleCreateRollingPaperButton}>
        롤링페이퍼 작성하기
      </Button.Default>
    </DStack>
  );
}
