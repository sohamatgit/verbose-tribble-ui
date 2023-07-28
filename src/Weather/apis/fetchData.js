
const locationUrl = "https://geocoding-api.open-meteo.com/v1/search?name=";
const whetherUrl ="https://api.open-meteo.com/v1/forecast/?current_weather=true";

export const fetchLocation = async (name) => {
      console.log("fetch Called")
      try {
        if (!name || name==='') {
          return [];
        }
        const res = await fetch(locationUrl+name);
        const data = await res.json();
        return data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
};

export const fetchWhether = async (lat, long) => {
  try {
    const response = await fetch(whetherUrl + `&latitude=${lat}&longitude=${long}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};