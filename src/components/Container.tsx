import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  fluid?: boolean;
}

const Container = (props: ContainerProps) => {
  const { children, className = "", fluid } = props;
  const containerClass = fluid ? "container-fluid" : "container";

  return <Box className={`${containerClass} ${className}`}>{children}</Box>;
};

export default Container;
