// components/JelloWrapper.tsx
import React from "react";
// import classNames from "classnames";

interface JelloWrapperProps {
  children: React.ReactNode;
  trigger?: boolean;
  className?: string;
}

const JelloWrapper: React.FC<JelloWrapperProps> = ({
  children,
  trigger = true,
  className = "",
}) => {
  return (
    <div className={`${trigger ? "animate-jello-soft" : ""} ${className}`}>
  {children}
</div>
  );
};

export default JelloWrapper;
