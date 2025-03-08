import React, {useState} from "react";
import { Text, Image, TextInput, View, Button, ToastAndroid} from "react-native";

const Nome = () => {

  return(
      <Text></Text>
  );
}






const App = () => {

  const name = "Sidney Loyola";
  const [trocar,setTrocar] = useState("nova");

  const click = () => {

    if (trocar == "nova"){
      setTrocar("outra")
    }
    
    
    console.log(trocar)
  }  

  return (
    
      <View>
            <Text style={{fontSize:25}}> Primeiro App  </Text>                     

            <TextInput style={{
              color:"white",
              backgroundColor:"blue",
              marginLeft:8,
              marginRight:8}}>
                Cursor: 
            </TextInput>
            <Text style={{fontSize:20}}>{trocar}</Text>
            <View>
              <Text>Teste</Text>
            </View>
            <Button
              title="Trocar Nome"
              onPress={click}>

            </Button>
      </View>   

  );
}

export default App;
