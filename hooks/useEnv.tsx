import * as React from "react";
import { Env, getEnv } from "utils/getEnv";

export function useEnv() {
  const env: Env = React.useContext(EnvContext);
  return env;
}

export function createEnv(): Env {
  return getEnv();
}

const EnvContext = React.createContext<Env>(createEnv());

interface Props {
  children: React.ReactNode;
  env: Env;
}

export const EnvProvider = ({ children, env }: Props) => (
  <EnvContext.Provider value={env}>{children}</EnvContext.Provider>
);
