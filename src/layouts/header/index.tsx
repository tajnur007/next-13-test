'use client';

import { useRecoilValue } from 'recoil';
import { companyNameState } from '../../contexts/atoms';
import styles from './header.module.css';

const Header = () => {
  const companyName = useRecoilValue(companyNameState);

  return (
    <header className={styles.header}>
      {companyName}
    </header>
  );
};

export default Header;