import Navbar from './Navbar';
import Sidebar from './sidebar/Sidebar'

const SBLayout = (props) => {
    return (
      <>
          <Navbar/>
       <Sidebar/>
      <div className="sectionSB">
         
      
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
      </>
    );
  };
  
  export default SBLayout;
  