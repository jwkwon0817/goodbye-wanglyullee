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
}

export default function LetterBox(props: LetterBoxProps) {
  const { content, from, theme } = props;
  return (
    <VStack className={cn(s.base, s[theme])} align={StackAlign.START}>
      <Typo.Base
        weight={Weight.SEMIBOLD}
        color={colorVars.solid.white}
        className={s.from}>
        From. {from}
      </Typo.Base>
      <Typo.Base weight={Weight.SEMIBOLD} color={colorVars.solid.white}>
        {content}
      </Typo.Base>
    </VStack>
  );
}
