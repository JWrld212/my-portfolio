declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

// Provide a simple declaration for react-scroll to avoid build-time errors
declare module "react-scroll";
