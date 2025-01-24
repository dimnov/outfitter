const Star = ({ fill, size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 19 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
      fill={fill}
    />
  </svg>
);

function StarScore({ score, size }) {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index}>
      {index < score ? <Star fill={"#FFC633"} size={size} /> : <Star fill={"#ccc"} size={size} />}
    </span>
  ));

  return <div style={{ display: "flex", gap: "4px" }}>{stars}</div>;
}

export default StarScore;
