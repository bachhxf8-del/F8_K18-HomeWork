import { ClassRoom } from "./ClassRoom";
import { Student } from "./Student";

const F8: ClassRoom = new ClassRoom("Lớp F8");

const bach: Student = new Student("Bach");
const huy: Student = new Student("Huy");

F8.addStudent(bach);
F8.addStudent(huy);

F8.postAnnouncement("Mai kiểm tra OOP");