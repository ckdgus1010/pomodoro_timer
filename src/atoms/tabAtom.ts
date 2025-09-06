import { atom } from "jotai";
import { Tabs } from "../enums/tabs";

export const tabAtom = atom<Tabs>(Tabs.None);
