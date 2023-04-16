import PushNotification from 'react-native-push-notification';


const CreateChannel = () => {
    PushNotification.createChannel(
        {
          channelId: "channel-id", 
          channelName: "My channel", 
      
        })

        PushNotification.createChannel(
            {
              channelId: "add-notify", 
              channelName: "Add Notify Channel", 
          
            })

            PushNotification.createChannel(
              {
                channelId: "remove-notify", 
                channelName: "Remove Notify Channel", 
            
              })
}









export default CreateChannel

