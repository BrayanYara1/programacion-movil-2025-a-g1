import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

function Example() {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Shopping Cart App</IonCardTitle>
        <IonCardSubtitle>Your one-stop shop for all your needs</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Discover a wide variety of products and enjoy a seamless shopping experience with our app. Shop now and get the best deals!</IonCardContent>
    </IonCard>
  );
}

export default Example;
