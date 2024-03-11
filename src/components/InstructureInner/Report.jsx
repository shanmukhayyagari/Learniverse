import React from "react";
import "../../../src/css/Reposrt.css";


export default function Report() {
 
  return (
    <>
    
    <div>
      <form
          action="http://localhost/lerniverse/backend/report.php"
          method="POST"
          id="form"
       
      >
        <h5>Submit the pdf file of the report</h5>
        <input
          type="file"
         
          name="image"
          
          style={{
            border: "2px solid gray",
            background: "rgb(51,51,51)",
            color: "white",
            marginTop: '-90px',
          }}
          required
        />
        <input style={{marginTop:'-100px',}} type="submit" name="submit"  />
      </form>
    </div>
    
    </>
  );
}
