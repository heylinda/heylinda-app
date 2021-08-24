import React from 'react';
import { StyleSheet, Text,View,TouchableOpacity } from 'react-native';
import { useThemeColor } from '../components/Themed';
interface Props{
    weekdays:number[],
    setWeekdays:any
}
export default function DayPicker({weekdays,setWeekdays}:Props){
   
    const daysIO=(v:number)=>{
           if(weekdays.includes(v)){
               const weekdayRemoved =weekdays.filter((element)=>element!=v);
               setWeekdays(weekdayRemoved);
           }else{
               setWeekdays([...weekdays,v]);
              
    }
}

   const primaryColor = useThemeColor({},'primary');

    const styles = StyleSheet.create({
        
        box:{
            width:40,
            height:40,
            borderRadius:20,
            justifyContent:'center',
            alignItems:'center',
            color : 'white',
            marginVertical:10
        },
        box1:{
            
            backgroundColor: weekdays.includes(1)?primaryColor:'grey'
        },
        box2:{
            
            backgroundColor: weekdays.includes(2)?primaryColor:'grey'
        },
        box3:{
    
            backgroundColor: weekdays.includes(3)?primaryColor:'grey'
        },
        box4:{
    
            backgroundColor: weekdays.includes(4)?primaryColor:'grey'
        },
        box5:{
    
            backgroundColor: weekdays.includes(5)?primaryColor:'grey'
        },
        box6:{
    
            backgroundColor: weekdays.includes(6)?primaryColor:'grey'
        },
        box7:{
    
            backgroundColor: weekdays.includes(7)?primaryColor:'grey'
        },
        boxContainer:{
            flexDirection :'row',
            justifyContent:'space-evenly',
            alignItems:'center'
            
        },
        textStyle:{
            color:'white'
        }
        
    })
    return(
      
        <View style={styles.boxContainer}>
        <TouchableOpacity onPress={()=>daysIO(1)}><View style={[styles.box,styles.box1]}><Text style={styles.textStyle}>SUN</Text></View></TouchableOpacity>
        <TouchableOpacity onPress={()=>daysIO(2)}><View style={[styles.box,styles.box2]}><Text style={styles.textStyle}>MON</Text></View></TouchableOpacity>
        <TouchableOpacity onPress={()=>daysIO(3)}><View style={[styles.box,styles.box3]}><Text style={styles.textStyle}>TUE</Text></View></TouchableOpacity>
        <TouchableOpacity onPress={()=>daysIO(4)}><View style={[styles.box,styles.box4]}><Text style={styles.textStyle}>WED</Text></View></TouchableOpacity>
        <TouchableOpacity onPress={()=>daysIO(5)}><View style={[styles.box,styles.box5]}><Text style={styles.textStyle}>THU</Text></View></TouchableOpacity>
        <TouchableOpacity onPress={()=>daysIO(6)}><View style={[styles.box,styles.box6]}><Text style={styles.textStyle}>FRI</Text></View></TouchableOpacity>
        <TouchableOpacity onPress={()=>daysIO(7)}><View style={[styles.box,styles.box7]}><Text style={styles.textStyle}>SAT</Text></View></TouchableOpacity>
        </View>
      
    )
}
