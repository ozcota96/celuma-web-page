const apiUrl = process.env.REACT_APP_API_URL;

export const fetchData = async () => {
    const response = await fetch(`${apiUrl}/data`);
return response.json();
};