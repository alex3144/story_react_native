import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	Dimensions,
	View,
	ScrollView,
	Image,
	Switch,
	StatusBar,
	Alert,
	Slider,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux'
import { _currentUser } from '../../technicalContainer/user/userThunk';
import { _disconnexion, _setParameters, _getParameters } from './parametersThunk';

import MultiSlider from 'react-native-multi-slider'
import StyleDimention from '../../../style/dimention';
import LinearGradient from 'react-native-linear-gradient';

class Parameters extends Component {
	componentWillMount() {
		this.props._getParameters();
		console.log("-----in cwm parameters", this.props.parameters)
	}
	multiSliderValuesChange = (values) => {
		console.log(values)
		this.props._setParameters(values)
		console.log(this.props.parameters)
	}

	render() {
		if (this.props.parameters != null) {
			const alertDeconnexion = () => {
				return (
					Alert.alert(
						'Oups!',
						'Voulez vous vraiment vous deconneter',
						[
							{ text: 'OK', onPress: () => this.props._disconnexion() },
							{ text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
						],
					)
				);
			}
			return (
				<ScrollView style={styles.container}>
					<StatusBar barStyle={'dark-content'} />
					<View style= {styles.containerNarBar}>
						<View style={styles.cardNavBar}>
						</View>
						<View style={styles.cardNavBar}>
							<Text style= {styles.textNavBar} >
								Paramètres
            </Text>
						</View>
						<View style={[styles.cardNavBar, styles.buttonNavBar]}>
							<TouchableOpacity style={styles.buttonRight} onPress={() => Actions.swiper({index:0,isEnable:true})}>
								<Text style= {styles.textNavBarButton} >
									Ok
              	</Text>
							</TouchableOpacity>
						</View>
					</View>

					<View style={styles.containerTitle}>
						<Text style={styles.textTitle}>
							RECHERCHE
               </Text>
					</View>
					<View style= {styles.containerResearch}>
						<View style={styles.rowResearch}>
							<View style={{ flexDirection: 'column' }}>
								<View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
									<Text style={styles.textResearch}>
										Tranche d'âge
								</Text>
									<Text style={styles.textResearch}>
										{this.props.parameters[0]} - {this.props.parameters[1]}
									</Text>
								</View>
								<View style={{ marginLeft: 5, marginTop: 15 }}>
									<MultiSlider
										values={this.props.parameters}
										sliderLength={280}
										onValuesChangeFinish={this.multiSliderValuesChange}
										min={18}
										max={50}
										step={1}
										markerStyle={{
											height: 30,
											width: 30,
											borderRadius: 15,
											borderWidth: 0.5,
											backgroundColor: 'white',
											borderColor: 'rgb(226,226,226)',
											shadowColor: 'black',
											shadowOffset: { width: 0, height: 0 },
											shadowOpacity: 0.3,
											shadowRadius: 4,
										}}
										unselectedStyle={{ backgroundColor: 'rgb(181,181,181)' }}
										trackStyle={{ height: 2 }}
										selectedStyle={{ backgroundColor: 'rgb(248,194,28)' }}
									/>
								</View>
							</View>
						</View>
					</View>

					<View style={styles.containerTitle}>
						<Text style={styles.textTitle}>
							DISPO
               </Text>
					</View>
					<View style={styles.containerDispo}>
						<TouchableOpacity>
							<Text style={styles.textRow}>
								Nous contacter
                  </Text>
						</TouchableOpacity>
						<TouchableOpacity>
							<Text style={styles.textRow}>
								Mise à jour
                  </Text>
						</TouchableOpacity>
					</View>
					<View style={styles.containerTitle}>
						<Text style={styles.textTitle}>
							JURIDIQUE
               </Text>
					</View>
					<View style= {styles.containerJuridique}>
						<TouchableOpacity>
							<Text style={styles.textRow}>
								Conditions générales d'utilisation
                  </Text>
						</TouchableOpacity>

						<TouchableOpacity>
							<Text style={styles.textRow}>
								Mentions légales
                  </Text>
						</TouchableOpacity>

						<TouchableOpacity>
							<Text style={styles.textRow}>
								Politique de confidentialité
                  </Text>
						</TouchableOpacity>
					</View>
					<View style={styles.containerDisable}>
						<TouchableOpacity style={styles.buttonConnexion} onPress={alertDeconnexion}>
							<Text style={styles.textConnexion}>
								Se déconnecter
                  </Text>
						</TouchableOpacity>
						<TouchableOpacity>
							<Text style={styles.textDelete}>
								Supprimer le compte
                  </Text>
						</TouchableOpacity>
					</View>

					<View style={styles.containerFooter}>
						< LinearGradient colors={['rgb(252,227,60)', 'rgb(248,194,28)']} style={[styles.linearGradientFooter]} >
							<Text style= {styles.textFooter} >
								Dispo
               </Text>
							<Text style= {styles.versionFooter} >
								Version 2.0.1
               </Text>

						</LinearGradient>
					</View>

				</ScrollView>
			)
		} else {
			console.log("else", this.props.parameters)
			return (
				<View>
					<Text>
						...
					</Text>
				</View>
			)
		}
	}
}

const mapStateToProps = (state) => {
	console.log("-=-=-=-=-=in parameters map state to props view", state.parametersReducer)
	const { parameters } = state.parametersReducer
	console.log("----- paramters ------", parameters)
	return {
		parameters
	}
}
export default connect(mapStateToProps, { _disconnexion, _setParameters, _getParameters })(Parameters);

const styles = {
	//Style
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	containerTitle: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgb(242,242,242)',
		height: 52,

	},
	textTitle: {
		fontFamily: "ProximaNovaSoft-Semibold",
		color: 'rgb(137,137,137)',
		fontSize: 18,
	},
	textRow: {
		fontFamily: "ProximaNovaSoft-Regular",
		color: 'black',
		fontSize: 21,
		padding: 15,
		marginLeft: 10,
	},
	//-------------------------------------
	//Nav Bar style
	textNavBar: {
		fontFamily: "ProximaNovaSoft-Semibold",
		fontSize: 22,
		color: 'rgb(248,194,28)',
		backgroundColor: "transparent",
		width: 113,
	},
	textNavBarButton: {
		fontFamily: "ProximaNovaSoft-Semibold",
		fontSize: 22,
		color: 'rgb(248,194,28)',
		backgroundColor: "transparent",
	},
	cardNavBar: {
		width: StyleDimention.CARD_WIDTH / 3,
		alignItems: 'center',
	},
	containerNarBar: {
		height: 87,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	buttonNavBar: {
		paddingLeft: 40,
	},
	//-------------------------------------
	//Footer style
	containerFooter: {
		alignItems: 'center',
		justifyContent: 'center',
		height: 199,
	},
	textFooter: {
		marginBottom: 20,
		fontSize: 40,
		fontFamily: 'TypoGraphica',
		color: 'white',
		backgroundColor: 'transparent',
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 4,
		textShadowColor: 'rgba(0,0,0,0.5)',
	},
	versionFooter: {
		backgroundColor: 'transparent',
		fontSize: 18,
		fontFamily: "ProximaNovaSoft-Semibold",
		color: 'white',
	},
	linearGradientFooter: {
		width: StyleDimention.DEVICE_WIDTH,
		height: 199,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 30,
	},
	//-------------------------------------
	//General style
	containerGeneral: {
		height: 160,
		justifyContent: 'center',
	},
	textGeneralStyle: {
		padding: 15,
		marginLeft: 10,
		fontFamily: "ProximaNovaSoft-Regular",
		color: 'black',
		fontSize: 21,
	},
	//-------------------------------------
	//Notification style
	containerResearch: {
		height: 260,
		justifyContent: 'center',
	},
	rowResearch: {
		padding: 15,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginLeft: 10,
	},

	textResearch: {
		fontFamily: "ProximaNovaSoft-Regular",
		color: 'black',
		fontSize: 21,
	},

	//-------------------------------------
	//Story style
	containerDispo: {
		height: 260,
		justifyContent: 'center',
	},
	//-------------------------------------
	//Juridique Story
	containerJuridique: {
		height: 260,
		justifyContent: 'center',
	},
	containerDisable: {
		height: 180,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonConnexion: {
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 1,
		borderColor: 'rgb(248,194,28)',
		width: 208,
		height: 53,
		borderRadius: 30,
	},
	textConnexion: {
		color: 'rgb(248,194,28)',
		fontFamily: "ProximaNovaSoft-Regular",
		fontSize: 16,
	},
	textDelete: {
		marginTop: 38,
		color: 'rgb(137,137,137)',
		fontFamily: "ProximaNovaSoft-Regular",
		fontSize: 16,
	},
	//-------------------------------------
};
