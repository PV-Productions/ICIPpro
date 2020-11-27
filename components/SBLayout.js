import Navbar from "./Navbar";
import Sidebar from "./sidebar/Sidebar";
import Navbar2 from "./Navbar2";
const SBLayout = (props) => {
  const [wWidth, setwWidth] = React.useState(0);
  React.useEffect(() => {
    setwWidth(window.innerWidth);
  });
  return (
    <>
       {wWidth>560?<Navbar />:<Navbar2/>} 

      <div className="sectionSB">
        {props.children}

        <style jsx>
          {`
            .section {
              height: auto;
              width: 100%;
            }
          `}
        </style>
      </div>
    </>
  );
};

export default SBLayout;
