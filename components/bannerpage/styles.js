import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      headingContainer:{
        height:'80%',
        width:'100%',
        alignItems:'center'
      },
      titles:{
        marginTop:'110%',
        width:'100%',
        alignItems:'center',
        marginBottom:'0'
      },
      textTitles:{
        fontSize:40,
        fontWeight:'600',
        color:'purple',
      },
      subTitles: {
        color:'#5c5e62',
        fontSize:16,
        marginBottom:'0',
        fontWeight:'600',
        textAlign:'center',
        marginBottom:'10%',
      },
      banner: {
        marginTop:'50%',
        height:'50%',
        resizeMode:'fit',
        width:'100%',
        position:'absolute',
        zIndex:'-999'
      },
      startButton:{
        height:'100%',
        width:'70%',
    
        borderRadius:'20%',
        alignItems:'center',
        
      },
      button:{
        height:'20%',
        width:'80%',
        // backgroundColor:'black',
        alignContent:'center',
        borderRadius:'50%',
       
      },
});

export default styles;