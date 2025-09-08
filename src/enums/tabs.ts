export const Tabs = {
    None: "none",
    Home: "no task",
    Task: "task",
    Summary: "summary",
    ToDoTimer: "task timer",
    RestSetting: "rest timer setting",
    RestTimer: "rest timer"
} as const;

export type Tabs = (typeof Tabs)[keyof typeof Tabs];
