import { Results } from "@elastic/react-search-ui";

import { MyResult as ResultContainer } from "./MyResult";

export class MyResults extends Results {
    constructor() {
         super();
         this.ResultContainer = { ResultContainer }
     }
     
}

export default MyResults