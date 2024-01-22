import { useState } from "react"
import { WithNestedObject } from "./Componets/WIthNestedObject"
import { Products } from "./Products"
import { Cart } from "./Cat"
import { PreservingState } from "./Componets/PreservingAndesettingState/PreservingANdResttingState";
import { SameComponentAtTheSamePositionPreservesState } from "./Componets/SameComponentAtTheSamePositionPreservesState/SameComponentAtTheSamePositionPreservesState";
import { DifferentComponentsAtTheSamePositionResetState } from "./Componets/DifferentComponentsAtTheSamePositionResetState/DifferentComponentsAtTheSamePositionResetState";
import PreservingAndResetingState from "./Componets/PreservingAndResetingState/PreservingAndResetingState";
import ResettingAFormWithAkey from "./Componets/ResettingAFormWithAkey/ResettingAFormWithAkey";


function App() {
  // const [carts, setCarts]=useState([]);

  const [isFancy, setIsFancy] = useState(false);
  return (
    <>
      {/* <WithNestedObject /> */}
      {/* <Products/>
      <Cart carts={carts}/> */}

      {/* <PreservingState/> */}
      {/* <SameComponentAtTheSamePositionPreservesState/> */}
      {/* <DifferentComponentsAtTheSamePositionResetState/> */}
      {/* <PreservingAndResetingState /> */}
      <ResettingAFormWithAkey/>
    </>
  )
}

export default App
