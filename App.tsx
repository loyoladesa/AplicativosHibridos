import React, {useState} from "react";
import { Text, Image, TextInput, View, Button, ToastAndroid} from "react-native";





function getMyName ():string {
    const primeiro = "Sidney ";
    const segundo  = "Loyola"    

    console.log("Passei Aqui!");

    return primeiro + segundo;
    
}

const Logo = () => {
  return (
    <View>
      <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}} 
            style={{width:200,height:200}}>
      </Image>      
    </View>
  );
}

const Nome = () => {
  

  const nomeCompleto = "Nome";

  return (
    <View>
      <Text style={{fontSize:20,marginBottom:15, marginTop:15}}>{nomeCompleto}</Text>
    </View>
  );
}


const App = () => {

  const name = "Sidney Loyola";
  const [trocar,setTrocar] = useState("nova");

  const click = () => {

    if (trocar == "nova"){
      setTrocar("outra")
    }else{
      setTrocar("nova")
    }
    
    
    console.log(trocar)
  }
  

  return (
    
      <View>
            <Text style={{fontSize:25}}> Primeiro App  </Text>
            <Logo></Logo>          

            <TextInput style={{
              color:"white",
              backgroundColor:"blue",
              marginLeft:8,
              marginRight:8}}>
                Cursor: 
            </TextInput>
            <Text style={{fontSize:20}}>{trocar}</Text>
            
            <Button
              title="Trocar Nome"
              onPress={click}>

            </Button>
      </View>   

  );
}

export default App;




