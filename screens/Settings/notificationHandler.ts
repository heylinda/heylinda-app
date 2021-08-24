import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import { Platform } from "react-native";

const askPermissions = async () => {
  const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  let finalStatus = existingStatus;
  if (existingStatus !== "granted") {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }
  if (finalStatus !== "granted") {
    return false;
  }
  return true;
};


const deleteNotifications = async()=>{
    Notifications.dismissAllNotificationsAsync();
}



const iosScheduler = (weekday:number[],time:Date)=>{
   
if(weekday!=[-1]){
  Notifications.cancelAllScheduledNotificationsAsync();
 weekday.forEach((v)=>{
     if(v!=-1){
     Notifications.scheduleNotificationAsync({
        content: {
          title: 'Practice your meditation today  🙇‍♂️',
          
        },
        trigger:{
          hour:time.getHours(),
          minute:time.getMinutes(),
          weekday : v
        }
      });
    }

 }
 
 );

}
}



  const AndroidSchedular = (weekday:number[],time:Date)=>{
   
      Notifications.cancelAllScheduledNotificationsAsync();
    if(weekday!=[-1]){

     weekday.forEach((v)=>{
         if(v!=-1){
         Notifications.scheduleNotificationAsync({
            content: {
              title: 'Practice your meditation today 🙇‍♂️',
             
            },
            trigger : {
              hour: time.getHours(),
              minute: time.getMinutes(),
              weekday: v,
              repeats:true
          }
          });
        }

     }
     
     );

    }
  }


const PlatformScheduler =(weekday:number[],time:Date)=>{
  if(Platform.OS=='android'){
    AndroidSchedular(weekday,time);
  }
  if(Platform.OS=='ios'){
    iosScheduler(weekday,time);
  }
  
}

export default {askPermission : askPermissions,testSchedular : PlatformScheduler,deleteNotification : deleteNotifications};
