import React from "react";
import MainButton from "./MainButton";

export const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: {
  error: any;
  resetErrorBoundary: any;
}) => {
  console.log("ERROR", error);
  return (
    <div className="h-screen flex flex-col items-center justify-center mx-3.5">
      <div className="font-primary text-base text-primary_light font-medium tracking-subtitle mb-3 text-center">
        Something went wrong
      </div>
      <div className="fixed bottom-5 left-0 right-0 mx-3.5">
        <MainButton
          title="Try again"
          isDisabled={false}
          click={resetErrorBoundary}
        />
      </div>
    </div>
  );
};
