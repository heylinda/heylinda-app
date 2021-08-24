import * as React from 'react'
import { Platform,StyleSheet,View,TouchableOpacity,Text } from 'react-native'
import { useThemeColor } from '../../components/Themed'

import DateTimePicker from '@react-native-community/datetimepicker';
import Notify from './notificationHandler';
import WeekdayPicker from '../../components/WeekdayPicker';
import Toast from 'react-native-simple-toast';

const NotificationSetter = ()=>{


  const [time,setTime] = React.useState(new Date());
  const [pickedTime,setPickedTime] = React.useState(false);
  const [weekdays,setWeekdays] = React.useState([-1]);
  const [show,setShow] = React.useState(false);

  const changeWeekdayHandler=(event:Event,value?:typeof weekdays)=>{
    setWeekdays(value||weekdays);
  }

  const changeTimeHandler =(event:Event,value?:Date)=>{
    setShow(Platform.OS=='ios');
    console.log(value?.getHours(),value?.getMinutes(),value?.getSeconds());
    if(value){
      setPickedTime(true);
    }else{
      setPickedTime(false);
    }
      setTime(value||new Date());
      
  }

  return(
    <>

    <WeekdayPicker weekdays={weekdays} setWeekdays={setWeekdays}/>
    
    <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:10}}>
      <TouchableOpacity  onPress={()=>{
        if(weekdays.length!=1 && pickedTime){
        Notify.testSchedular(weekdays,time);
        Toast.show('Notifications Set');
        console.log(weekdays.toString());
        }else{
            Toast.show('Please Set Timing and Weekdays');
        }
        }}>
      <View style={[styles.pickTime,{backgroundColor : useThemeColor({},'primary')}]}>
        <Text style={styles.pickTimeText}>NOTIFY</Text>
      </View>
      </TouchableOpacity>
      {pickedTime && <Text style={styles.selectedTime}>At {time.getHours().toString()} : {time.getMinutes().toString()} </Text>}
      
      <TouchableOpacity onPress={()=>setShow(!show)}>
      <View style={[styles.pickTime,{backgroundColor : useThemeColor({},'primary')}]}>
        <Text style={styles.pickTimeText}>PICK TIME</Text>
      </View>
      </TouchableOpacity>
      
      
      </View>
      {show && <DateTimePicker
       value={time}
       mode='time'
       is24Hour={true}
       display='clock'
       onChange={changeTimeHandler}
      />}
    </>
  )

}

const styles=StyleSheet.create({
    pickTime:{
      width : 90,
      height:25,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10
    },
    pickTimeText:{
      color:'white',
    },
    selectedTime:{
      fontSize:20
    }
  })

export default NotificationSetter;