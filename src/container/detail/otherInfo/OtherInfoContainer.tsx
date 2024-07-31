import React, { ReactNode } from "react";

const OtherInfoContainer = ({children} : {children : ReactNode}) => {
  return (
    <ul className="bg-[rgba(255,255,255,0.1)] py-3 px-5 mt-5 italic last:border-none">
        {children}
    </ul>
  );
};

export default OtherInfoContainer;
