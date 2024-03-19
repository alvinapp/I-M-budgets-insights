import React from "react";

export const ErrorFallback = ({ error }: { error: any }) => {
  return (
    <div className="h-screen flex flex-col items-center justify-center mx-3.5">
      <div className="font-primary text-base text-primary_light font-medium tracking-subtitle mb-3">
        Something went wrong:
      </div>
      <div className="font-primary text-tiny text-label font-medium tracking-subtitle">
        {error.message}
      </div>
    </div>
  );
};
