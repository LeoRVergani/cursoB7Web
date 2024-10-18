import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [areaShow, setAreaShow] = useState(false);
  const [campo, setCampo] = useState("");

  const mostrar = () => {
    alert(campo);
  }

  const handleClick = () => {
    setAreaShow(!areaShow);
  }

  return (
    <View style={styles.container}>

        {areaShow === true &&
            <View style={styles.area}>
              <Text style={styles.areaText}>Área Secreta</Text>
            </View>        
        }
        
        <Button title="Apareça / Desapareça" onPress={handleClick}/>

        <TextInput style={styles.input}
          value={campo}
          onChangeText={t => setCampo(t)}
          placeholder='Digite seu e-mail'
        />
        <Button title='O que foi digitado?' onPress={mostrar} />
        <Text>Você digitou: {campo} </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5
  },
  area: {
    width: '70%',
    margin: 20,
    padding: 20,
    backgroundColor: 'black',
    borderRadius: 10
  },
  areaText: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 24,
    marginBottom: 10
  },
  input: {
    width: 200,
    height: 40,
    backgroundColor: '#DDD',
    borderRadius: 5,
    margin: 20
  }
});
