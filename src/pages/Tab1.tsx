// Bagian Aden
// Dibawah ini tugas mereka untuk memanggil fungsi / paket / skrip / file
import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar , IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent} from '@ionic/react';
import './Main.css';
import WeatherService from '../services/WeatherService';

const Tab1: React.FC = () => {

  // Well fungsi skrip dibawah untuk promise agar data JSON dapat diambil sesuai kebutuhan
  // Misal butuh data Suhu, lokasi sajoo..
  const data = new WeatherService();
  const [cuaca, setCuaca]: [any, any] = useState({
    lokasi: '',
    suhu: '',
    ket: '',
    icon: ''
  })

  // Pada baris ke 21 adalah fungsi React Hook
  // Kode dibawah akan selalu jalan saat aplikasi terbuka pada prinsip LifeCyle Apps
  // Dimana karena fungsi dibawah ini kita dapat memanggil sebuah data JSON lebih praktis
  useEffect(() => {
    data.mintaData().then(dataCuaca => {
      setCuaca({
        lokasi: dataCuaca.name,
        suhu: dataCuaca.main.temp,
        ket: `${dataCuaca.weather[0].main} (${dataCuaca.weather[0].description})`,
        icon: dataCuaca.weather[0].icon
      });
      console.log(dataCuaca)
    })
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle><p className="blabla">Cuaca Ku</p></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent> 
        <div className="container">
          <IonCard>
            <IonCardHeader color="primary">
              <IonCardSubtitle>CUACA SEKARANG</IonCardSubtitle>
                <IonCardTitle><h1>{cuaca.suhu}°C</h1></IonCardTitle>
                <img alt={cuaca.suhu} width='80' height='80' src={`http://openweathermap.org/img/wn/${cuaca.icon}@2x.png`}/>
                <h2><b>{cuaca.lokasi}</b></h2>
            </IonCardHeader>
            <IonCardContent><br/>KETERANGAN CUACA<br/>{cuaca.ket}</IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

// Lihat pada baris ke 48
// Contoh penggunaan useEffect saat memanggil suhu sangat mudah cuma perlu {cuaca.suhu}

export default Tab1;
