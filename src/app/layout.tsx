import '@styles/globals.css';
import DefaultLayout from '../layouts/DefaultLayout';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <DefaultLayout>{children}</DefaultLayout>
    </html>
  )
}
