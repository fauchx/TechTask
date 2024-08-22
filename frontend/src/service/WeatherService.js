
export const submitWeather = async (data) => {
    try {
        const response = await fetch(`http://127.0.0.1:8000/weather/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                city: String(data.city),
                degree: parseInt(data.degree, 10), 
                condition: String(data.condition)
            })
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();
        return result;

    } catch (error) {
        console.error("Failed to submit weather data:", error);
        throw error; 
    }
};

export const HistoryWeather = async () =>{
    try {
        const response = await fetch(`http://127.0.0.1:8000/weather/history/`,{
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }}
        )
    
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();
        return result;

    } catch (error) {
        console.error("Failed to print weather data:", error);
        throw error; 
    }
}