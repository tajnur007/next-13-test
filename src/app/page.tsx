'use client';

import { CRow, CCol, CFormInput, CFormLabel } from '@coreui/react'
import { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import { companyNameState } from '../contexts/atoms';
import styles from './page.module.css'

export default function Home() {
  const [companyName, setCompanyName] = useRecoilState(companyNameState);

  const handleCompanyNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCompanyName(value);
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js 13!</a>
        </h1>

        {/* CoreUI Checking  */}
        <CRow className="mb-3">
          <CFormLabel htmlFor="companyName" className="col-sm-6 col-form-label"> Enter Company Name: </CFormLabel>
          <CCol sm={6}>
            <CFormInput
              type="text"
              id="companyName"
              defaultValue={companyName}
              placeholder="Vivasoft Limited"
              onChange={handleCompanyNameChange}
            />
          </CCol>
        </CRow>



      </main>

    </div>
  )
}
