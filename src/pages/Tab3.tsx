
// Bagian Alfira

import React from 'react';
// Dibawah ini tugas mereka untuk memanggil fungsi / paket / skrip / file
import { IonCard, IonList, IonThumbnail, IonCardHeader, IonCardContent, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel } from '@ionic/react';
import './Main.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonTitle><p className="blabla">Tentang</p></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader color="tertiary">
            <IonCardTitle>Tentang CuKu</IonCardTitle>
            </IonCardHeader>
            <IonCardContent color="tertiary"><br/>Aplikasi CuKu (CuacaKu) adalah aplikasi mobile untuk memudahkan pengguna dalam mengetahui cuaca dibantu dengan API dari openweathermap.org</IonCardContent>
            
            <IonCardHeader color="tertiary">
            <IonCardTitle>Pengembang CuKu</IonCardTitle>
            </IonCardHeader>
            <IonList>
              <IonItem>
                <IonThumbnail slot="start">
                  <img src="https://i.ytimg.com/vi/0B_U2jHLc-U/maxresdefault.jpg" />
                  </IonThumbnail>
                  <IonLabel>
                    <h3>Widhianto Fajar</h3>
                    <p>3130018032</p>
                  </IonLabel>
              </IonItem>

              <IonItem>
                <IonThumbnail slot="start">
                  <img src="https://yt3.ggpht.com/ytc/AAUvwnj2ddkc1b4dP35rZrQOIB_4NfHRBHmV8UaoSMU9Cg=s900-c-k-c0x00ffffff-no-rj" />
                  </IonThumbnail>
                  <IonLabel>
                    <h3>Alfira Niknur Azura</h3>
                    <p>3130018009</p>
                  </IonLabel>
              </IonItem>

              <IonItem>
                <IonThumbnail slot="start">
                  <img src="https://yt3.ggpht.com/a/AATXAJxr4yYQQVJFBdih6ah7zPdEhH6ER9zDFO9E9i26=s900-c-k-c0xffffffff-no-rj-mo" />
                  </IonThumbnail>
                  <IonLabel>
                    <h3>Devaldi Akbars</h3>
                    <p>3130018013</p>
                  </IonLabel>
              </IonItem>

              <IonItem>
                <IonThumbnail slot="start">
                  <img src="https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png" />
                  </IonThumbnail>
                  <IonLabel>
                    <h3>Akhmad Aden Haris Syaifulloh</h3>
                    <p>3130018028</p>
                  </IonLabel>
              </IonItem>

              <IonItem>
                <IonThumbnail slot="start">
                  <img src="https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png" />
                  </IonThumbnail>
                  <IonLabel>
                    <h3>Pramana Amanullah</h3>
                    <p>3130018007</p>
                  </IonLabel>
              </IonItem>

              <IonItem>
                <IonThumbnail slot="start">
                  <img src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png" />
                  </IonThumbnail>
                  <IonLabel>
                    <h3>Manilaturrohmah</h3>
                    <p>4130017006</p>
                  </IonLabel>
              </IonItem>
            </IonList>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
