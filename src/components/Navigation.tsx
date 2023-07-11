"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import styles from './Navigation.module.css';

export type NavLink = {
    label: string;
    href: string;
}

type NavProps = {
    navLinks: NavLink[];
}

const Navigation = ({ navLinks }: NavProps) => {
    const pathname = usePathname();
    const session = useSession();

    console.log(session);
    return (
        <nav className={styles.links}>
            {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                    <Link 
                        key={link.href}
                        href={link.href} 
                        className={`${styles.link} ${isActive? `${styles.active}` : ''}`}
                    >{link.label}</Link>
                    
                )
            })}
            {session?.data 
                ? (
                    <>
                        <Link href='/profile' className={styles.link}>Profile</Link>
                        <Link 
                            href='#' 
                            className={styles.link} 
                            onClick={() => signOut({
                                callbackUrl: '/'
                            })}
                        >Log Out</Link>                        
                    </>
                    )
                : (
                    <Link href='/api/auth/signin' className={styles.link}>Log In</Link>
                )
            }          
        </nav>
    )
}

export default Navigation;