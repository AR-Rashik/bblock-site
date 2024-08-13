import React from "react"; // Import React
import clsx from "clsx";

// Define prop types
interface ContainerProps {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
  id?: string;
}

const Container: React.FC<ContainerProps> = ({
  as: Component = "div",
  className,
  children,
  id,
}) => {
  return (
    <Component
      id={id}
      className={clsx("mx-auto max-w-7xl px-6 lg:px-8", className)}
    >
      <div className="mx-auto max-w-2xl lg:max-w-none">{children}</div>
    </Component>
  );
};

export default Container;
