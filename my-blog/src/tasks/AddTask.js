import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
import TaskForm from "./TaskForm";

const AddTask = () => {
    const [showAddTask, setShowAddTask] = useState(false);
    return (
        <div className="container">
            <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
            <TaskForm />
            <Footer />
        </div>
    )
}

export default AddTask;