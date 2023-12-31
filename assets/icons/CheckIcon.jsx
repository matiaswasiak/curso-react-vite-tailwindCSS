import { memo } from "react";
import PropTypes from "prop-types";

const CheckIcon = memo(function CheckIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
});

CheckIcon.displayName = "CheckIcon";

CheckIcon.propTypes = {
  className: PropTypes.string.isRequired,
};

export default CheckIcon;
