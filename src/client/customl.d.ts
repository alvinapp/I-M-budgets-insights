declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "@mono.co/connect.js";

declare module "*.webp" {
  const content: any;
  export default content;
}
declare module "*.png" {
  const content: any;
  export default content;
}

interface AppConfig {
  ENVIRONMENT: string;
  API_URL: string;
  TOKEN: string | null;
  IDENTIFIER: string | null;
  HOST: string | null;
  PORT: string | null;
  ACCESS_KEY: string | null;
}

declare module "@react-feather";
