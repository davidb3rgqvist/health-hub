import api from './api';

const getWorkoutPrograms = async () => {
  const response = await api.get('workoutprograms/');
  return response.data;
};

const createWorkoutProgram = async (data) => {
  const response = await api.post('workoutprograms/', data);
  return response.data;
};

const workoutService = {
  getWorkoutPrograms,
  createWorkoutProgram,
};

export default workoutService;
