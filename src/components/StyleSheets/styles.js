import {StyleSheet} from 'react-native';
import {RecipeCard} from './AppStyles';

const recipeNumColums = 2;
// item size
const RECIPE_ITEM_HEIGHT = 110;
const RECIPE_ITEM_MARGIN = 20;
const styles = StyleSheet.create({
  container: RecipeCard.container,
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  category: RecipeCard.category,
  input: {
    marginTop: 8,
    height: 30,
    // paddingHorizontal: 5,
    borderWidth: 0,
    borderRadius: 10,
    borderColor: '#9c848a',
    color: '#540e20',
    marginBottom: 2,
    fontSize: 14,
    fontWeight: '600',
    backgroundColor: 'white',
    margin: 3,
    width: '92%',
    paddingLeft: 35,
    marginLeft: '4%',
  },
  deneme: {
    fontFamily: 'Helvetica',
    fontSize: 32,
    fontWeight: '400',
    paddingTop: 0,
    paddingLeft: 15,
    marginBottom: 0,
    opacity: 1,
    zIndex: 1,
    color: 'white',
    backgroundColor:'black',

  },
  profile:{
    width:'25%',
    height:'65%',
    borderRadius:100,
    backgroundColor:'white',
    marginTop:'8%',
    marginLeft:'5%',


  },


  bigContainer: {
    flex: 1,
    marginLeft: RECIPE_ITEM_MARGIN - 8,
    marginTop: 18,
    width: '94%',
    height: RECIPE_ITEM_HEIGHT + 30,
    borderColor: '#cccccc',
    //borderWidth: 0.5,
    borderRadius: 5,
    //backgroundColor: '#fff5f5',
    backgroundColor: '#e6dfdf',
    shadowColor: 'black', // android tarafinda ise yaramaz
    shadowOpacity: 0.2, // "            "
    shadowRadius: 2, //golge yayar.
    shadowOffset: {
      width: 0,
      height: 1,
    },
    position: 'relative',

  },
  photox: {
    opacity: 0.8,
    width: '100%',
    height: RECIPE_ITEM_HEIGHT,
    borderRadius: 3,
    marginTop: 0,

    // borderBottomLeftRadius: 0,
    // borderBottomRightRadius: 0,
  },
});

export default styles;
