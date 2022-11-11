import { CCol, CContainer, CForm, CFormInput, CRow } from '@coreui/react'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js 13!</a>
        </h1>

        {/* CoreUI Checking  */}
        {/* <div className="">
          <CForm>
            <CFormInput
              type="email"
              id="exampleFormControlInput1"
              label="Email address"
              placeholder="name@example.com"
              text="Must be 8-20 characters long."
              aria-describedby="exampleFormControlInputHelpInline"
            />
          </CForm>
        </div> */}



      </main>

    </div>
  )
}
