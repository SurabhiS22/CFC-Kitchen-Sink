
import React, {Component} from 'react';
import {StyleSheet,FlatList,View} from 'react-native';
import {Container,Header,Card,CardItem,Content,Left,Right,Text,Body,Item,Button} from 'native-base';

import list from './list';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
//import IconSet from 'react-native-vector-icons/Feather';

export default class App extends Component {
  
  constructor(props) {
    super(props);
  this.state={
    data:list
  };
}

  render() {
    return (
      <Container>
        <Header/>

        <Content style={styles.container}>
        
        <FlatList
        vertical
        data={this.state.data}
        renderItem={({ item: rowData }) => {
          return (
            <Card style={styles.Inner}> 
<CardItem style={{backgroundColor:'#fff176'}}>

  <Left>
  <FontAwesome style={{fontSize: 40,color:rowData.color}} name= {rowData.icon}/>
</Left>
 <View>
    <Text style={styles.item}>{rowData.title}</Text>
    
    <Text style={styles.subItem}note>{rowData.subTitle}</Text>
    </View>
    
  <Right>
  
<Item>

<FontAwesome style={{fontSize: 23}} name="trash"/>
  <FontAwesome style={{fontSize: 23,marginLeft:15}} name="edit"/>

</Item>
  </Right>
  </CardItem>
</Card>
       
 );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
 
 </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#D3D3D3',
    flexDirection: "column",
    padding: 10,
    height:200,
    
  },
  Inner:{
    flex:2,
    height:130,
    justifyContent:'center',
    backgroundColor:'#fff176',
  },
  item:{
fontSize:25,
fontFamily:'Cochin',
color:'black'
  },
  subItem:{
    fontSize:17,
fontFamily:'Cochin',

  }
  
});
