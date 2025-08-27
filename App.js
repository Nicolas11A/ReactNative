import React,{Component} from 'react';
import { StyleSheet, View, Text,Image,ScrollView,TextInput,Button,Alert} from 'react-native';

class App extends Component{
  constructor(props){
    super(props);
    this.state=[
      nombre='',
      apellido='',
      email='',
      telefono='',
      descripcion='',
      mostrarPerfil= false,
      mensajeAprobacion= "Perfil creado con exito"
    ];
  };
//metodo  
manejarCambioNombre=(texto)=>{
  this.setState({
    nombre: texto,
    mostrarPerfil: false,
    mensajeAprobacion: "informacion actualizada"
  });
};
manejarCambioApellido=(texto)=>{
  this.setState({
    apellido: texto,
    mostrarPerfil: false,
    mensajeAprobacion: "informacion actualizada"
  });
};
manejarCambioEmail=(texto)=>{
  this.setState({
    email: texto,
    mostrarPerfil: false,
    mensajeAprobacion: "informacion actualizada"
  });
};
manejarCambioTelefono=(texto)=>{
  this.setState({
    telefono: texto,
    mostrarPerfil: false,
    mensajeAprobacion: "informacion actualizada"  
  });
};
manejarCambioDescripcion=(texto)=>{
  this.setState({
    descripcion: texto,
    mostrarPerfil: false,
    mensajeAprobacion: "informacion actualizada"    
  });
};
limpiarFormulario=()=>{
   this.setState({
      nombre:'',
      apellido:'',
      email:'',
      telefono:'',
      descripcion:'',
      mostrarPerfil: false,
      mensajeAprobacion: "Limpiar campos"
   });

   Alert.alert(
    'Formulario limpiando',//titulo de la alert
    'Todos los campos han sido borrados', 
    [{texto:'OK'}]
   );

};
render(){
  const{nombre,
    apellido,
    email,
    telefono,
    descripcion,
    mostrarPerfil,
    mensajeAprobacion}=this.state;

return(
  <>
    <ScrollView style={styles.container}> 
      <View style={styles.header}>
        <Image
          source={{uri:'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'}}
          style={styles.imagen}
          resizeMode='cover'
        />
        <Text>Mi perfil de usuario</Text>
        <Text>App demo</Text>
      </View>
      <View>
        <Text>Nombre</Text>
        <TextInput
          value={nombre}
          onChangeText={this.manejarCambioNombre}
          placeholder='Ingresa tu Nombre'
          placeholderTextColor="#999"
        />
        <Text>Apellido</Text>
        <TextInput
          value={apellido}
          onChangeText={this.manejarCambioApellido}
          placeholder='Ingresa tu apellido'
          placeholderTextColor="#999"
        />
        <Text>email</Text>
        <TextInput
          value={email}
          onChangeText={this.manejarCambioEmail}
          placeholder='Ingresa tu email'
          placeholderTextColor="#999"
        />
        <Text>Telefono</Text>
        <TextInput
          value={telefono}
          onChangeText={this.manejarCambioTelefono}
          placeholder='Ingresa tu telefono'
          placeholderTextColor="#999"
        />
        <Text>Descripcion</Text>
        <TextInput
          value={descripcion}
          onChangeText={this.manejarCambioDescripcion}
          placeholder='Ingresa tu descripcion'
          placeholderTextColor="#999"
        />
      </View>
      <View>
        <Button
          title='guardar perfil'
          //onPress={}// hace falta crear el metodo de guardar
        />
        <Button
          title='Limpiar campos'
          onPress={this.limpiarFormulario}  
        />
      </View>

    </ScrollView>
  </>
);
};


};

const styles = StyleSheet.create({  
  //se crean los estilos
  container:{
    flex:1,
    backgroundColor:'#ffffffff'
  },
  header:{
    backgroundColor:'#53bfbaff',
    alignItems:'center',
    marginBottom:20,
    padding:30
  },
  imagen:{
    width:80,
    height:80,
    borderRadius:30,
    marginBottom:15,
    borderWidth:4,
    borderColor:'#white'
  }

    

  }



);    

export default App;
