import { Dimensions, StyleSheet } from "react-native";
import Scaling from "../../helper/Scaling";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginBottom: Scaling.moderateScale(10),
  },
  headerTitle: {
    fontSize: Scaling.moderateScale(26),
    fontWeight: "bold",
    color: '#000',
  },
  textTitle: {
    fontSize: Scaling.moderateScale(18),
    fontWeight: "bold",
    marginVertical: Scaling.moderateScale(15),
    flexWrap: 'wrap',
    color: '#000'
  },
  textRecommended: {
    fontSize: Scaling.moderateScale(22),
    fontWeight: "bold",
    flexWrap: 'wrap',
    color: '#000'
  },
  textContent: {
    fontSize: Scaling.moderateScale(12),
    marginVertical: Scaling.moderateScale(2),
    color: '#000'
  },
  textContentSmall: {
    fontSize: Scaling.moderateScale(10),
    marginVertical: Scaling.moderateScale(2),
    color: '#000'
  },
  textDesc: {
    fontSize: Scaling.moderateScale(13),
    marginVertical: Scaling.moderateScale(2),
    color: '#8395a7',
    textAlign: 'center'
  },
  listTitle: {
    fontSize: Scaling.moderateScale(16),
    fontWeight: "bold",
    marginVertical: Scaling.moderateScale(5),
    flexWrap: 'wrap',
    color: '#000'
  },
  greyColor: {
    color: '#B8B8B8'
  },
  whiteColor: {
    color: '#fff'
  },
  orangeColor: {
    color: '#ff9f43'
  },
  bold: {
    fontWeight: 'bold'
  },
  mhMedium: {
    marginHorizontal: Scaling.moderateScale(15),
  },
  mtMedium: {
    marginTop: Scaling.moderateScale(20),
  },
  mtSmall: {
    marginTop: Scaling.moderateScale(10),
  },
  phSmall: {
    paddingHorizontal: Scaling.moderateScale(10)
  },
  pSmall: {
    padding: Scaling.moderateScale(5)
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: Scaling.moderateScale(15),
    marginTop: Scaling.moderateScale(10)
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: Scaling.moderateScale(5),
    flexDirection: 'row',
    borderRadius: Scaling.moderateScale(15),
    alignItems: 'center',
    shadowColor: 'grey',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.6,
    shadowRadius: 3,
    elevation: Scaling.moderateScale(10),
    paddingHorizontal: Scaling.moderateScale(10)
  },
  searchInput: {
    height: Scaling.moderateScale(30),
    paddingHorizontal: 5,
  },
  recommended: {
    // position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow'
  },
  backgroundImage: {
    // backgroundColor: 'yellow',
    position: 'relative',
    height: screenHeight * .15,
    width: screenWidth * .9,
    resizeMode: 'cover'
  },
  recommendedTextContainer: {
    position: 'absolute',
    top: Scaling.moderateScale(20),
    left: Scaling.moderateScale(30),
  },
  recommendedTry: {
    position: 'absolute',
    top: Scaling.moderateScale(10),
    right: Scaling.moderateScale(20),
    padding: Scaling.moderateScale(3),
    backgroundColor: '#ff9f43',
    borderRadius: 10
  },
  containerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  iconStyle: {
    fontSize: Scaling.moderateScale(30),
    fontWeight: "bold",
  },
  iconStyleSmall: {
    fontSize: Scaling.moderateScale(14),
  },
  containerLoader: {
    height: screenHeight * 0.8,
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  categoryIcon: {
    backgroundColor: 'violet',
    // padding: Scaling.moderateScale(10),
    borderRadius: Scaling.moderateScale(15),
    width: Scaling.moderateScale(60),
    height: Scaling.moderateScale(60),
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: Scaling.moderateScale(15)
  },
  categoryList: {
    flexDirection: 'row',
    // justifyContent: 'space-around'
  },
  containerCategoryIcon: {
    marginHorizontal: Scaling.moderateScale(6),
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerList: {
    width: screenWidth * .85,
    backgroundColor: '#fff',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    padding: Scaling.moderateScale(5),
    marginRight: Scaling.moderateScale(5),
    marginLeft: Scaling.moderateScale(15),
    borderRadius: Scaling.moderateScale(20),
    shadowColor: 'grey',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.6,
    shadowRadius: 3,
    elevation: Scaling.moderateScale(10),
  },
  listImage: {
    height: Scaling.moderateScale(140),
    width: Scaling.moderateScale(140),
    borderRadius: Scaling.moderateScale(20),
  },
  listDescriptionContainer: {
    // backgroundColor: 'violet',
    flex: 1,
    marginLeft: Scaling.moderateScale(10),

  },
  flagNew: {
    paddingHorizontal: Scaling.moderateScale(4),
    backgroundColor: '#ff9f43',
    borderRadius: 5,
    marginLeft: 'auto'
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  rating: {
    flexDirection: 'row',
    backgroundColor: '#1dd1a1',
    paddingHorizontal: Scaling.moderateScale(5),
    paddingVertical: Scaling.moderateScale(2),
    borderRadius: 5,
    marginRight: Scaling.moderateScale(5)
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: Scaling.moderateScale(5)
  },
  avatar: {
    height: Scaling.moderateScale(40),
    width: Scaling.moderateScale(40),
    borderRadius: Scaling.moderateScale(20)
  },
  containerRecipeList: {
    // width: screenWidth * .5,
    flex: 1,
    backgroundColor: '#fff',
    // padding: Scaling.moderateScale(5),
    marginBottom: Scaling.moderateScale(15),
    marginHorizontal: Scaling.moderateScale(5),
    borderRadius: Scaling.moderateScale(20),
    shadowColor: 'grey',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.6,
    shadowRadius: 3,
    elevation: Scaling.moderateScale(10),
  },
  imageRecipe: {
    height: Scaling.moderateScale(140),
    width: '100%',
    // borderRadius: 20,
    borderTopLeftRadius: Scaling.moderateScale(20),
    borderTopRightRadius: Scaling.moderateScale(20)
  },
  avatarContainerRecipe: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Scaling.moderateScale(5)
  },
  avatarRecipe: {
    height: Scaling.moderateScale(30),
    width: Scaling.moderateScale(30),
    borderRadius: Scaling.moderateScale(20),
    marginRight: Scaling.moderateScale(5)
  },
  flagNewRecipe: {
    position: 'absolute',
    top: Scaling.moderateScale(10),
    right: Scaling.moderateScale(10),
    paddingHorizontal: Scaling.moderateScale(4),
    backgroundColor: '#ff9f43',
    borderRadius: 5,
    marginLeft: 'auto'
  },
});
