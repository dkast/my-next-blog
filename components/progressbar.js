const ProgresBar = ({ percentage }) => (
  <div className="progress" style={{ height: "2px" }}>
    <div className="progress-bar bg-dark" />
    <style jsx>
      {`
        .progress-bar {
          width: ${percentage + "%"};
        }
      `}
    </style>
  </div>
);

export default ProgresBar;
