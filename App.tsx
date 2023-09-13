import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,  } from 'react-native';

export default function App() {

  const [Nome, setNome] = useState('');
  const [Gênero, setGênero] = useState('');
  const [Data, setData] = useState('');
  const [Usuário, setUsuário] = useState('');
  const [Senha, setSenha] = useState('');
  const [Email, setEmail] = useState('');
  const [Confirma, setConfirma] = useState('');
  const [CPF, setCPF] = useState('');
  const [Idioma, setIdioma] = useState('');

  function inputs() {
    if (Nome === '' || Gênero === '' || Data === '' || Usuário === '' || Senha === '' || Email === '' || Confirma === ''|| CPF == ''|| Idioma ==='') {
      alert("Preecha todos os campos!")
      return;
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.}>Tela de cadastro</Text>
      <TextInput
          style={styles.inputs}
          onChangeText={setNome}
          placeholder="Nome"
      />
      <TextInput
          style={styles.inputs}
          onChangeText={setGênero}
          placeholder="Gênero"
      />
      <TextInput
          style={styles.inputs}
          onChangeText={setData}
          placeholder="Data de nascimento"
      />
      <TextInput
          style={styles.inputs}
          onChangeText={setUsuário}
          placeholder="Usuário"
      />
      <TextInput
          style={styles.inputs}
          placeholder="Senha"
          onChangeText={setSenha}
          secureTextEntry={true}
      />
      <TextInput
          style={styles.inputs}
          onChangeText={setEmail}
          placeholder="E-mail"
      />
      <TextInput
          style={styles.inputs}
          onChangeText={setConfirma}
          placeholder="Confirme seu E-mail"
      />
      <TextInput
          style={styles.inputs}
          onChangeText={setCPF}
          placeholder="CPF"
      />
      <TextInput
          style={styles.inputs}
          onChangeText={setIdioma}
          placeholder="Idioma do currículo"
      />

      <TouchableOpacity
          onPressIn={() => {
            inputs();
          }}
        >
          <Text style={styles.botaoTexto}>Cadastrar</Text>
        </TouchableOpacity>
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
  inputs:{
    width: '15%',
    height: '5%',
    marginTop: '1%',
    border: 'none',
  },
  botaoTexto:{
    color: '#ffff',
    textAlign: 'center',
    backgroundColor: '#7bc3db',
    marginTop: '10%',
    borderTopColor: 'null',
    width: 210,
    height: 30,
    borderRadius: 5,
  },
});
