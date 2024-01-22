"use client";
import rootState from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";

const ReduxProvider = ({ children }) => {
  return (
    <Provider store={rootState}>
      {children}
    </Provider>
  );
};

export default ReduxProvider;
