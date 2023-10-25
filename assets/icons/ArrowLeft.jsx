import { memo } from "react";
import PropTypes from "prop-types";

const ArrowLeft = memo(function ArrowLeft({ className }) {
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
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  );
});

ArrowLeft.displayName = "ArrowLeft";

ArrowLeft.propTypes = {
  className: PropTypes.string.isRequired,
};

export default ArrowLeft;
