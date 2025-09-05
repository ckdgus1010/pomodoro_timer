export const Tabs = {
    Home: "no task",
    Task: "task",
} as const;

export type Tabs = (typeof Tabs)[keyof typeof Tabs];
