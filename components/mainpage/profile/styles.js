
import { StyleSheet } from 'react-native';
import { Colors } from 'react-native-paper';

const styles = StyleSheet.create({
    header:{
        height:200,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        clipPath: 'ellipse(51% 43% at 48% 0%)',
        backgroundColor: Colors.purple500,
        position:'absolute',
    },
    header1:{
        marginTop:'10%',
        height:'20%',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:'20%',
    },
    row:{
        flex:1,
        flexDirection:'row',
        marginLeft:'15%',
        marginRight:'15%',
        marginBottom:'0%',
        height:100,
        alignItems:'center',
        justifyContent:'center',
        
    },
    item1:{
        float:'left',
        marginRight:'40%'
    },
    item2:{
        alignItems:'center',
        justifyContent:'center',
        width:'100%'

    },
    subTitles: {
        color:'#5c5e62',
        marginTop:'3%',
        fontSize:22,
        fontWeight:'600',
        textAlign:'center',
        
      },
      subTitles1: {
        color:'#f3f3f3',
        marginTop:'3%',
        fontSize:14,
        fontWeight:'600',
        textAlign:'center',
        
      },
     
  });
export default styles