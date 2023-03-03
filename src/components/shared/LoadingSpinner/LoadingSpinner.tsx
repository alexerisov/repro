import React from "react";

import { CircularProgress } from "@mui/material";

interface LoadingSpinnerProps {
  size?: number;
}

export const LoadingSpinner = ({ size = 24 }: LoadingSpinnerProps) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <CircularProgress size={size} />
    </div>
  );
};
