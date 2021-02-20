
// Ini script untuk melayani permintaan data dari API ke Apps kita bro
// Pramana 
// 28a8026a66d7fc11c75573d2ffa59d70

class WeatherService {
    async mintaData() {
        // API untuk ambil data cuaca pada kota spesifik
        const api = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Surabaya,Id&appid=28a8026a66d7fc11c75573d2ffa59d70&units=metric');
        
        // Jadi var parse memuat komunikasi asynchronous untuk membuat paket promise ke bentuk JSON
        // Var itu bentuk promise mengembalikan nilai JSON yang mudah dibaca
        // JSON juga mudah dalam mengambil beberapa data saja.

        const parse = await api.json();

        return parse;
    }

    async mintaPrediksi() {
        //API untuk ambil data prediksi cuaca pada kota spesifik tiap 1 hari
        const api = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=Surabaya,Id&appid=28a8026a66d7fc11c75573d2ffa59d70&units=metric');
        const parse = await api.json();

        return parse;
    }
}

export default WeatherService;