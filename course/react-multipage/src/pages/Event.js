import { Link, json, redirect, useLoaderData, useNavigate, useNavigation, useSubmit } from "react-router-dom";
const trasformData = (data) => {
    const loadedTasks = [];
    for (const taskKey in data) {
      loadedTasks.push({ id: taskKey, name: data[taskKey].name, eventid: data[taskKey].id, desc: data[taskKey].desc });
    }
    return loadedTasks;
  }

function EventPage() {
    const submit = useSubmit();
    const DeleteEventHandler = (event, eventId) => {  
        console.log(eventId);      
        const prompt = window.confirm("Are you sure want to delete");
        if(prompt) {
            submit({eventId}, {method:'delete', eventId:eventId});
        }

    }

    const eventData = useLoaderData();  
    const navigation = useNavigation();
    const eventTransData = trasformData(eventData);
    return <>
        <h1>Event listing page</h1>
        {navigation.state == 'loading' ? <p>Loading...</p> : ''}
        <ul>
        {eventTransData.map(eventInfo => {
           return <li key={eventInfo.id}>
                <p>Id: {eventInfo.eventid}</p>
                <p>Name: {eventInfo.name}</p>
                <p>Desc: {eventInfo.desc}</p>
                <div>
                    <Link to={`/events/${eventInfo.id}/edit`}>Edit</Link>
                    <Link to={`/events/${eventInfo.id}`}>Detail</Link>
                    <button onClick={event => DeleteEventHandler(event, eventInfo.id)}>Delete</button>
                </div>
            </li>
        })}
        </ul>
        <Link to='new'>Add Event</Link>
    </>;    
}
export default EventPage;

export async function eventLoader(){
    const response = await fetch('https://react-course-578e5-default-rtdb.firebaseio.com/event.json');
    return await response.json();
}

export async function deleteAction({request, params}) {
    const data = await request.formData();
    const eventId  = data.get('eventId');
    const response = await fetch('https://react-course-578e5-default-rtdb.firebaseio.com/event/'+eventId+'.json', {
        method: request.method
    });
    if(!response.ok) {
        throw json({
            message: 'Could not delete'
        },
        {
            status: 500
        });
    }
    return redirect('/events');
}