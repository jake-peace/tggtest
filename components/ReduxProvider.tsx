"use client";

import { store } from "@/app/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";

export const ReduxProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <Provider store={store}>{children}</Provider>;
};
