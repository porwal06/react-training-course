import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function RootEventLayout(){
    return <>
    <main>
    <Outlet/>
    </main>
    </>
}
export default RootEventLayout;