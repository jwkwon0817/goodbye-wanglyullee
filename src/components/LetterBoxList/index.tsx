import { spacingVars } from '@tapie-kr/inspire-react';
import { motion } from 'framer-motion';
import React, { useEffect, useMemo, useState } from 'react';
import Masonry from 'react-layout-masonry';
import { getData } from '../../api/rollingpaper';
import LetterBox from '../LetterBox';
import { LetterBoxTheme } from '../LetterBox/shared';
import * as s from './styles.css';

interface MessageResponse {
  id: number;
  author: string;
  message: string;
  time: string;
}

interface LetterBoxItem {
  data: MessageResponse;
  theme: LetterBoxTheme;
  rotate: number;
}

const themes = [
  LetterBoxTheme.PINK,
  LetterBoxTheme.BLUE,
  LetterBoxTheme.GREEN,
  LetterBoxTheme.YELLOW,
];

const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default function LetterBoxList() {
  const [columnsCount, setColumnsCount] = useState(4);
  const [mounted, setMounted] = useState(false);
  const [data, setData] = useState<MessageResponse[]>([]);

  useEffect(() => {
    const query = async () => {
      const response = await getData();
      setData(response);
    };
    query();
  }, []);

  const items = useMemo(() => {
    return data.map<LetterBoxItem>((item) => ({
      data: item,
      theme: themes[Math.floor(Math.random() * themes.length)],
      rotate: getRandomInt(-4, 4),
    }));
  }, [data]);

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
  }, [items.length]);

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
          <Item key={i} i={i} item={item} />
        ))}
      </Masonry>
    </motion.div>
  );
}

const Item = React.memo(({ i, item }: { i: number; item: LetterBoxItem }) => {
  return (
    <motion.div
      key={i}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: i * 0.05 }}>
      <LetterBox
        from={item.data.author}
        content={item.data.message}
        theme={item.theme}
        rotate={item.rotate}
      />
    </motion.div>
  );
});
