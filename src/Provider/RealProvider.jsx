/* eslint-disable react/prop-types */
import { createContext } from "react";

export const RealContext = createContext(null);

const RealProvider = ({children}) => {
    const realInfo = {}
    return (
       <RealContext.Provider value={realInfo}>
            {children}
       </RealContext.Provider>
    );
};

export default RealProvider;