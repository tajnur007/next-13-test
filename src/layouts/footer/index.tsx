'use client';

import { useRecoilValue } from 'recoil';
import { companyNameState } from '../../contexts/atoms';
import styles from './footer.module.css';

const Footer = () => {
  const companyName = useRecoilValue(companyNameState);

  return (
    <footer className={styles.footer}>
      Copyright &copy; 2022. All rights reserved by <strong> {companyName} </strong>
    </footer>
  );
};

export default Footer;