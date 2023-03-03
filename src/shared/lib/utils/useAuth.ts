import { UseSessionOptions, useSession } from "next-auth/react";

export const useAuth = (options?: UseSessionOptions<boolean>) => {
  const { data: session, status } = useSession(options);
  return { session, isLoading: status === "loading" };
};
