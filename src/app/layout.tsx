'use client';

import DefaultLayout from '../layouts/DefaultLayout';
import { RecoilRoot } from 'recoil';

import '@styles/globals.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <RecoilRoot>
        <DefaultLayout>{children}</DefaultLayout>
      </RecoilRoot>
    </html>
  )
}
