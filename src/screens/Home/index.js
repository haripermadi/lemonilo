import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  ImageBackground,
  SafeAreaView
} from "react-native";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from "./styles";
import Images from '../../helper/Images.js'

class Home extends Component {
  state = {
    listFood: [
      {
        id: '01',
        name: 'Egg Sandwich',
        image: Images.food7,
        isNew: true,
        rating: 4,
        totalReview: 190,
        desc: 'Delicious egg sandwich made with love',
        author: 'Mike L',
        avatar: Images.avatar1
      },
      {
        id: '02',
        name: 'Egg Sandwich',
        image: Images.food2,
        isNew: false,
        rating: 3,
        totalReview: 150,
        desc: 'Delicious egg sandwich made with love',
        author: 'Angela Yu',
        avatar: Images.avatar2
      },
      {
        id: '03',
        name: 'Egg Sandwich',
        image: Images.food3,
        isNew: true,
        rating: 4,
        totalReview: 450,
        desc: 'Delicious egg sandwich made with love',
        author: 'Mike L',
        avatar: Images.avatar1
      },
      {
        id: '04',
        name: 'Egg Sandwich',
        image: Images.food4,
        isNew: true,
        rating: 4,
        totalReview: 150,
        desc: 'Delicious egg sandwich made with love',
        author: 'Angela Yu',
        avatar: Images.avatar2
      },
      {
        id: '05',
        name: 'Egg Sandwich',
        image: Images.food5,
        isNew: false,
        rating: 5,
        totalReview: 950,
        desc: 'Delicious egg sandwich made with love',
        author: 'Mike L',
        avatar: Images.avatar1
      },
      {
        id: '06',
        name: 'Egg Sandwich',
        image: Images.food6,
        isNew: true,
        rating: 4,
        totalReview: 260,
        desc: 'Delicious egg sandwich made with love',
        author: 'Angela Yu',
        avatar: Images.avatar2
      },
    ],
    listRecipes: [
      {
        id: '01',
        name: 'Egg Sandwich',
        image: Images.food9,
        isNew: true,
        rating: 4,
        totalReview: 190,
        desc: 'Delicious egg sandwich made with love',
        author: 'Mike L',
        avatar: Images.avatar1
      },
      {
        id: '02',
        name: 'Egg Sandwich',
        image: Images.food2,
        isNew: false,
        rating: 3,
        totalReview: 150,
        desc: 'Delicious egg sandwich made with love',
        author: 'Angela Yu',
        avatar: Images.avatar2
      },
      {
        id: '03',
        name: 'Egg Sandwich',
        image: Images.food3,
        isNew: true,
        rating: 4,
        totalReview: 450,
        desc: 'Delicious egg sandwich made with love',
        author: 'Mike L',
        avatar: Images.avatar1
      },
      {
        id: '04',
        name: 'Egg Sandwich',
        image: Images.food4,
        isNew: true,
        rating: 4,
        totalReview: 150,
        desc: 'Delicious egg sandwich made with love',
        author: 'Angela Yu',
        avatar: Images.avatar2
      },
      {
        id: '05',
        name: 'Egg Sandwich',
        image: Images.food5,
        isNew: false,
        rating: 5,
        totalReview: 950,
        desc: 'Delicious egg sandwich made with love',
        author: 'Mike L',
        avatar: Images.avatar1
      },
      {
        id: '06',
        name: 'Egg Sandwich',
        image: Images.food6,
        isNew: true,
        rating: 4,
        totalReview: 260,
        desc: 'Delicious egg sandwich made with love',
        author: 'Angela Yu',
        avatar: Images.avatar2
      },
    ],
    page: 1,
    initialList: []
  };

  searchInput(text) {
    alert(text)
  }

  renderCategory(name, icon, color, background) {
    return (
      <TouchableOpacity style={styles.containerCategoryIcon}>
        <View style={[styles.categoryIcon, { backgroundColor: background }]}>
          <Icon name={icon} style={styles.iconStyle} color={color} />
        </View>
        <Text>{name}</Text>
      </TouchableOpacity>
    )
  }

  renderSearch() {
    return (
      <View style={[styles.mhMedium, styles.searchContainer]}>
        <View style={[styles.inputContainer]}>
          <Icon name="magnify" style={styles.iconStyleSmall} />
          <TextInput
            style={styles.searchInput}
            onChangeText={(text) => this.searchInput(text)}
            placeholder="Search for any recipes"
          />
        </View>
        <View style={[styles.phSmall]}>
          <Icon name="buffer" style={styles.iconStyle} />
        </View>
      </View>
    )
  }

  renderList(item) {
    return (
      <TouchableOpacity style={styles.containerList}>
        <View style={styles.pSmall}>
          <Image source={item.image} style={styles.listImage} />
        </View>
        <View style={[styles.listDescriptionContainer]}>
          <View>
            {
              item.isNew ? <View style={[styles.flagNew]}>
                <Text style={[styles.textContentSmall, styles.whiteColor, styles.bold]}>NEW!</Text>
              </View> : null
            }
          </View>
          <View>
            <Text style={[styles.listTitle]}>{item.name}</Text>
            <View style={styles.ratingContainer}>
              <View style={styles.rating}>
                <Icon name="star" style={styles.iconStyleSmall} color={'#fff'} />
                <Text style={[styles.whiteColor, styles.bold]}>{item.rating}</Text>
              </View>
              <Text style={styles.textContent} >{item.totalReview} review</Text>
            </View>
            <Text style={styles.textDesc}>{item.desc}</Text>
            <View style={[styles.avatarContainer]}>
              <Image source={item.avatar} style={styles.avatar} />
              <Text style={styles.textDesc}>by {item.author}</Text>
              <Icon name="star" style={styles.iconStyleSmall} />
            </View>

          </View>
        </View>

      </TouchableOpacity>
    )
  }

  renderListRecipes(item) {
    return (
      <TouchableOpacity style={styles.containerRecipeList}>
        <View style={{ position: 'relative' }}>
          <Image source={item.image} style={styles.imageRecipe} />
          {
            item.isNew ? <View style={[styles.flagNewRecipe]}>
              <Text style={[styles.textContentSmall, styles.whiteColor, styles.bold]}>NEW!</Text>
            </View> : null
          }
        </View>
        <View style={[styles.listDescriptionContainer]}>
          <View>
            <Text style={[styles.listTitle]}>{item.name}</Text>
            <View style={styles.ratingContainer}>
              <View style={styles.rating}>
                <Icon name="star" style={styles.iconStyleSmall} color={'#fff'} />
                <Text style={[styles.whiteColor, styles.bold]}>{item.rating}</Text>
              </View>
              <Text style={styles.textContent} >{item.totalReview} review</Text>
            </View>
            <View style={[styles.avatarContainerRecipe]}>
              <Image source={item.avatar} style={styles.avatarRecipe} />
              <Text style={styles.textDesc}>by {item.author}</Text>
            </View>

          </View>
        </View>

      </TouchableOpacity>
    )
  }

  renderTrending(title) {
    return (
      <View>
        <View style={[styles.containerTitle, styles.mhMedium]}>
          <Text style={[styles.textTitle]}>{title}</Text>
          <TouchableOpacity>
            <Text style={[styles.textContent]}>View All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={this.state.listFood}
          renderItem={({ item }) => this.renderList(item)}
          keyExtractor={item => item.id}
          horizontal
          contentContainerStyle={styles.pSmall}
        />
      </View>
    )
  }

  renderRecipes() {
    return (
      <View style={[styles.mhMedium]}>
        <View style={[styles.containerTitle]}>

          <Text style={[styles.textTitle]}>All Recipes</Text>
          <TouchableOpacity>
            <Text style={[styles.textContent]}>View All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={this.state.listRecipes}
          renderItem={({ item }) => this.renderListRecipes(item)}
          keyExtractor={item => item.id}
          numColumns={2}
          contentContainerStyle={styles.pSmall}
        />
      </View>
    )
  }

  render() {
    // console.log('home--render--------', this.state)
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <View style={[styles.containerHeader, styles.mhMedium]}>
            <Text style={[styles.headerTitle]}>Discover</Text>
            <Icon name="bell-outline" style={styles.iconStyle} />
          </View>
          {this.renderSearch()}
          <View style={[styles.mhMedium]}>
            <Text style={[styles.textTitle]}>Recommended for you</Text>
            <TouchableOpacity style={styles.recommended}>
              <ImageBackground source={Images.food1} style={styles.backgroundImage} imageStyle={{ borderRadius: 20 }}>
                <View style={styles.recommendedTextContainer}>
                  <Text style={[styles.textRecommended, styles.whiteColor]}>Caffe Latte</Text>
                  <Text style={[styles.textContent, styles.whiteColor, styles.bold, styles.mtMedium]}>The most important part of your breakfast.</Text>
                </View>
                <View style={[styles.recommendedTry]}>
                  <Text style={[styles.textContent, styles.whiteColor, styles.bold]}>TRY NOW!</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View style={[styles.mhMedium]}>
            <Text style={[styles.textTitle]}>Categories</Text>
            <View style={styles.categoryList}>
              {this.renderCategory('Fruit', 'corn', '#10ac84', 'rgba(29, 209, 161,.5)')}
              {this.renderCategory('Milkshakes', 'cup', '#f368e0', 'rgba(255, 159, 243,.5)')}
              {this.renderCategory('Cookies', 'cloud', '#ff9f43', 'rgba(254, 202, 87,.5)')}
              {this.renderCategory('Bread', 'bread-slice', '#ee5253', 'rgba(255, 107, 107,.5)')}
              {this.renderCategory('More', 'collage', '#0abde3', 'rgba(72, 219, 251,.5)')}
            </View>
          </View>
          {this.renderTrending('Trending Right Now')}
          {this.renderTrending('Top Recipes')}
          {this.renderRecipes()}
        </View>
      </SafeAreaView>
    )
  }
}


export default Home
