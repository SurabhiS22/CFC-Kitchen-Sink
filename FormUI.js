


import React, {Component} from 'react';
import {Text,View,ScrollView} from 'react-native';
import {Container, Header, Content,CardItem,Item,Title,Footer,CheckBox,Card,Left,Right,Input,ListItem,Icon,Form,Textarea, Body} from 'native-base';
import RangeSlider from 'react-native-range-slider';
import DatePicker from 'react-native-datepicker'


export default class FormUI extends Component {
  constructor(props){
    super(props)
    this.state = {date:"2019-01-01"}
  }
  render() {
    return (
     <Container>
     <Header>
     <Left/>
          <Body>
            <Title>Settings</Title>
          </Body>
          <Right />
     </Header>
     <ScrollView>
    
     <Text style={{fontSize:20,fontWeight:'bold',marginTop:20,marginLeft:20}}>Privacy Level</Text>
    
          
     <ListItem style={{borderBottomColor:'white'}} horizontal={true}>
            <CheckBox style={{marginLeft:10}} checked={false} />

          
            

            <Text style={{marginLeft:10}}>Yes</Text>

           
        
         
        
           
            <CheckBox style={{marginLeft:30}} checked={true} />

          
            

            <Text style={{marginLeft:10}}>No</Text>

      
            
            <CheckBox style={{marginLeft:30}} checked={false} />

          
            

            <Text style={{marginLeft:10}}>Owner</Text>

           
            </ListItem>
           
        <Content>
        <Card transparent style={{marginTop:20,flex:1,alignContent:'space-around'}}>
        <CardItem>
        
        <Item regular style={{marginTop:10,marginRight:10}}>
        <Icon active name='home' />
        <Input placeholder='Name'/>
        </Item>

        
        </CardItem>

        <Form style={{marginTop:20,marginLeft:20,marginRight:20}}>
            <Textarea rowSpan={5} bordered placeholder="Description" />
          </Form>
          <CardItem>
          <Text style={{fontSize:20,fontWeight:'bold',marginTop:10,marginLeft:20}}>Range</Text>
          
          </CardItem>
          <CardItem>
          <View style={{marginTop:20,marginLeft:20,marginRight:20}}>
          
  <RangeSlider
    minValue={0}
    maxValue={200}
    tintColor={'#000000'}
    tintColorBetweenHandles={'#1273de'}
    handleBorderColor={'#9b9b9b'}
    minLabelColour={'#000000'}
    maxLabelColour={'#000000'}
    handleBorderWidth={30}
    selectedMinimum={0}
    selectedMaximum={200}
    lineHeight={5}
    suffix={'m'}
    style={{height: 50, width: 300}}
    onChange={ (data)=>{ console.log(data);} }
  />
</View>
</CardItem>

<CardItem>
<Text style={{fontSize:20,fontWeight:'bold',marginTop:10,marginLeft:20,marginBottom:5}}>Date Selection</Text>
</CardItem>
<CardItem> 
<DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2019-01-01"
        maxDate="2022-12-31"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />

</CardItem>
 </Card>
        </Content>
        </ScrollView>
        <Footer/>


     </Container>

    );
  }
}

