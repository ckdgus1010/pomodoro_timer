interface Task {
    emoji: string;
    toDo: string;
    color: string;
    timer: number;
}

export function loadTask() {
    const task = localStorage.getItem("task");
    return task ? (JSON.parse(task) as Task) : undefined;
}
