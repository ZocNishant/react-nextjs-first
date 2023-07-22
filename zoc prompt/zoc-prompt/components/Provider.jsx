"use client";

import { SessionProvider } from "next-auth/react";
import { use } from "bcrypt/promises";

const Provider = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
