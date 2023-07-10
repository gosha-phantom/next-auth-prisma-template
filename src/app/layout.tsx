import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link';
import styles from './layout.module.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Auth Prisma',
  description: 'Next Auth Prisma',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
        <body className={inter.className}>
            <nav className={styles.links}>
                <Link href='/' className={styles.link}>Main</Link>
                <Link href='/about' className={styles.link}>About</Link>
                <Link href='/profile' className={styles.link}>Profile</Link>
                <Link href='/auth/login' className={styles.link}>Log In</Link>
                <Link href='/signin' className={styles.link}>Custom SignIn</Link>
            </nav>
            <main>{children}</main>
        </body>
    </html>
  )
}
