import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Upload.css"


const Upload = () => {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
      }, []);
    
    return (
        <div className="frame">
        <div className="center">
          
  
      <div className="container-xl my-5 p-4">
        <h2 className="">Photo Galleria</h2>
  
        <div className="container dropzone p-3 my-3">
          <form>
            <div className="form-group">
              <label htmlFor="exampleFormControlFile1">
                <b>Upload your image</b> :
               
              </label>
              
              <input
                type="file"
                className="btn form-control-file"
                id="exampleFormControlFile1"
              />
            </div>
            <br />

            <button>
              Upload
            </button>
   
          </form>
        </div>
         
       
        
     
      </div>
      </div>
    </div>
    )
}


export default Upload