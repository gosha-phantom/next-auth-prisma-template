import prisma from "@/config/prisma";

export default async function SignIn() {
    // const user = await prisma.userauth.create({
    //     data: {
    //         login: 'ivan',
    //         password: 'ivan123',
    //         userID: 1
    //     }
    // })

    // return <div>{JSON.stringify(user)}</div>
    return <h2>Custom Sign In</h2>
}