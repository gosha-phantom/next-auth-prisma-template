export { default } from 'next-auth/middleware';

export const config = { matcher: ['/profile']};
// для динамических адресов
// export const config = { matcher: ['/profile', '/protected/:path*']};