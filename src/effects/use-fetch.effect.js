import { useState, useEffect} from 'react';


const useFetch = (url) => {
const [data, setData] = useState(null);

useEffect(() => {
const fetchData = async () => {
const res = await fetch(url);
const arrayData = await res.json();
setData(arrayData[0]);
}
fetchData();

},[url])


return data;
}


export default useFetch;