const Layout = (props) => {
  return (
    <div className="section">
      {props.children}

      <style jsx>
        {`
          .section {
            height: auto;
            width:100%;
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
