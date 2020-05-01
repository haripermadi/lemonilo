import { Dimensions, StyleSheet, Platform } from "react-native";
import Scaling from "../../helper/Scaling";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingVertical: screenHeight * .3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textTitle: {
    fontSize: Scaling.moderateScale(24),
    fontWeight: "bold",
    marginVertical: Scaling.moderateScale(2),
  }

});
