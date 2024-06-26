import {View,Text,StyleSheet,Image,TouchableOpacity,TextInput,Appearance,SafeAreaView} from "react-native";
import CheckBox from "expo-checkbox";
import {bgThemeColor,fgThemeColor,secBgThemeColor,textThemeColor} from "@/src/constants/ColorTheming";
import { router } from "expo-router";
import {useState} from "react";
import Footer from "@/src/components/Footer";
import {MMKV} from "react-native-mmkv";

const storage = new MMKV();

export default function AdMedicamentos() {
  const [medicamento, setMedicamento] = useState("");
  const [dose, setDose] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [periodo, setPeriodo] = useState("");
  const [vencimento, setVencimento] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleSave = () => {
    const novoMedicamento = {
      medicamento,
      dose,
      quantidade,
      periodo,
      vencimento,
      usoContinuo: isChecked,
    };

    const medicamentos = storage.getString("medicamentos");
    const medicamentosArray = medicamentos ? JSON.parse(medicamentos) : [];
    medicamentosArray.push(novoMedicamento);
    storage.set("medicamentos", JSON.stringify(medicamentosArray));
    router.push("../(TabMenu)/Medicamentos");

  };

  return (
    <SafeAreaView style={styles.container}>
       <View style={styles.header}>
       <Text style={styles.headerTitle}>MEDICAMENTOS</Text>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.headerImage}
            source={require("@/src/assets/Medicamento_icon.png")}
          ></Image>
        </View>
        </View>
      <View style={styles.conteinerForm}>
        <Text style = {styles.containerDadosTitulo}>Medicamento</Text>
        <TextInput style={[styles.containerInput,{maxWidth:332} ]} value={medicamento} onChangeText={setMedicamento}></TextInput>

        <View style={styles.containerInputsTst}>
          <View style={{ borderColor:"red", marginRight:20,}}>
            <Text style = {styles.containerDadosTitulo}>Dose</Text>
            <TextInput style={[styles.containerInput,{width:86}]} value={dose} onChangeText={setDose}></TextInput>
          </View>
          <View style={{ borderColor:"blue",}}>
            <Text style = {styles.containerDadosTitulo}>Quantidade por dose</Text>
            <TextInput style={[styles.containerInput,{width:227}]} value={quantidade} onChangeText={setQuantidade}></TextInput>
          </View>
        </View>
        <View style={{flexDirection:"row"}}>
            <View style={{ borderColor:"blue",marginRight:20}}>
              <Text style = {styles.containerDadosTitulo}>Período</Text>
              <TextInput style={[styles.containerInput,{width:86}]} value={periodo} onChangeText={setPeriodo}></TextInput>
            </View>
            <View style={{ borderColor:"blue",marginRight:20}}>
               <Text style = {styles.containerDadosTitulo}>Vencimento</Text>
                <TextInput style={[styles.containerInput,{width:105}]} value={vencimento} onChangeText={setVencimento}></TextInput>
            </View>
          <View style={{borderColor:"blue", alignItems:"center",}}>
            <Text style = {styles.containerDadosTitulo}>Uso contínuo</Text>
            <CheckBox style={styles.checkBox} value = {isChecked} onValueChange={setIsChecked} color={`${secBgThemeColor}`}></CheckBox>
          </View>
        </View>
       <View style={styles.buttons}>
        <View>
          <TouchableOpacity style={styles.containerBotao} onPress={handleSave}>
            <Image
              source={require("@/src/assets/botao_salvar.png")}
              style={styles.containerImagemBotaoSalvar}
            ></Image>
            <Text style={styles.textoForm}>Salvar</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity 
          onPress={
            ()=>router.push("../(TabMenu)/Medicamentos")
          }
          style={styles.containerBotao}>
            <Image
              source={require("@/src/assets/seta_voltar.png")}
              style={styles.containerImagemBotaoSalvar}
            ></Image>
            <Text style={styles.textoForm}>Voltar</Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
      <Footer></Footer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  containerInputsTst: {
    flexDirection:"row",
  },
  header: {
    width:"100%",
    justifyContent: "space-around",
    backgroundColor: `${fgThemeColor}`,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    height: 88,
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 24,
  },
  headerImage: {
    resizeMode: "contain",
    width: 56,
    height: 56,
  },
  imageWrapper:{
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 4,
  },
  buttons:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    marginTop:146,
  },
  checkBox: {
    backgroundColor: `${fgThemeColor}`,
    height:33,
    width:33,
  },
  containerDadosTitulo: {
    marginVertical:11,
    color: `${textThemeColor}`,
    fontSize: 15,
  },
  containerInput: {
    backgroundColor: `${secBgThemeColor}`,
    color: `${textThemeColor}`,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: "100%",
    height: 50,
  },
  containerImagemBotaoSalvar: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  containerBotao: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: `${secBgThemeColor}`,
    borderRadius: 5,
    width: 100,
    height: 40,
    flexDirection: "row",
  },

  textoComprimidoP: {
    fontSize: 15,
    marginLeft: "15%",
  },
  containerBox1: {
    backgroundColor: `${fgThemeColor}`,
    width: "100%",
    height: 40,
  },

  conteinerForm: {
    paddingHorizontal: 40,
    position: "absolute",
    width: "100%",
    alignSelf: "center",
    top:151,
    maxWidth: 450,
    minWidth: 350,

  },
  textoForm: {
    fontSize: 15,
    
  },
  container: {
    backgroundColor: `${bgThemeColor}`,
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems:"center",
  },
});
