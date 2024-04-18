import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native"
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export default function Home(){
    return(
        <View
        style={styles.container}
        >
            <View
            style={styles.containerTopo} 
            >
                <Image
                source={require("../../assets/logo_nome.png")}
                style={styles.containerImage}
                >
                </Image>
                <TouchableOpacity>
                <Image
                source={require("../../assets/notificacao_logo.png")}
                style={styles.containerImageNotificacao}
                >
                </Image>
                </TouchableOpacity>
            </View>
            <View style={styles.containerColumns}>
                <View style={styles.containerColumn}>
                    <TouchableOpacity>
                    <Image
                    source={require("../../assets/consultaseExames.png")}
                    style={styles.containerBotoes}
                    >
                    </Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                        source={require("../../assets/emergencia.png")}
                        style={styles.containerBotoes}
                        >
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                        source={require("../../assets/config.png")}
                        style={styles.containerBotoes}
                        >
                        </Image>
                    </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity>
                    <Image
                    source={require("../../assets/medicamentos.png")}
                    style={styles.containerBotoes}
                    >
                    </Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                        source={require("../../assets/perfil.png")}
                        style={styles.containerBotoes}
                        >
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                        source={require("../../assets/sair.png")}
                        style={styles.containerBotoes}
                        >
                        </Image>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.containerFooter}>
                <Text></Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F6F6F6",
      width: "100%",
      height: "100%",
    },
    containerTopo:{
        width:"100%",
        height: 110,
        minHeight: 100,
        backgroundColor: "#71AAFF",
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        gap: 80,
    },
    containerImage:{
        //flex: 1,
        width: 190,
        height: 70,
        //marginLeft: 20,
        //marginTop: 20,
        resizeMode: "contain",
        //backgroundColor: "#cccccc"
    },
    containerImageNotificacao:{
       // flex: 1,
        width: 30,
        resizeMode: "contain",
        //ackgroundColor: "#cccccc",
    },
    containerFooter:{
        width: "100%",
        height: 30,
        backgroundColor: "#71AAFF",
        position: "absolute",
        bottom: 0,   
    },
    containerColumns:{
        flex:1,
        //backgroundColor:"#000000",
        alignSelf: "center",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 30,
    },
    containerColumn:{
        flexDirection: "column",
    },
    containerBotoes:{
        resizeMode: "contain",
        width: 120,
        height: 120,
        marginBottom: 20,
    }
})