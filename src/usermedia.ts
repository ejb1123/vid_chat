export class UserMedia {
  static localMediastream = null;
  static getmedia() {

    return navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        width: 1280,
        height: 720,
      }
    })
  }
  constructor() {

  }
}