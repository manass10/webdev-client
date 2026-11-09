"use client";
import { create } from "zustand";
import modulesJson from "../database/modules.json";
export type Lesson = { _id: string; name: string; description: string; module: string };
export type CourseModule = {
  _id: string; name: string; description: string; course: string;
  lessons?: Lesson[]; editing?: boolean;
};
type ModulesStore = {
  modules: CourseModule[];
  addModule: (module: { name: string; course: string }) => void;
  deleteModule: (moduleId: string) => void;
  updateModule: (module: CourseModule) => void;
  editModule: (moduleId: string) => void;
};
export const useModulesStore = create<ModulesStore>((set) => ({
  modules: modulesJson as CourseModule[],
  addModule: (module) => set((s) => ({
    modules: [...s.modules, { _id: crypto.randomUUID(), name: module.name, description: "", course: module.course, lessons: [] }],
  })),
  deleteModule: (moduleId) => set((s) => ({ modules: s.modules.filter((m) => m._id !== moduleId) })),
  updateModule: (module) => set((s) => ({ modules: s.modules.map((m) => (m._id === module._id ? module : m)) })),
  editModule: (moduleId) => set((s) => ({ modules: s.modules.map((m) => m._id === moduleId ? { ...m, editing: true } : m) })),
}));
