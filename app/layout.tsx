"use client";
import { Suspense } from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Suspense
          fallback={
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              Carregando... <div className="spinner"></div>
            </div>
          }
        >
          {children}
        </Suspense>
      </body>
    </html>
  );
}
