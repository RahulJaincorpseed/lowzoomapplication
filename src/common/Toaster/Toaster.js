
import React from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
 
// This is main function
function Toaster(){
    const notify = ()=>{
        toast('User Added successfully')
    }
    return (
        <div className="GeeksforGeeks">
            <button onClick={notify}>Click Me!</button>
        </div>
    );
}
  
export default Toaster;