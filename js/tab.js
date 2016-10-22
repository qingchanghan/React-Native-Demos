import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    BackAndroid,
    Navigator,
    Image,
    Text,
    View,
    StatusBar
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator'; //引入tabbar支持包

var _navigator; //这个变量的用途？？？
const TAB_ITEM = [{
    code : 'Home',
    name : '主页',
    icon_n : require('./images/tab/tab_messagecenter_n.png'),
    icon_p : require('./images/tab/tab_messagecenter_p.png'),
    contentView : require('./tab_home')
},{
    code : 'friend',
    name : '好友',
    icon_n : require('./images/tab/tab_contact_n.png'),
	icon_p : require('./images/tab/tab_contact_p.png'),
	contentView : require('./tab_friend')
},{
    code : 'Mine',
	name : '我的',
	icon_n : require('./images/tab/tab_myself_n.png'),
	icon_p : require('./images/tab/tab_myself_p.png'),
	contentView :  require('./tab_mine')
}];

class Tab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items : TAB_ITEM,
            selectedTab : TAB_ITEM[0].code
        }
    }

    onPress(tabCode){
        if(tabCode) {
            this.setState({
                selectedTab : tabCode
            });
        }
    }

    //渲染每项
    renderTabView(options) {
        var tabNormal = options.icon_n;
        var tabPress = options.icon_p;

        return (
            <TabNavigator.Item
                key={options.code}
                title={options.name}
                renderIcon={()=><Image style={styles.tabIcon} source={tabNormal}/>}
                renderSelectedIcon={()=><Image style={styles.tabIcon} source={tabPress}/>}
                selected={this.state.selectedTab === options.code}
                selectedTitleStyle={{color:'#333333'}}
                onPress={()=>this.onPress(options.code)}
                renderBadge={()=>options.badgeNum?<View style={styles.badgeView}>
                            <Text style={styles.badgeText}>options.badgeNum</Text>
                            </View>:null}>
                <options.contentView route={this.props.route} navigator={this.props.navigator}/>
            </TabNavigator.Item>
        );
    }

    render() {
        var items = [];
        for(var i = 0; i < this.state.items.length; i++) {
            items.push(this.renderTabView(this.state.items[i]));
        }
        return (
			<View style={styles.container}>  
				<TabNavigator tabBarStyle={styles.tab}>  
					{items}
				</TabNavigator>  
			</View>  
		);  
    }
}

var Routes = React.createClass({

    configureScene: function(){
        return Navigator.SceneConfigs.FloatFromRight;
    },
    renderScene: function(route, navigator){
        _navigator = navigator;
        let Component = route.component;
        return <Component route={route} navigator={navigator}/>
    },
    render: function(){
        var renderScene = this.renderSceneAndroid;
        var configureScene = this.configureSceneAndroid;
        return (
            <Navigator
                initialRoute={{ name: '主页', component: Tab }}
                configureScene={ this.configureScene }
                renderScene={ this.renderScene }
            />
        );
    }
});

const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    backgroundColor: '#F5FCFF',  
  },    
  tab:{  
    height: 55,  
    alignItems:'center',  
    backgroundColor:'#f4f5f6',  
  },  
  tabIcon:{  
    width:25,  
    height:25,  
  },  
  badgeView:{  
    width:22,  
    height:14 ,  
    backgroundColor:'#f85959',  
    borderWidth:1,  
    marginLeft:10,  
    marginTop:3,  
    borderColor:'#FFF',  
    alignItems:'center',  
    justifyContent:'center',  
    borderRadius:8,  
  },  
  badgeText:{  
    color:'#fff',  
    fontSize:8,  
  }  
});

module.exports = Routes;