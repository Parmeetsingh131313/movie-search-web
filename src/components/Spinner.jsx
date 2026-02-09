const Spinner = () => {
  return (
    <div
      style={{
        width: "40px",
        height: "40px",
        border: "4px solid #e0e0e0",
        borderTop: "4px solid #3498db",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
        margin: "auto"
      }}
    >
      <style>
        {`
          @keyframes spin {
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Spinner;
