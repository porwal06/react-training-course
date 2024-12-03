import { redirect } from "react-router-dom";
import EventForm from "./EventForm";


function EventNewPage() {
    return <EventForm method="post"/>

}
export const addEventAction = async({request, params}) => {
    console.log(request);
    const data = await request.formData();
    const eventData = {
        name: data.get('name'),
        id: data.get('id'),
        desc: data.get('desc'),
    }
    const method = request.method;
    let url = 'https://react-course-578e5-default-rtdb.firebaseio.com/event.json';
    if(method == "PATCH"){
        url = 'https://react-course-578e5-default-rtdb.firebaseio.com/event/'+params.eventId+'.json'; // 'eventId' is sending from router param
    }
    const response = await fetch(url, {
            method,
            body: JSON.stringify(eventData),
        });
    if(!response.ok) {
        throw new Error("Couldn't add event");
    }
    
    return redirect('/events');

}
export default EventNewPage;