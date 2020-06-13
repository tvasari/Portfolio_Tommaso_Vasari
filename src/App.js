import React, { Component, Fragment } from 'react';
import './App.css';
import Parallax from 'parallax-js';
import WorkList from './components/WorkList/WorkList.js'
import Logo from './components/Logo/Logo.js'

import bio from './immagini/bio.png';
	import occupation from './immagini/occupation.png';
		import fullstack from './immagini/fullstack.png';
	import age from './immagini/age.png';
		import a28 from './immagini/28.png';
	import speaks from './immagini/speaks.png';
		import lang from './immagini/itaengspa.png';
	import location from './immagini/location.png';
		import rome from './immagini/rome.png';
import contacts from './immagini/contacts.png';
	import email from './immagini/email.png';
		import email1 from './immagini/email1.png';
	import mobile from './immagini/mobile.png';
		import mobilenumber from './immagini/mobilenumber.png';
	import github from './immagini/github.png';
	import linkedin from './immagini/linkedin.png';
import works from './immagini/works.png';
import resume from './immagini/resume.png';
import background from './immagini/f800px.gif';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			route: 'home',
		}
	}

	doParallax = () => {
		var scene = document.getElementById('scene');
		new Parallax(scene);
	}

	changeRoute = (route) => {
		this.setState({route: route})
	}

	emailMe = () => {
		window.location.href = "mailto:tommaso.vsr@gmail.com"
	}

	componentDidMount() {
		this.doParallax();
	}

	componentDidUpdate() {
		this.doParallax();
	}

	render() {
		const { route } = this.state;
		switch(route) {

			case 'home': return (
			    <Fragment>
			    	<img src={background} alt='' className='bg'/>
					<ul id="scene" data-pointer-events="all">
						<li onClick={(e) => this.changeRoute('bio')} className='layer no-logo' data-depth='0.7'>
							<div className='box-img'>
								<img src={bio} alt='' className='click bio side-img msi'/>
							</div>
						</li>
						<li onClick={(e) => this.changeRoute('contacts')} className='layer no-logo' data-depth='0.7'>
							<div className='box-img'>
								<img src={contacts} alt='' className='click contacts side-img msi'/>
							</div>
						</li>
						<Logo route={route}/>
						<li onClick={(e) => this.changeRoute('works')} className='layer no-logo' data-depth='0.7'>
							<div className='box-img'>
								<img src={works} alt='' className='click works side-img msi'/>
							</div>
						</li>
						<li onClick={(e) => this.changeRoute('resume')} className='layer no-logo' data-depth='0.7'>
							<div className='box-img'>
								<img src={resume} alt='' className='click resume side-img msi'/>
							</div>
						</li>
					</ul>
			    </Fragment>
  			);

  			case 'bio': return (
			    <Fragment>
			    	<img src={background} alt='' className='bg'/>
					<ul id="scene" data-pointer-events="all">
						<li className='layer side-layer no-logo' data-depth='0.7'>
							<div className='box-img'>
								<img src={location} alt='' className='side-img info-img-top msi location'/>
								<div className='mini-box'>
									<img src={rome} alt='' className='side-img info-img-bot'/>
									<div className='search rome'></div>
								</div>
							</div>
						</li>
						<li className='layer side-layer no-logo' data-depth='0.7'>
							<div className='box-img'>
								<img src={age} alt='' className='side-img info-img-top msi'/>
								<div className='mini-box'>
									<img src={a28} alt='' className='side-img info-img-bot'/>
									<div className='search a28'></div>
								</div>
							</div>						
						</li>
						<Logo route={route} changeRoute={this.changeRoute}/>
						<li className='layer side-layer no-logo' data-depth='0.7'>
							<div className='box-img'>
								<img src={occupation} alt='' className='side-img info-img-top msi occupation'/>
								<div className='mini-box'>
									<img src={fullstack} alt='' className='side-img info-img-bot fullstack'/>
									<div className='search fullstack'></div>
								</div>
							</div>						
						</li>
						<li className='layer side-layer no-logo' data-depth='0.7'>
							<div className='box-img'>
								<img src={speaks} alt='' className='side-img info-img-top msi speaks'/>
								<div className='mini-box'>
									<img src={lang} alt='' className='side-img info-img-bot lang'/>
									<div className='search lang'></div>
								</div>
							</div>							
						</li>
					</ul>
			    </Fragment>
  			);

  			case 'contacts': return (
			    <Fragment>
			    	<img src={background} alt='' className='bg'/>
					<ul id="scene" data-pointer-events="all">
						<li className='layer no-logo' data-depth='0.7'>
							<div className='box-img'>
								<a href='https://github.com/tvasari'>
									<img src={github} alt='' className='side-img info-img-top msi'/>
								</a>
							</div>							
						</li>
						<li className='layer no-logo' data-depth='0.7'>
							<div className='box-img'>
								<a href='https://www.linkedin.com/in/tommaso-vasari-0ba8721a5/'>
									<img src={linkedin} alt='' className='side-img info-img-top msi'/>
								</a>
							</div>								
						</li>						
						<Logo route={route} changeRoute={this.changeRoute}/>						
						<li className='layer no-logo' data-depth='0.7'>
							<div className='box-img'>
								<img src={email} alt='' className='side-img msi info-img-top email'/>
								<div className='mini-box'>
									<img onClick={e => this.emailMe()} src={email1} alt='' className='email1 click side-img info-img-bot'/>
									<div className='search email1'></div>
								</div>
							</div>	
						</li>						
						<li className='layer no-logo' data-depth='0.7'>
							<div className='box-img'>
								<img src={mobile} alt='' className='side-img msi info-img-top mobile'/>
								<div className='mini-box'>
									<a href='tel:+39 3426822422'>
										<img src={mobilenumber} alt='' className='side-img info-img-bot'/>
										<div className='search mobilenumber'></div>
									</a>
								</div>
							</div>								
						</li>
					</ul>
			    </Fragment>
  			);

  			case 'works': return (
			    <Fragment>
			    	<img src={background} alt='' className='bg'/>			    
					<WorkList route={this.state.route} changeRoute={this.changeRoute}/>
			    </Fragment>
  			);

  			default: return (
			    <Fragment>
			    	<img src={background} alt='' className='bg'/>
					<ul id="scene" data-pointer-events="all">
						<li onClick={(e) => this.changeRoute('bio')} className='layer no-logo' data-depth='0.7'>
							<div className='box-img'>
								<img src={bio} alt='' className='click bio side-img msi'/>
							</div>
						</li>
						<li onClick={(e) => this.changeRoute('contacts')} className='layer no-logo' data-depth='0.7'>
							<div className='box-img'>
								<img src={contacts} alt='' className='click contacts side-img msi'/>
							</div>
						</li>
						<Logo route={route}/>
						<li onClick={(e) => this.changeRoute('works')} className='layer no-logo' data-depth='0.7'>
							<div className='box-img'>
								<img src={works} alt='' className='click works side-img msi'/>
							</div>
						</li>
						<li onClick={(e) => this.changeRoute('resume')} className='layer no-logo' data-depth='0.7'>
							<div className='box-img'>
								<img src={resume} alt='' className='click resume side-img msi'/>
							</div>
						</li>
					</ul>
			    </Fragment>
  			);
		}
	}
}

export default App;
