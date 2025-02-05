import {
  spacingVars,
  Stack,
  StackJustify,
  StackWrap,
} from '@tapie-kr/inspire-react';
import { motion } from 'framer-motion';
import LetterBox from '../LetterBox';
import { LetterBoxTheme } from '../LetterBox/shared';

export default function LetterBoxList() {
  const themes = [
    LetterBoxTheme.PINK,
    LetterBoxTheme.BLUE,
    LetterBoxTheme.GREEN,
    LetterBoxTheme.YELLOW,
  ];

  const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}>
      <Stack
        wrap={StackWrap.WRAP}
        spacing={spacingVars.large}
        justify={StackJustify.START}>
        {Array.from({ length: 10 }).map((_, i) => {
          const randomTheme = themes[Math.floor(Math.random() * themes.length)];
          const randomRotate = getRandomInt(-4, 4);

          return (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: i * 0.1 }}>
              <LetterBox
                from={'권지원'}
                content={
                  '감사했습니다. 싸장님\n저는 아미르에요.\n남다르게 태어났죠.'
                }
                theme={randomTheme}
                rotate={randomRotate}
              />
            </motion.div>
          );
        })}
      </Stack>
    </motion.div>
  );
}
