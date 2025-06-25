const URL = 'http://localhost:3001';

export const postWrite = async (endpoint, requestBody) => {
  try {
    const response = await fetch(`${URL}/${endpoint}`, {
      method: 'POST',
      body: JSON.stringify(requestBody),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    throw error;
  }
};
