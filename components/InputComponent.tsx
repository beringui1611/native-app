import {View, Text, TextInput } from "react-native";

interface Props {
    title: string;
    placeHolder:string
    onChange: (param:string) => void;
}

const InputComponent = ({title, placeHolder, onChange}: Props) => {

    return (
      <View>
        <Text>
          {
            title
          }
        </Text>

        <TextInput
        onChangeText={text => onChange(text)}
        placeholder={placeHolder}
        secureTextEntry={title != "senha" ? false : true}
        />
      
      </View>
    )
}

export default InputComponent;