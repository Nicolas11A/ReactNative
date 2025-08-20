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

}


};

export default App;
