export const Tabs = {
    None: "none",
    Home: "no task",
    Task: "task",
    Summary: "summary",
    ToDoTimer: "ToDo Timer",
} as const;

export type Tabs = (typeof Tabs)[keyof typeof Tabs];
