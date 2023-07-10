import type { AuthOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authConfig: AuthOptions = {
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
              login: { label: "Login", type: "text", placeholder: "Enter your login" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                //
                if (!credentials || !credentials.login || ! credentials.password) {
                    return null
                }
            
                let userDb = await prisma.userauth.findFirst({
                    where: { login: credentials.login, password: credentials.password }
                })

                if (!userDb) { return null; }

                if (userDb) {
                    // Any object returned will be saved in `user` property of the JWT
                    const { password, ...userWithoutPassword } = userDb;
                    return userWithoutPassword as User;
                }

                // If you return null then an error will be displayed advising the user to check their details.
                return null
            }
          })
    ],
    // pages: {
    //     signIn: '/signin'
    // }
}