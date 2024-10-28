import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gemini Chat bot",
  description: "A chat bot powered by Google's Gemini AI model",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="m-0">{children}</body>
    </html>
  );
}
