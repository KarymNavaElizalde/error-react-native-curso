import { Button, Text, View } from "react-native"
import { StackScreenProps } from '@react-navigation/stack'
import { styles } from "../theme/appTheme"
import { TouchableOpacity } from "react-native-gesture-handler"


interface Props extends StackScreenProps<any, any>{}

export const Pagina1Screen = ({navigation}: Props) => {



  return (
    <View style={ styles.globalMargin }>
        <Text style={styles.title}>Pagina1Screen</Text>

        <Button
          title="Ir a la página 2"
          onPress={ ()=> navigation.navigate('Pagina2Screen') }
        />

        <Text>Navegar con argumentos</Text>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={()=> navigation.navigate("PersonaScreen", {
              id: 1,
              nombre: 'Pedro'
            })}
            style={{
              ...styles.botonGrande,
              backgroundColor: '#5856D6'
            }}
          >
            <Text style={styles.botonGrandeTexto} >Pedro</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={()=> navigation.navigate("PersonaScreen", {
              id: 2,
              nombre: 'Ana'
            })}
            style={{
              ...styles.botonGrande,
              backgroundColor: '#FF9427'
            }}
          >
            <Text style={styles.botonGrandeTexto} >Ana</Text>
          </TouchableOpacity>
        </View>
        
    </View>
  )
}
