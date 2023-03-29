"use client";

import { SessionProvider } from "next-auth/react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { CartStateProvider } from "@/lib/Cart";

const queryClient = new QueryClient();

type Props = {
  children: React.ReactNode;
};

export default function Providers({ children }: Props) {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <CartStateProvider>
          {children}
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
          <Toaster />
        </CartStateProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}
