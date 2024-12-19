import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign up to create your account",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
