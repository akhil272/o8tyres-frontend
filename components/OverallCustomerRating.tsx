import React from "react";
import UserRating from "./UserRating";

export default function OverallCustomerRating() {
  return (
    <>
      <div className="flex flex-col">
        <h4 className="font-semibold">Customer Reviews</h4>
        <p>There are 120 reviews for this tyre</p>
        <div className="py-2">
          <label className="font-semibold"> Overall Rating</label>
          <span className="flex gap-2 text-lg font-bold">
            <UserRating rating={4} /> 4.65/5
          </span>
        </div>
        <span className="flex xl:w-1/4 w-full flex-col gap-4">
          <span className="flex w-full items-center gap-2">
            <label
              id="p03e-label"
              className="mb-0 w-9 shrink-0 text-center text-xs text-slate-500"
            >
              5 star
            </label>
            <progress
              aria-labelledby="p03e-label"
              id="p03e"
              max="100"
              value="75"
              className="block h-3 w-full overflow-hidden rounded bg-secondary [&::-webkit-progress-bar]:bg-secondary [&::-webkit-progress-value]:bg-primary [&::-moz-progress-bar]:bg-primary"
            >
              75%
            </progress>
            <span className="w-9 text-xs font-bold text-slate-700">65% </span>
          </span>
          <span className="flex w-full items-center gap-2">
            <label
              id="p03e-label"
              className="mb-0 w-9 shrink-0 text-center text-xs text-slate-500"
            >
              4 star
            </label>
            <progress
              aria-labelledby="p03e-label"
              id="p03e"
              max="100"
              value="28"
              className="block h-3 w-full overflow-hidden rounded bg-secondary [&::-webkit-progress-bar]:bg-secondary [&::-webkit-progress-value]:bg-primary [&::-moz-progress-bar]:bg-primary"
            >
              75%
            </progress>
            <span className="w-9 text-xs font-bold text-slate-700">30% </span>
          </span>
          <span className="flex w-full items-center gap-2">
            <label
              id="p03e-label"
              className="mb-0 w-9 shrink-0 text-center text-xs text-slate-500"
            >
              3 star
            </label>
            <progress
              aria-labelledby="p03e-label"
              id="p03e"
              max="100"
              value="18"
              className="block h-3 w-full overflow-hidden rounded bg-secondary [&::-webkit-progress-bar]:bg-secondary [&::-webkit-progress-value]:bg-primary [&::-moz-progress-bar]:bg-primary"
            >
              75%
            </progress>
            <span className="w-9 text-xs font-bold text-slate-700">4% </span>
          </span>
          <span className="flex w-full items-center gap-2">
            <label
              id="p03e-label"
              className="mb-0 w-9 shrink-0 text-center text-xs text-slate-500"
            >
              2 star
            </label>
            <progress
              aria-labelledby="p03e-label"
              id="p03e"
              max="100"
              value="0"
              className="block h-3 w-full overflow-hidden rounded bg-secondary [&::-webkit-progress-bar]:bg-secondary [&::-webkit-progress-value]:bg-primary [&::-moz-progress-bar]:bg-primary"
            >
              75%
            </progress>
            <span className="w-9 text-xs font-bold text-slate-700">0% </span>
          </span>
          <span className="flex w-full items-center gap-2">
            <label
              id="p03e-label"
              className="mb-0 w-9 shrink-0 text-center text-xs text-slate-500"
            >
              1 star
            </label>
            <progress
              aria-labelledby="p03e-label"
              id="p03e"
              max="100"
              value="0"
              className="block h-3 w-full overflow-hidden rounded bg-secondary [&::-webkit-progress-bar]:bg-secondary [&::-webkit-progress-value]:bg-primary [&::-moz-progress-bar]:bg-primary"
            >
              75%
            </progress>
            <span className="w-9 text-xs font-bold text-slate-700">0% </span>
          </span>
        </span>
      </div>
    </>
  );
}
