import React, { Component } from 'react';

import { View, Text, StyleSheet, ScrollView } from 'react-native';

import 'config/ReactotronConfig';
import 'config/DevToolsConfig';

import Post from 'components/Post';

const textos = [
  { id: 0,
    titulo: 'Aprendendo React Native',
    autor: "Petterson Amaral Miler",
    descricao: "Descrição do post"},
];

export default class App extends Component{
  render() {
    return (
      <View style={styles.contView}>

        <View style={styles.cabecaView}>
          <Text style={styles.cabeca}>GoNative App</Text>
        </View>

        <ScrollView style={styles.container}>
          {textos.map( post => (
            <Post key={post.id} titulo={post.titulo} autor={post.autor} descricao={post.descricao}/>
          ))}
          {textos.map( post => (
            <Post key={post.id} titulo={post.titulo} autor={post.autor} descricao={post.descricao}/>
          ))}
          {textos.map( post => (
            <Post key={post.id} titulo={post.titulo} autor={post.autor} descricao={post.descricao}/>
          ))}
          {textos.map( post => (
            <Post key={post.id} titulo={post.titulo} autor={post.autor} descricao={post.descricao}/>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contView: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  cabecaView: {
    margin: 20,
  },
  cabeca: {
    color: '#333333',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    backgroundColor: '#ee7777',
  },
});
