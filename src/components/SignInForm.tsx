'use client'

import { useRouter } from "next/navigation";
import { signIn } from 'next-auth/react';
import type { FormEventHandler } from "react";
import styles from './SignInForm.module.css';

const SignInForm = () => {
    const router = useRouter();
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const res = await signIn('Credentials', {
            login: formData.get('login'),
            password: formData.get('password'),
            // redirect: false
        })

        console.log(res);

        if (res && !res.error) {
            router.push('/');
        } else {
            console.log(res);
        }
    }
    
    return (
        <form onSubmit={handleSubmit} className={styles.login_form}>
            <input type="text" name="login" required placeholder="Enter Your Login"/>
            <input type="password" name="password" required/>
            <button type="submit">Sign In</button>
        </form>
    )
}

export { SignInForm }