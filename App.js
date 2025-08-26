import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import { StyleSheet, Text, View, Image, TextInput, KeyboardAvoidingView, Button,  Pressable, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {
  const [valor, setValor] = useState(0)
  const [ct_dollar, setCt_dollar] = useState(0)
  let resultado = '';
  const metros_centi = () => {
     resultado = parseFloat(valor) * 100;
  }

  const km_metros = () => {
     resultado = parseFloat(valor) * 100;
  }

  const c_f = () => {
    resultado = (parseFloat(valor) * 9/5) + 32;
  }

  const dollar_real = () => {
    resultado = parseFloat(valor)/ 5.41
  }

  return (
    <KeyboardAvoidingView behavior='padding' style={estilo.container}>
       <LinearGradient
      colors={['#49225B', '#6E3482', '#A56ABD', '#E7DBEF', '#F5EBFA']}
      style={estilo.container}
    >
      <Text style={estilo.titulo_png}>Conversor</Text>
      <Image 
        source={require('./assets/logo1.png')} 
        style={{ width: 300, height: 300 }}
      />
      <Text style={estilo.titulo}>Informe um valor:</Text>
      <TextInput 
      placeholder='Digite aqui' 
      autoCapitalize='words' 
      style={estilo.input}
      onChangeText={valor => setValor(valor)} 
      />

    
       <TouchableOpacity style={estilo.botao} onPress={metros_centi}>
        <Text style={estilo.textoBotao}>Metros - Centímetros</Text>
        </TouchableOpacity>

       <TouchableOpacity style={estilo.botao} onPress={km_metros}>
       <Text style={estilo.textoBotao}>Km - Metros</Text>
        </TouchableOpacity>
       <TouchableOpacity style={estilo.botao} onPress={c_f}>
       <Text style={estilo.textoBotao}>°C - °F</Text>
       </TouchableOpacity>
       <TouchableOpacity style={estilo.botao} onPress={dollar_real}>
       <Text style={estilo.textoBotao}>Dolar - Real</Text>
        </TouchableOpacity>

       <Text style={estilo.titulo}>O resultado é: {resultado}</Text>
       </LinearGradient>
    </KeyboardAvoidingView>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  titulo: {
    fontSize: 22, 
    color: '#49225B', // tom roxo escuro para destaque
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 15,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 18,
    color: '#6E3482',
    fontWeight: '400',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    width: '80%',
    marginTop: 10,
    marginBottom: 20,
    borderColor: '#A56ABD',
    borderWidth: 2,
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    textAlign: 'center',
    color: '#49225B',
    elevation: 3, // sombra leve Android
    shadowColor: '#000', // sombra leve iOS
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  botao: {
    backgroundColor: '#6E3482',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginTop: 12,
    width: '80%',
    alignItems: 'center',
    elevation: 3, // sombra no Android
    shadowColor: '#000', // sombra no iOS
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
  },
  textoBotao: {
    color: '#F5EBFA',
    fontSize: 16,
    fontWeight: '600',
  },
  titulo_png: {
    color: '#ffffff',
    fontSize: 16,
  }
});

