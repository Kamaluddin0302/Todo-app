import React, { Component } from "react";

import {
  StyleSheet,
  View,
  Text,
  Platform,
  TouchableOpacity,
  Alert,
  Image
} from "react-native";

import AppIntroSlider from "react-native-app-intro-slider";

import { Camera } from "expo-camera";

import * as Permissions from "expo-permissions";
import * as MediaLibrary from "expo-media-library";

export default class IntroApp extends Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    flashMode: Camera.Constants.FlashMode.on
  };
  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
    this.getCameraRollPermissions();
  }
  async getCameraRollPermissions() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status === "granted") {
      this.setState({ rollGranted: true });
    } else {
      console.log("Uh oh! The user has not granted us permission.");
      this.setState({ rollGranted: false });
    }
  }
  takePictureAndCreateAlbum = async () => {
    const options = { quality: 1.0, base64: true };
    const { uri } = await this.camera.takePictureAsync(options);

    console.log("uri", uri);
    const asset = await MediaLibrary.createAssetAsync(uri);
    console.log("asset", asset);
  };

  constructor(props) {
    super(props);
    this.state = {
      show_Main_App: false,
      zoom: 0
    };
  }
  zoomin = () => {
    if (this.state.zoom <= 1) {
      this.setState({
        zoom: this.state.zoom + 0.1
      });
    }
  };

  zoomout = () => {
    if (this.state.zoom >= 0) {
      this.setState({
        zoom: this.state.zoom - 0.1
      });
    }
  };
  on_Done_all_slides = () => {
    this.setState({ show_Main_App: true });
  };

  on_Skip_slides = () => {
    this.setState({ show_Main_App: true });
  };
  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera
            style={{ flex: 1 }}
            type={this.state.type}
            flashMode={this.state.flashMode}
            zoom={this.state.zoom}
            autoFocus={Camera.Constants.AutoFocus.off}
            ref={ref => {
              this.camera = ref;
            }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "transparent",
                flexDirection: "row"
              }}
            >
              <TouchableOpacity
                style={styles.Logout}
                onPress={() => this.props.Logout()}
              >
                <Image
                  style={{ width: 35, height: 35 }}
                  source={require("./../../Images/logout.png")}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.flip}
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                  });
                }}
              >
                <Image
                  style={{ width: 35, height: 35 }}
                  source={require("./../../Images/digital.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this.state.rollGranted && this.state.hasCameraPermission
                    ? this.takePictureAndCreateAlbum()
                    : Alert.alert("Permissions not granted")
                }
                style={styles.buttonContainer}
              >
                {/* <View style={styles.button}> */}
                <Image
                  style={{ width: 35, height: 35 }}
                  source={require("./../../Images/captureimage.png")}
                />

                {/* </View> */}
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.zoomin()}
                style={styles.zoominContainer}
              >
                <Image
                  style={{ width: 35, height: 35 }}
                  source={require("./../../Images/zoom-in.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.zoomout()}
                style={styles.zoomoutContainer}
              >
                <Image
                  style={{ width: 35, height: 35 }}
                  source={require("./../../Images/zoom.png")}
                />
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 20 : 0,
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  title: {
    fontSize: 26,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20
  },
  text: {
    color: "#fff",
    fontSize: 20
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain"
  },
  buttonContainer: {
    position: "absolute",
    bottom: 10,
    left: 150,
    right: 0,
    width: 40
  },
  zoominContainer: {
    position: "absolute",
    bottom: 10,
    left: 310,
    right: 0,
    width: 40
  },
  zoomoutContainer: {
    position: "absolute",
    bottom: 10,
    left: 240,
    right: 0,
    width: 40
  },
  Logout: {
    height: 55,
    padding: 10,
    position: "absolute",
    bottom: 0,
    left: 310,
    right: 0,
    width: 40,
    top: 20
  },
  flip: {
    height: 55,
    padding: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: 40
  },

  button: {
    width: 200,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    paddingVertical: 4,
    borderWidth: 1.5,
    borderColor: "#fff"
  }
});

const slides = [
  {
    key: "k1",
    title: "Snapfit",
    text: "Custom clothes at the tip of your touch",
    image: {
      url: "https://reactnativecode.com/wp-content/uploads/2019/04/calendar.png"
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: "#FF1744"
  },
  {
    key: "k2",
    title: "Guaranteed Fit.",
    text: "Revolutionary Algorithm, Tailored to Perfection.",
    image: {
      uri: "https://reactnativecode.com/wp-content/uploads/2019/04/cloud.png"
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: "#D500F9"
  },
  {
    key: "k3",
    title: "MMeasurements Made Easy",
    text: "Make a precise measurement with just one click in 30 seconds",
    image: {
      uri: "https://reactnativecode.com/wp-content/uploads/2019/04/computer.png"
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: "#2979FF"
  },
  {
    key: "k4",
    title: "Dress to Impress",
    text:
      " Sit back and relax while waiting for the package to arrive at your doorstep.",
    image: {
      uri: "https://reactnativecode.com/wp-content/uploads/2019/04/flight.png"
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: "#1DE9B6"
  }
];
