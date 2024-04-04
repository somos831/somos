declare module "*.module.css" {
  const content: Record<string, string>;
  export default content;
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpeg" {
  const value: string;
  export default value;
}
