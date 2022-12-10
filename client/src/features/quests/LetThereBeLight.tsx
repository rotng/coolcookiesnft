import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonModal } from "@ionic/react";
import { Dispatch, SetStateAction, useContext } from "react";
import { AppContext } from "../../app/App";
import { QUEST_WIDTH } from "../../constants";


export default function LetThereBeLight() {
  const { user } = useContext(AppContext);

  return (
    <div style={{
      width: QUEST_WIDTH,
    }}>
      <IonCardHeader style={{
        fontSize: 40,
        textAlign: 'center',
      }}>
        And then there was light/dark mode...
      </IonCardHeader>
      <IonCardContent style={{
        textAlign: 'center',
        flexDirection: 'column',
      }}>
        In the beginning, there was only one color palette.
        Then, there were two.
        <br/><br/>
        Toggle <b>day/night mode</b>.
        <br/>
        <br/>
        Hint: Use the button in the bottom left.
      </IonCardContent>
    </div>
  )
}