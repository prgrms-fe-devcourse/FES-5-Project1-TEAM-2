const URL = 'http://localhost:3001';

export const getApiData = async endpoint => {
  try {
    const response = await fetch(`${URL}/${endpoint}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    throw error;
  }
};
