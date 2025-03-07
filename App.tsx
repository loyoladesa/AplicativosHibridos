import { Text, Image, TextInput, View} from "react-native";




const App = () => {
  return (
    
      <View>
            <Text> Qual o seu nome?  </Text>
            <TextInput style={{
              color:"white",
              backgroundColor:"blue",
              marginLeft:8,
              marginRight:8}}>
                Cursor: 
            </TextInput>
            <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}} 
            style={{width:300,height:300}}
            ></Image>
      </View>
    

  );
}

export default App;




