import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-[15px]" };
const variants = {
  outline: {
    white_A700_7f:
      "border border-solid border-white-A700_7f text-white-A700_cc",
  },
  fill: {
    gray_900_03: "bg-gray-900_03 text-black-900_01",
    gray_900_02: "bg-gray-900_02",
    white_A700_e5: "bg-white-A700_e5 text-gray-900_01",
    white_A700_19: "bg-white-A700_19 text-white-A700",
    white_A700_33: "bg-white-A700_33 text-white-A700",
  },
};
const sizes = { xs: "p-[5px]", sm: "p-2", md: "p-[11px]", lg: "p-3.5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "white_A700_7f",
    "gray_900_03",
    "gray_900_02",
    "white_A700_e5",
    "white_A700_19",
    "white_A700_33",
  ]),
};

export { Button };
