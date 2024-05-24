import { cookieToInitialState } from "wagmi";
import { headers } from "next/headers";

import { Inter } from "next/font/google";

import { config } from "@/lib/config";
import { Providers } from "@/lib/providers";

const inter = Inter({ subsets: ["latin"] });

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));

  return (
    <html lang="en">
      <Providers initialState={initialState}>
        <body className={inter.className} style={{ margin: 0, padding: 0 }}>
          {children}
        </body>
      </Providers>
    </html>
  );
}

export default RootLayout;
