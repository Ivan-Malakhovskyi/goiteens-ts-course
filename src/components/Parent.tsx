import React, { useState, type FC, type ReactNode } from "react";

interface IParent {
  children: ReactNode;
}

export const Parent: FC<IParent> = ({ children }) => {
  const [state, setState] = useState<null | string>(null);

  return <div>{children}</div>;
};
