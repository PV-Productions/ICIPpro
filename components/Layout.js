const Layout = (props) => {
  return (
    <div className="section">
      {props.children}

      <style jsx>
        {`
          .section {
            height: 100vh;
            width: 100%;
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
