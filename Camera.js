


class Camera{
kolvo=0

constructor(){
}

async getConnectedDevices(type) {
    const devices = await navigator.mediaDevices.enumerateDevices();
    return devices.filter(device => device.kind === type)
}


async GetAllCamers(){
//console.time('time1')

let cameras = this.getConnectedDevices('videoinput');
//console.log("cameras ",cameras)
//console.log('state ' ,cameras.state)
//console.log('MediaDeviceInfo ',cameras.MediaDeviceInfo)
//console.log(cameras.toString())
//console.log('1=',cameras.valueOf(1))
//console.log('2=',cameras.valueOf(2))

//cameras.forEach((device) => {
//        console.log(`${device.kind}: ${device.label} id = ${device.deviceId}`);
//      });

cameras.then((devices) => {
//        console.table(devices)
//        console.trace()
      let i=0
      devices.forEach((device) => {
        i++
        console.log(`kind =${device.kind}: label= ${device.label} id = ${device.deviceId} `);
        //console.log('state ' ,cameras.state)
        let id = device.deviceId
        let newOption = new Option("Camera "+i, id);
        if (i==1){newOption.selected=true}
        selectCam.append(newOption);
        //selectCam
      });
      //  console.log('selectCam ',selectCam)
      //console.timeEnd('time1')
      //console.memory
    })


let camers=cameras.value
//console.log(camers)
//console.memory
//console.timeStamp()
}




}

cam= new Camera()
cam.GetAllCamers() 
