import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [areaShow, setAreaShow] = useState(false);

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
  }
});
