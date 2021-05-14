import React, {Component} from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import { Content, Card, CardItem, Body, Left, Right} from 'native-base';
import FitImage from 'react-native-fit-image';
export default class AppBodyData extends Component {

    render() {
        let articles = this.props.data.map(function (articleData, index) {
            return (
                <Card>
                    <CardItem>
                        <Left>
                            <Body>
                                 <Text>{articleData.firstname +" "+ articleData.lastname}</Text>
                            </Body>
                        </Left>
                        <Right>
                            <Body>
                                 <Text>{articleData.hour_price + "₺"}</Text>
                            </Body>
                        </Right>
                    </CardItem>
                    <CardItem>
<FitImage source={{uri: 'http://ayhanaltan.com/dummy.png'}}
style={styles.fitImageWithSize}/>
                    </CardItem>
                    <CardItem content>
                    <Text>{articleData.mentor_about}</Text>

                    </CardItem>
                    <CardItem>
                        <Button title="İncele">
                         
                            <Text>

                           </Text>
                        </Button>
                        
                    </CardItem>
                </Card>
            )
        });
               

        return (
            <Content>
                {articles}
            </Content>

        );

    }
}
module.export = AppBodyData;
var styles = StyleSheet.create({
    fitImage: {
      borderRadius: 1,
    },
    fitImageWithSize: {
      height: 125,
      width: 100,
    },
  });