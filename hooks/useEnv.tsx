import * as React from "react";

export type Env = {
  NODE_ENV: "production" | "development" | "test";
  VERCEL_ENV: "production" | "preview" | "development";
  GA_MEASUREMENT_ID: string;
};

export function useEnv() {
  const env: Env = React.useContext(EnvContext);
  return env;
}

export function createEnv(): Env {
  const env = typeof process.env !== "undefined" ? process.env : {};

  let {
    NODE_ENV = "development",
    GA_MEASUREMENT_ID = "",
    VERCEL_ENV = "development",
  } = env as Env;

  if (!VERCEL_ENV.match(/production|preview|development/)) {
    VERCEL_ENV = "development";
  }

  return {
    NODE_ENV,
    GA_MEASUREMENT_ID,
    VERCEL_ENV,
  };
}

const EnvContext = React.createContext<Env>(createEnv());

interface Props {
  children: React.ReactNode;
  env: Env;
}

export const EnvProvider = ({ children, env }: Props) => (
  <EnvContext.Provider value={env}>{children}</EnvContext.Provider>
);
