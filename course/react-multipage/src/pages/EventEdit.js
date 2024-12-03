import { useRouteLoaderData } from "react-router-dom";
import EventForm from "./EventForm";

function EventEditPage() {
    const data = useRouteLoaderData('event-detail'); //This id defined in router.js
    console.log(data);
    return <>
    <h1> Event Edit page</h1>
    <EventForm event={data} method="patch"/>
    </>

}
export default EventEditPage;