import { Form, useNavigation, useNavigate } from "react-router-dom";
function EventForm(props){
    const navigate = useNavigate();
    const cancelHandler = () => {
        navigate('..');
    }
    const navigation = useNavigation();
    const isSubmitting = (navigation.state === 'submitting');

    return <Form method={props.method}> 
    <input type="text" placeholder="Event Name" name="name" defaultValue={props.event ? props.event.name : ''}/>
    <input type="id" placeholder="Event id" name="id" defaultValue={props?.event ? props.event.id : ''}/>
    <textarea name="desc" defaultValue={props?.event ? props.event.desc : ''}/>
    <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Submitting..." : "Save"}</button>
    <button type="button" onClick={cancelHandler}>Cancel</button>
</Form>;
}

export default EventForm; 