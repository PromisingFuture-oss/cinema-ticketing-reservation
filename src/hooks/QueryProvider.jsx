'use client'
import { SessionProvider } from "next-auth/react";

const QueryProvider = ({ children }) => {
    return (
        <SessionProvider>{children}</SessionProvider>
    );
};

export default QueryProvider;
