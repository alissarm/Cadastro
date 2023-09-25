import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

export default function Home(){

    //UseState
    const [nome, setNome] = useState('')
    const [genero, setGenero] = useState('');
    const [data, setData] = useState('');
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const [confirma, setConfirma] = useState('');
    const [CPF, setCPF] = useState('');
    const [idioma, setIdioma] = useState('');


    function handleUserAdd(){
        console.log(
            "Nome completo: " + nome
            +"\nGênero: " + genero
            +"\nData de nascimento: " + data
            +"\nNome de usuário: " + usuario
            +"\nSenha: " + senha
            +"\nE-mail: " + email
            +"\nConfimação do Email: " + email
            +"\nCPF: " + CPF
            +"\nidioma: " + idioma
        )

        Alert.alert(
            "Nome completo: " + nome
        +"\nE-mail: " + email
        )
    }
return(
<View style={styles.container}>
      <Text style={styles.title}>Preencha os Dados</Text>
      <TextInput
      style={styles.input}
      placeholder='Nome completo'

      value={ nome }
      onChangeText={ setNome }
      />

<Text style={styles.txt}>
                { nome }
            </Text>

      <TextInput
        style={styles.input}
        placeholder='Gênero'

        value={ genero }
        onChangeText={setGenero}
      />

<Text style={styles.txt}>
                { genero }
            </Text>

      <TextInput
          style={styles.input}
          placeholder="Data de nascimento"

          value={ data }
          onChangeText={setData}
      />

<Text style={styles.txt}>
                { data }
            </Text> 

      <TextInput
          style={styles.input}
          placeholder="Nome de usuário"

          value={ usuario }
          onChangeText={setUsuario}
      />

<Text style={styles.txt}>
                { usuario }
            </Text>

      <TextInput
          style={styles.input}
          placeholder="Senha"

          value={ senha }
          onChangeText={setSenha}
          secureTextEntry={true}
      />

<Text style={styles.txt}>
                { senha }
            </Text>

      <TextInput
      style={styles.input}
      placeholder='E-mail'

      value={ email }
      onChangeText={ setEmail }
      />

<Text style={styles.txt}>
                {email}
            </Text>

      <TextInput
          style={styles.input}
          placeholder="Confirme seu E-mail"

          value={ confirma }
          onChangeText={setConfirma}
      />

      <Text style={styles.txt}>
                { confirma }
            </Text>

      <TextInput
          style={styles.input}
          onChangeText={setCPF}
          placeholder="CPF"
      />

<Text style={styles.txt}>
                { CPF }
            </Text>

      <TextInput
          style={styles.input}
          onChangeText={setIdioma}
          placeholder="Idioma do currículo"
      />

<Text style={styles.txt}>
                { idioma }
            </Text>

      <TouchableOpacity style={styles.btn} onPress={ handleUserAdd }>
        <Text style={styles.btnTxt}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
    )
}