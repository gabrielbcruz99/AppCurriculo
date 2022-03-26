import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Linking, ScrollView} from 'react-native';
import foto from './assets/foto_perfil.jpg';
import Icon from 'react-native-vector-icons/Feather';
import Card from './components/Card/Index';
 


 

export default function App() {

  function handleRedeSocial(rede_social){
    const github = 'https://github.com/gabrielbcruz99';
    const linkedin = 'https://www.linkedin.com/in/gabriel-b-cruz/';
    const instagram = 'https://www.instagram.com/stgabs99/';
    switch(rede_social){
      case 'github':
        Linking.openURL(github)

      break
      case 'linkedin':
        Linking.openURL(linkedin)

      break
      case 'instagram':
        Linking.openURL(instagram)

      break
    }
  }

  return (
    <>
    <ScrollView style={styles.scrowview}>
      <View style={styles.page}> 
        <View style={styles.container_cabecalho}>
          <Image source={foto} style={styles.foto} />
          <Text style={styles.nome} >Gabriel Cruz</Text>
          <Text style={styles.funcao} >Desenvolvedor Software</Text>
          <View style={styles.redes_sociais}>
            <TouchableOpacity onPress={() => handleRedeSocial('github')}>
              <Icon name='github'size={25} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}> 
              <Icon name='linkedin' size={25} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('instagram')}>
            <Icon name='instagram' size={25} />
            </TouchableOpacity>
          </View>
        </View>

      <Card titulo="Formação Acadêmica">
        <Text style={styles.card_content_text}>Universidade Estácio de Sá - Análise e Desenvolvimento de Sistemas(Cursando)</Text> 
        <Text style={styles.card_content_text}>ISERJ/FAETEC - Técnico de Informática(Concluído)</Text>
      </Card>  

      <Card titulo="Experiência Profissional">
      <Text style={styles.card_content_text}>Megawork Consultoria | Estagiário de Desenvolvimento ABAP</Text> 
      <Text style={styles.card_content_text}>DevMedia | Desenvolvedor Júnior</Text>
      <Text style={styles.card_content_text}>Nave do Conhecimento - Irajá | Suporte de TI</Text>
      <Text style={styles.card_content_text}>UERJ Latic - SR1 | Estagiário de Desenvolvimento</Text>

      </Card>  

      </View>
    </ScrollView>    
    </>
  );
}

const styles = StyleSheet.create({

  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
  }, 
  container_cabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,

  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 125,
  }, 
  nome: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
  },
  funcao: {
    color: '#939393',
    marginBottom: 10,
  },
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30%',
    marginTop: 10,
  },
  redes_sociais_borda: {
    borderRadius: 125,
  },
  card_content_text: {
    color: '#939393',
    marginBottom: 10,
  },
  scrowview: {

  },  

});

 
