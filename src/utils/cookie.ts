// utils/cookies.ts
import { NextApiResponse } from 'next';
import { serialize } from 'cookie';

export function setTokenCookie(res: NextApiResponse, token: string): void {
  const tokenCookie = serialize('token', token, {
    maxAge: 60 * 60 * 24 * 7,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    sameSite: 'strict',
  });
  res.setHeader('Set-Cookie', tokenCookie);
}

export function removeTokenCookie(res: NextApiResponse): void {
  const tokenCookie = serialize('token', '', {
    maxAge: -1,
    path: '/',
  });
  res.setHeader('Set-Cookie', tokenCookie);
}
