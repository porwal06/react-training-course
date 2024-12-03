import { json, useRouteLoaderData } from "react-router-dom";
function EventDetailPage() {
    const eventInfo = useRouteLoaderData('event-detail'); // this id defined in router file
    
    return <><h1>Event Detail page</h1>
    <p>Id: {eventInfo.id}</p>
                <p>Name: {eventInfo.name}</p>
                <p>Desc: {eventInfo.desc}</p>
                </>; 
}
export default EventDetailPage;

export async function singleEventLoader({request, params}){
    const eventId = params.eventId;
    const response = await fetch('https://react-course-578e5-default-rtdb.firebaseio.com/event/'+eventId+'.json');
    if(!response.ok) {
        throw json({
            message: 'Could not delete'
        },
        {
            status: 500
        });
    }
    return response.json();
}