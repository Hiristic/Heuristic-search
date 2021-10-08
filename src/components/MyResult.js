import { Result } from "@elastic/react-search-ui";

export class MyResult extends Result {

     render() {
         return (
             <div>
                 <button {...this.props}>
                     Click me!
                 </button>
             </div>
         )
     }
 }

 export default MyResult;