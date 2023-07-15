export default {
  state: {
    offline: "Offline",
    normal: "Normal",
    warning: "Warning",
    error: "Alarm",
  },
  door: {
    d11: "WH1-Gate1",
    d12: "WH1-Gate2",
    d2: "WH2",
    d3: "WH3",
    d41: "WH4-Gate1",
    d42: "WH4-Gate2",
    d5: "WH5",
  },
  camera:{
    d11c1: "WH1-Gate1-Camera1",
    d11c2: "WH1-Gate1-Camera2",
    d12c1: "WH1-Gate2-Camera1",
    d12c2: "WH1-Gate2-Camera2",
    d2c1: "WH2-Camera1",
    d2c2: "WH2-Camera2",
    d3c1: "WH3-Camera1",
    d3c2: "WH3-Camera2",
    d41c1: "WH4-Gate1-Camera1",
    d41c2: "WH4-Gate1-Camera2",
    d42c1: "WH4-Gate2-Camera1",
    d42c2: "WH4-Gate2-Camera2",
    d5c1: "WH5-Camera1",
    d5c2: "WH5-Camera2",
  },
  type: {
    temperature: "TEMP",
    humidity: "Humidity",
    pm25: "PM2.5",
    voc: "VOC",
    smokeAlarm: "Smoke",
    power: "Electricity",
  },
  message: {
    offline: " Device is offline!",
    warning: "Device failure!",
    error: "Device warning!",
    demoStart: "Start the Alarm monitoring demo, the alarm status push will start after a few seconds, please wait",
    demoEnd: "The Alarm monitoring demo is over!"
  }
}