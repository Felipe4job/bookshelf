import { Metadata } from 'next';
import './globals.css';
import { Providers } from '@/providers';
import { getSession } from '@/libs/auth';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();

  // A session é {user: type user}
  
  if(session?.error) return redirect('/logout?error=' + session.error);


  return (
    <>
      <html lang="pt-BR">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <link href="https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@300;400&display=swap" rel="stylesheet" />
          <title>EST - Minha Estante</title>
        </head>
        <body>
          <Providers.auth session={session}>
            {children}
          </Providers.auth>
        </body>
      </html>
    </>
  );
}
