import {
  colorVars,
  StackAlign,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';
import cn from 'classnames';
import { LetterBoxTheme } from './shared';
import * as s from './styles.css';

interface LetterBoxProps {
  content: string;
  from: string;
  theme: LetterBoxTheme;
  rotate: number;
}

export default function LetterBox(props: LetterBoxProps) {
  const { content, from, theme, rotate } = props;
  return (
    <VStack
      className={cn(s.base, s[theme])}
      align={StackAlign.START}
      style={{
        rotate: `${rotate}deg`,
      }}>
      <Typo.Base
        weight={Weight.SEMIBOLD}
        color={colorVars.solid.white}
        className={s.from}>
        From. {from}
      </Typo.Base>
      <Typo.Base
        weight={Weight.SEMIBOLD}
        color={colorVars.solid.white}
        className={s.content}>
        {content}
      </Typo.Base>
    </VStack>
  );
}
