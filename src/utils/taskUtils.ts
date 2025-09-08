export const colors = [
    "#ff7675",
    "#fdcb6e",
    "#00b894",
    "#0984e3",
    "#6c5ce7",
    "#e84393",
    "#b2bec3",
];

interface Task {
    emoji: string;
    toDo: string;
    color: string;
    timer: {
        task: number;
        rest: number;
    };
}

export function getDefaultTask(): Task {
    return {
        emoji: "🧭",
        toDo: "",
        color: colors[0],
        timer: {
            task: 25,
            rest: 5,
        },
    };
}

export function loadTask() {
    const task = localStorage.getItem("task");
    return task ? (JSON.parse(task) as Task) : undefined;
}

export function saveTask(task: Task) {
    localStorage.setItem("task", JSON.stringify(task));
}

export function deleteTask() {
    localStorage.removeItem("task");
}
