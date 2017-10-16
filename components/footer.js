export default () => (
  <footer className="footer">
    <div className="container">
      <div className="col text-center">
        <span className="text-muted">
          Created by Daniel Castillejo. Built with Next.js.
        </span>
      </div>
    </div>
    <style jsx>
      {`
        .footer {
          position: absolute;
          width: 100%;
          height: 60px;
          line-height: 60px;
          bottom: 0;
          font-size: 14px;
        }
      `}
    </style>
  </footer>
);
