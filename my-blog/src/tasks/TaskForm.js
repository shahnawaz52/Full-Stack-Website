import { useState } from "react";

const TaskForm = () => {
    const [text, setText] = useState("");
    const [day, setDay] = useState("");
    const [remainder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text) {
            alert('Please add a task!');
            return;
        }

    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add Task..." value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type="text" placeholder="Add Day & time" value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Set Remainder</label>
                <input type="checkbox" checked={remainder} value={remainder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <input type="submit" value="Save Task" className="btn btn-block" />
        </form>
    )
}

export default TaskForm;