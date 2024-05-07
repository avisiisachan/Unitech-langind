// framer-motion.d.ts

declare module 'framer-motion' {
    export interface MotionProps {
      // Define the motion props here
      animate?: any;
      initial?: any;
      exit?: any;
      whileHover?: any;
      // Add more as needed
    }
  
    export interface MotionDivProps extends MotionProps, React.HTMLAttributes<HTMLDivElement> {}
  
    // Add more interfaces for other HTML elements if needed
  
    // Export the motion components
    export const motion: {
      div: React.FC<MotionDivProps>;
      // Add more motion components as needed
    };
  }
  