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

      <View style={styles.border}>
        <Text>Aula 1: Modulo 2</Text>

        {areaShow === true &&
            <View style={styles.area}>
              <Text style={styles.areaText}>Área Secreta</Text>
            </View>        
        }

        <Button title="Apareça / Desapareça" onPress={handleClick}/>

      </View>

      <View style={styles.border}>
        <Text>Aula 2: Modulo 2</Text>

        <TextInput style={styles.input}
          value={campo}
          onChangeText={t => setCampo(t)}
          placeholder='Digite seu e-mail'
        />
        <Button title='O que foi digitado?' onPress={mostrar} />
        <Text>Você digitou: {campo} </Text>

      </View>

      <View style={styles.border}>
      <Text>Aula 2: Modulo 2</Text>
        
      </View>





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
  },
  border: {
    borderWidth: 1,
    borderRadius: 5,
    width: '90%',
    alignItems: 'center',
    padding: 10
  }
});
