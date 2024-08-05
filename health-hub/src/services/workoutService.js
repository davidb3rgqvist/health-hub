import api from './api';

const getWorkoutPrograms = async () => {
  const response = await api.get('workoutprograms/');
  return response.data;
};

const createWorkoutProgram = async (data) => {
  const response = await api.post('workoutprograms/', data);
  return response.data;
};

export default {
  getWorkoutPrograms,
  createWorkoutProgram,
};
