import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

import { styles } from "./styles";
import InputComponent from "./components/InputComponent";
import { useState } from "react";

const App = () => {

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('./assets/logo.png')}/>

        <Text >Sistema de login</Text>
        <Text >Bem vindo(a)! Digite seus dados abaixo.</Text>

        <View>
          <InputComponent
          onChange={email => setEmail(email)}
          title="Email" 
          placeHolder="Digite seu email"/>

          <InputComponent
          onChange={password => setPassword(password)}
          title="Senha"
          placeHolder="Digite sua senha"
          />

        </View>

      </View>
    </ScrollView>
  )

}

export default App;