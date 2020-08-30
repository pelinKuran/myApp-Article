import {StyleSheet, Dimensions} from 'react-native';

// screen sizing
const {width, height} = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const recipeNumColums = 2;
// item size
const RECIPE_ITEM_HEIGHT = 110;
const RECIPE_ITEM_MARGIN = 20;

// 2 photos per width
export const RecipeCard = StyleSheet.create({
  xxx: {backgroundColor: '#f5f3f2'},
searchBut:{
    backgroundColor:'#f5f3f3'
},

  margin: {
    marginBottom: '50%',
    backgroundColor: '#f5f3f2',
  },
  alt: {
    borderRadius: 10,
    paddingTop: 5,
    height: 30,
    backgroundColor: '#574343',
    width: '99.5%',
    //opacity: 0.5,
  },
  gridContainer: {
    flex: 1,
    borderRadius: 13,
    height: 135,
    marginLeft: '3%',
    marginRight: '3%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 104.5,
    marginVertical: '3%',
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  texting: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    justifyContent: 'center',
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    //paddingTop:80,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: RECIPE_ITEM_MARGIN-5,
    marginTop: 15,

    width:
      (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) /
      recipeNumColums +9,
    height: RECIPE_ITEM_HEIGHT + 30,
    borderColor: '#cccccc',
    //borderWidth: 0.5,
    borderRadius: 2,
    backgroundColor: 'white',
    shadowColor: 'black', // android tarafinda ise yaramaz
    shadowOpacity: 0.2, // "            "
    shadowRadius: 3, //golge yayar.
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  photo: {
    opacity:0.8,
    width:
      (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) /
      recipeNumColums+9,
    height: RECIPE_ITEM_HEIGHT,
    borderRadius: 2,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  title: {
    flex: 1,
    fontSize: 16,
  fontFamily: 'helvetica',
    textAlign: 'center',
    color: 'black',
    marginTop: 5,
    marginRight: 5,
    marginLeft: 5,
  },
  category: {
    marginTop: 5,
    marginBottom: 5,
  },
});
