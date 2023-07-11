import './globals.css'
import type { Metadata } from 'next'
import Navigation from '@/components/Navigation';
import { NavLink } from '@/components/Navigation';
import { Providers } from '@/components/Providers'; 
import styles from './layout.module.css';

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Next Auth Prisma',
    description: 'Next Auth Prisma',
}

const navLinks: NavLink[] = [
    { label: 'Main', href: '/' },
    { label: 'About', href: '/about' },
    // { label: 'Profile', href: '/profile' },
    // { label: 'App Log In', href: '/api/auth/signin' },
    // { label: 'Custom Log In', href: '/signin' },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
        <body>
          <Providers>
            <Navigation navLinks={navLinks}/>
            <main className={styles.page}>{children}</main>
          </Providers>
        </body>
    </html>
  )
}
