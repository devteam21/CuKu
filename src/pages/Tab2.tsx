// Bagian mbak. Manila
// Dibawah ini tugas mereka untuk memanggil fungsi / paket / skrip / file
import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonList, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import './Main.css';

// Dibawah ini nomor 7 tugas dia memanggil file WeatherService
// Karena fungsi WeatherService untuk melayani permintaan API dari aplikasi
import WeatherService from '../services/WeatherService';

const Tab2: React.FC = () => {

  // Coba lihat pada 3 kode dibawah pada baris 12-14
  // Ini juga promise untuk memudahkan mengambil data JSON serta membaca

  const [hiddenButton, setHiddenButton] = useState(false);
  const [prediksiCuaca, setprediksiCuaca]: [any, any] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const service  = new WeatherService();
  
  // Nomor 21, Ialah Deklrasasi sebuah fungsi tombol
  const onClickButton = () =>{
    // Jadi ketika tombol ditekan akan menjalankan fungsi ini dan status bolean dari Loading menjadi True
    setIsLoading(true);

    // Nah saat loading, skirp dibawah ini juga jalan
    // Berfungsi untuk mengambil data permintaan JSOn oleh aplikasi
    if (localStorage.getItem('prediksiCuaca') != null) {
      setprediksiCuaca(JSON.parse(localStorage.getItem('forecasts') || ''));
      setHiddenButton(true);

    // Jika terdeteksi tidak ada JSON maka akan meminta
    // Dan tombol akan kembali hilang

    } else {
      service.mintaPrediksi().then(res => {
        localStorage.setItem('prediksiCuaca', JSON.stringify(res.list));
        setprediksiCuaca(res.list);
        setHiddenButton(true);
      });
    }

  }
  
  // Nah ini ada proses menyimpan pada array ada kotak kek gini []
  // Jadi file JSOn tsb disimpen diArray
  // Dan proses looping return (mengembalikan) file berupa html dibawah
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonTitle><p className="blabla">Prediksi Cuaca</p></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        
        {!hiddenButton &&
          <div className="container">

          {/* Coba lihat baris nomor 21, akan ada fungsi onClickButton bukan? */}
          <IonButton color="secondary" fill="solid" size="default" onClick={onClickButton}>PREDIKSI CUACA</IonButton>
          </div>
        }

        {/* Meski fungsi looping pada backend beres, tetep kudu dikasih tampilan List biar bisa scroll gitu */}
        <IonList className="container-ku">
          {

            // Lalu sampai sini terjadilah fungsi looping map dimana mengembalikan isi Array sampai habis
            prediksiCuaca.map((prediksiCuaca:any) => (
            
            <IonCard>
              <IonCardHeader color="secondary">
                <IonCardSubtitle>CUACA {prediksiCuaca.dt_txt}</IonCardSubtitle>
                  <IonCardTitle><h1>{prediksiCuaca.main.temp}°C</h1></IonCardTitle>
                    <img alt={prediksiCuaca.main.temp} width='80' height='80' src={`http://openweathermap.org/img/wn/${prediksiCuaca.weather[0].icon}@2x.png`}/>
                    <h2><b>{prediksiCuaca.weather[0].main}</b></h2>
              </IonCardHeader>
              <IonCardContent><br/>KETERANGAN CUACA<br/>{prediksiCuaca.weather[0].description}</IonCardContent>
            </IonCard>
            ))
          }

        </IonList>

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
