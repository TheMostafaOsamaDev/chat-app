import React from "react";
import StoreProvider from "./StoreProvider";
import CheckAuthProvider from "./CheckAuthProvider";
import { Toaster } from "react-hot-toast";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <CheckAuthProvider>
        {children}
        <Toaster />
      </CheckAuthProvider>
    </StoreProvider>
  );
}
