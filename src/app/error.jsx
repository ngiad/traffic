"use client";

const ErrorBoundary = ({ error,reset }) => {
  console.log(error)
  return <h1>nOI XY LY LOI GLOBAL CUA CLIENT : {error.message}</h1>;
};


export default ErrorBoundary
