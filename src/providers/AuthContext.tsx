import { createContext, useContext, useEffect, useState } from "react";
import type { AuthError, Session, User } from "@supabase/supabase-js";
import { supabase } from "../supabaseClient";

type SignUpResult =
  | {
      success: true;
      data: { user: User | null; session: Session | null };
      error: null;
    }
  | {
      success: false;
      data: null;
      error: AuthError;
    };

type AuthContextValue = {
  signOut: () => Promise<void>;
  session: Session | null;
  signInUser: (credentials: {
    email: string;
    password: string;
  }) => Promise<
    { success: boolean; data?: unknown; error?: unknown } | undefined
  >;
  signUpNewUser: (
    email: string,
    password: string,
  ) => Promise<SignUpResult>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [session, setSession] = useState<Session | null>(null);

  async function signUpNewUser(
    email: string,
    password: string,
  ): Promise<SignUpResult> {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    if (error) {
      console.error("there was a problem signing up!", error);
      return { success: false, data: null, error };
    }
    return { success: true, error: null, data };
  }
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  async function signInUser({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (error) {
        console.log(error);
        return { success: false, error: error.message };
      }
      console.log(data);
      return { success: true, data };
    } catch (err) {
      console.log(err);
    }
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("there was an error:", error);
    }
  }
  return (
    <AuthContext.Provider
      value={{ session, signUpNewUser, signOut, signInUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export const UserAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("UserAuth must be used inside AuthContextProvider");
  }

  return context;
};
