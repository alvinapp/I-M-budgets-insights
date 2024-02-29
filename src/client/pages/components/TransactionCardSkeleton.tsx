import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const TransactionCardSkeleton = () => {
  return (
    <div className="rounded-lg px-4 py-3 w-auto mb-2">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <div className="flex flex-col mr-3">
              <Skeleton circle width={40} height={40} />
            </div>
            <div className="flex flex-col">
              <div className=" font-primary text-sm font-medium text-black text-start text-ellipsis overflow-hidden whitespace-nowrap w-44">
                <Skeleton />
              </div>
              <div
                className={`font-primary text-xs font-medium tracking-wide text-start`}
              >
                <Skeleton />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className=" font-primary text-sm font-medium text-black text-end text-ellipsis overflow-hidden whitespace-nowrap w-16">
            <Skeleton />
          </div>
          <div
            className={`font-primary text-xs font-medium tracking-wide text-end w-12`}
          >
            <Skeleton />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TransactionCardSkeleton;
