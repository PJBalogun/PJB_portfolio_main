import React from 'react';
import BounceLoader from "react-spinners/BounceLoader"

export default function Loader() {
  return (
    <div>
        <BounceLoader
            color={"#009ac5"}
            loading={false}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
  </div>
  );
}