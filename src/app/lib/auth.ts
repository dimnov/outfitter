import { supabase } from "./supabase";

export const register = async (email, password) => {
  const { user, error } = await supabase.auth.signUp({ email, password });

  if (error) {
    console.error(error.message);
    return { error: error.message };
  }

  return { user };
};

export const login = async (email, password) => {
  const { user, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    console.error(error.message);
    return { error: error.message };
  }

  return { user };
};

export const getUser = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
};
