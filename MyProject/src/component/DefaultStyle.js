import {
    StyleSheet,
} from 'react-native';

const DStyle = StyleSheet.create({
  container: {
		flex:1,
		// width: global.WIDTH,
		// height: global.HEIGHT,
		// paddingTop: 24,
		backgroundColor: '#fffbea',
  },
  header:{
		width: '100%',
		height: '10%',
		// backgroundColor: '#ff0000',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 30,
	},
	content:{
		// width: '100%',
		// height: '57%',
		flex: 1,
		// backgroundColor: '#00ff00',
		justifyContent: 'center',
		alignItems: 'center',
	},
	footer:{
		width: '100%',
		height: '10%',
		// backgroundColor: '#ffff00',
		justifyContent: 'center',
		alignItems: 'center',
	}
});
export default DStyle;