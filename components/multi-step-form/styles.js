import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  horizCont: {
    flex:1,
    height:'100%',
    flexDirection:'row',
    
    width:'500%',
  },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        height:'60%',
        alignItems: 'left',
        justifyContent: 'center',
        marginLeft:'5%',
        marginRight:'5%',
        position:'relative'
      },
      container1: {
        flex: 1,
        backgroundColor: '#fff',
        height:'60%',
        alignItems: 'left',
        justifyContent: 'center',
        marginLeft:'5%',
        marginRight:'5%',
        position:'relative',
        display:'none'
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
      inputL:{
        position:'relative',
        marginTop:'30%',
        marginBottom:'20%',
      },
      subTitles: {
        color:'#5c5e62',
        fontSize:16,
        marginBottom:'0',
        fontWeight:'600',
        textAlign:'left',
        marginBottom:'5%',
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
        height:'80%',
        width:'70%',
    
        borderRadius:'20%',
        alignItems:'center',
        marginBottom:'20%',
      },
      button:{
        height:'20%',
        width:'80%',
        // backgroundColor:'black',
        alignContent:'center',
        borderRadius:'50%',
       
      },
      nextButton:{
          width:'100%',
          marginTop:'10%', 
          position: 'relative'  
      }
});

export default styles;