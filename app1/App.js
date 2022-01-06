import React from 'react';
import { StyleSheet,Text, View } from 'react-native';
import C1 from './componentes/comp1';
import Caixas from './componentes/caixas';
import Estilos from './estilo/Estilos'
export default function App1() {
    
        return (

            <View style={Estilos.conteiner}>
                <Text style={Estilos.titulo}>Chamados</Text>
                <Caixas />
                <C1 orgao="penis"/>
            </View>


        );

  

};
