const url = 'http://localhost:8080/test'


const getData = async(url) => {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);
}

getData(url)