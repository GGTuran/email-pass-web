import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Home = () => {
    const authInfo = useContext(AuthContext);

    return (
        <div>
            <h1>Home sweet home of {authInfo.name}</h1>
        </div>
    );
};

export default Home;