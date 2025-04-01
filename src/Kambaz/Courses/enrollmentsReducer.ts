import { createSlice } from "@reduxjs/toolkit";
import enrollments from "../Database/enrollments.json";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  enrollments: enrollments,
};

const enrollmentSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enrollInCourse: (state, { payload }) => {
      const alreadyEnrolled = state.enrollments.some(
        (enrollment) => 
          enrollment.user === payload.user && 
          enrollment.course === payload.course
      );
      
      if (!alreadyEnrolled) {
        const newEnrollment = {
          _id: uuidv4(),
          user: payload.user,
          course: payload.course
        };
        state.enrollments.push(newEnrollment);
      }
    },
    unenrollFromCourse: (state, { payload }) => {
      state.enrollments = state.enrollments.filter(
        (enrollment) => 
          !(enrollment.user === payload.user && 
            enrollment.course === payload.course)
      );
    },
  },
});

export const { enrollInCourse, unenrollFromCourse } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;