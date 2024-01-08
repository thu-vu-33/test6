import React from "react";

const sizeClasses = {
  txtInterMedium18: "font-inter font-medium",
  txtSFCompactBlack250: "font-black font-sfcompact",
  txtInterSemiBold14: "font-inter font-semibold",
  txtInterMedium12: "font-inter font-medium",
  txtInterRegular16WhiteA70099: "font-inter font-normal",
  txtInterSemiBold12: "font-inter font-semibold",
  txtInterMedium16: "font-inter font-medium",
  txtInterMedium28: "font-inter font-medium",
  txtInterSemiBold16: "font-inter font-semibold",
  txtSFCompactRegular20: "font-medium font-sfcompact",
  txtInterRegular12: "font-inter font-normal",
  txtInterRegular16WhiteA7007f: "font-inter font-normal",
  txtInterRegular16: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
