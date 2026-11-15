import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Devine Elevator | Elevator Solutions & Services in Bhubaneswar",
  description:
    "Devine Elevator provides elevator solutions and services from Bhubaneswar, Odisha — automatic, manual, hospital, goods, MRL and home elevators with installation, maintenance and AMC support.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-bg text-text">{children}</body>
    </html>
  );
}
