import { spacingVars } from '@tapie-kr/inspire-react';
import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import Masonry from 'react-layout-masonry';
import LetterBox from '../LetterBox';
import { LetterBoxTheme } from '../LetterBox/shared';
import * as s from './styles.css';

interface LetterBoxItem {
  theme: LetterBoxTheme;
  rotate: number;
}

export default function LetterBoxList() {
  const [columnsCount, setColumnsCount] = useState(4);
  const [mounted, setMounted] = useState(false);

  // 처음 한 번만 생성되는 아이템 속성들
  const items = useMemo(() => {
    const themes = [
      LetterBoxTheme.PINK,
      LetterBoxTheme.BLUE,
      LetterBoxTheme.GREEN,
      LetterBoxTheme.YELLOW,
    ];

    const getRandomInt = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    return Array.from({ length: 10 }).map<LetterBoxItem>(() => ({
      theme: themes[Math.floor(Math.random() * themes.length)],
      rotate: getRandomInt(-4, 4),
    }));
  }, []);

  useEffect(() => {
    const calculateColumns = () => {
      const minCardWidth = 300;
      const padding = 40 * 2;
      const gap = 40;

      const availableWidth = window.innerWidth - padding;

      if (availableWidth < minCardWidth) {
        setColumnsCount(1);
        return;
      }

      const maxColumns = Math.floor(
        (availableWidth + gap) / (minCardWidth + gap),
      );

      setColumnsCount(maxColumns);
    };

    calculateColumns();

    const timer = setTimeout(() => {
      setMounted(true);
    }, 200 + (items.length - 1) * 100);

    window.addEventListener('resize', calculateColumns);
    return () => {
      window.removeEventListener('resize', calculateColumns);
      clearTimeout(timer);
    };
  }, []);

  return (
    <motion.div
      initial={!mounted ? { opacity: 0 } : false}
      animate={!mounted ? { opacity: 1 } : false}
      transition={{ duration: 0.2 }}>
      <Masonry
        columns={columnsCount}
        className={s.base}
        columnProps={{
          style: {
            gap: spacingVars.large,
          },
        }}>
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={!mounted ? { y: 20, opacity: 0 } : false}
            animate={!mounted ? { y: 0, opacity: 1 } : false}
            transition={{ duration: 0.2, delay: i * 0.1 }}>
            <LetterBox
              from={'권지원'}
              content={
                i % 2 == 0
                  ? '감사했습니다. 싸장님\n저는 아미르에요.\n남다르게 태어났죠.'
                  : '감사했습니다. 싸장님\n저는 아미르에요.\n남다르게 태어났죠.'.repeat(
                      4,
                    )
              }
              theme={item.theme}
              rotate={item.rotate}
            />
          </motion.div>
        ))}
      </Masonry>
    </motion.div>
  );
}
