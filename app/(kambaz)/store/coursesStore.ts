"use client";
import { create } from "zustand";
import coursesJson from "../database/courses.json";
export type Course = (typeof coursesJson)[number];
const emptyCourse: Course = {
  _id: "0", name: "New Course", number: "New Number",
  startDate: "2023-09-10", endDate: "2023-12-15",
  department: "D123", credits: 4,
  description: "New Description", image: "/images/reactjs.svg",
};
type CoursesStore = {
  courses: Course[];
  addCourse: (course: Course) => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: (course: Course) => void;
};
export const useCoursesStore = create<CoursesStore>((set) => ({
  courses: coursesJson,
  addCourse: (course) => set((s) => ({ courses: [...s.courses, { ...emptyCourse, ...course, _id: crypto.randomUUID() }] })),
  deleteCourse: (courseId) => set((s) => ({ courses: s.courses.filter((c) => c._id !== courseId) })),
  updateCourse: (course) => set((s) => ({ courses: s.courses.map((c) => (c._id === course._id ? course : c)) })),
}));
export { emptyCourse };
