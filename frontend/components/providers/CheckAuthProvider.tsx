"use client";

import { useCheckAuthQuery } from "@/lib/redux/features/api/apiSlice";
import { ReactNode, useEffect } from "react";

export default function CheckAuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const {
    data: user,
    isLoading: isCheckingAuth,
    isError: checkAuthError,
  } = useCheckAuthQuery();

  console.log(user);

  return children;
}
