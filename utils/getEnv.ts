type NodeEnv = "development" | "production" | "test";
type VercelEnv = "production" | "preview" | "development";

export interface Env extends NodeJS.ProcessEnv {
  VERCEL_ENV: VercelEnv;
  GA_MEASUREMENT_ID: string;
}

type BodyDataset = {
  nodeEnv?: NodeEnv;
  vercelEnv?: VercelEnv;
  gaMeasurementId?: string;
};

function createEnv(): Env {
  const dataset: BodyDataset =
    typeof document !== "undefined" ? document.body.dataset : {};
  const processEnv =
    typeof process.env !== "undefined" ? (process.env as Env) : ({} as Env);

  const env: Env = {
    NODE_ENV: dataset.nodeEnv || processEnv.NODE_ENV || "development",
    GA_MEASUREMENT_ID:
      dataset.gaMeasurementId || processEnv.GA_MEASUREMENT_ID || "",
    VERCEL_ENV: dataset.vercelEnv || processEnv.VERCEL_ENV || "development",
  };

  if (!env.VERCEL_ENV.match(/production|preview|development/)) {
    env.VERCEL_ENV = "development";
  }

  return env;
}

export function getEnv(): Env {
  return createEnv();
}

type EnvDataset = {
  "data-ga-measurement-id": string;
  "data-vercel-env": string;
  "data-node-env": string;
};

export function getEnvAsDataset(): EnvDataset {
  const { GA_MEASUREMENT_ID, NODE_ENV, VERCEL_ENV } = getEnv();

  return {
    "data-ga-measurement-id": GA_MEASUREMENT_ID,
    "data-node-env": NODE_ENV,
    "data-vercel-env": VERCEL_ENV,
  };
}
