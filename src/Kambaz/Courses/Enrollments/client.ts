import axios from "axios";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

// Enroll the user in a course
export const enrollUserInCourse = async (userId: string, courseId: string) => {
  const { data } = await axios.post(
    ENROLLMENTS_API,
    { user: userId, course: courseId },
    { withCredentials: true }
  );
  return data;
};

// Unenroll the user from a course
export const unenrollUserFromCourse = async (userId: string, courseId: string) => {
  const { data } = await axios.delete(ENROLLMENTS_API, {
    data: { user: userId, course: courseId },
    withCredentials: true,
  });
  return data;
};