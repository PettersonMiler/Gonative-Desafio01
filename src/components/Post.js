import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';

const Post = ({titulo,autor,descricao}) => (
  <View style={styles.contPost}>
    <Text style={styles.styTitulo}>{titulo}</Text>
    <Text style={styles.styAutor}>{autor}</Text>
    <View style={styles.styBorda}>
      <View style={styles.styBordaDesc}>
        <Text style={styles.stytDescricao}>{descricao}</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  contPost: {
    backgroundColor: '#FFFFFF',
    margin: 20,
    padding: 20,
  },
  styTitulo: {
    color: '#333333',
    fontWeight: 'bold',
    fontSize: 20,
  },
  styAutor: {
    color: '#999999',
  },
  styDescricao: {
    color: '#666666',
    textAlignVertical: 'bottom',
  },
  styBorda: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },
  styBordaDesc: {
    marginTop: 20,
  },
});

export default Post;
