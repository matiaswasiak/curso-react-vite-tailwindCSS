import { memo } from "react";
import PropTypes from "prop-types";

const CloseIcon = memo(function CloseIcon({ className, onClick }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
});

CloseIcon.displayName = "CloseIcon";

CloseIcon.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default CloseIcon;
