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
    mensajeAprobacion: "informacion actualisada"
  });
};
manejarCambioApellido=(texto)=>{
  this.setState({
    apellido: texto,
    mostrarPerfil: false,
    mensajeAprobacion: "informacion actualisada"
  });
};
manejarCambioEmail=(texto)=>{
  this.setState({
    email: texto,
    mostrarPerfil: false,
    mensajeAprobacion: "informacion actualisada"
  });
};
manejarCambioTelefono=(texto)=>{
  this.setState({
    telefono: texto,
    mostrarPerfil: false,
    mensajeAprobacion: "informacion actualisada"  
  });
};
manejarCambioDescripcion=(texto)=>{
  this.setState({
    descripcion: texto,
    mostrarPerfil: false,
    mensajeAprobacion: "informacion actualisada"    
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
    <ScrollView>
      <View>
        <Image
          source={{uri:'ruta de imagen'}}
          //style='se crea el estilo'
          resizeMode='cover'
        />
        <Text>Mi perfil de usuario</Text>
        <Text>App demo</Text>
      </View>
      <View>
        <Text>Nombre</Text>
        <TextInput
          value={nombre}
          onChangeText={manejarCambioNombre}
          placeholder='Ingresa tu Nombre'
          placeholderTextColor="#999"
        />
        <Text>Apellido</Text>
        <TextInput
          value={apellido}
          onChangeText={manejarCambioApellido}
          placeholder='Ingresa tu apellido'
          placeholderTextColor="#999"
        />
        <Text>email</Text>
        <TextInput
          value={email}
          onChangeText={manejarCambioEmail}
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
          onPress={}// hace falta crear el metodo de guardar
        />
        <Button
          title='Limpiar campos'
          onPress={this.limpiarFormulario}  
        />
      </View>

    </ScrollView>
  </>
)
};


};

export default App;
