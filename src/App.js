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
		import githublink from './immagini/githublink.png';
	import linkedin from './immagini/linkedin.png';
		import linkedinlink from './immagini/linkedinlink.png';
import works from './immagini/works.png';
import resume from './immagini/resume.png';
import background from './immagini/jungle_background8.jpg';
import lobster from './immagini/lobster.jpg';


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
						<li onClick={(e) => this.changeRoute('bio')} className='layer' data-depth='0.7'>
							<img src={bio} alt='' className='click'/>
						</li>
						<li onClick={(e) => this.changeRoute('contacts')} className='layer' data-depth='0.7'>
							<img src={contacts} alt='' className='click'/>
						</li>
						<Logo route={route}/>
						<li onClick={(e) => this.changeRoute('works')} className='layer' data-depth='0.7'>
							<img src={works} alt='' className='click'/>
						</li>
						<li onClick={(e) => this.changeRoute('resume')} className='layer' data-depth='0.7'>
							<img src={resume} alt='' className='click'/>
						</li>
					</ul>
			    </Fragment>
  			);

  			case 'bio': return (
			    <Fragment>
			    	<img src={background} alt='' className='bg'/>
					<ul id="scene" data-pointer-events="all">
						<li className='layer' data-depth='0.7'>
							<img src={occupation} alt='' />
							<br/>
							<br/>
							<img src={fullstack} alt='' />
						</li>
						<li className='layer' data-depth='0.7'>
							<img src={age} alt='' />
							<br/>
							<br/>
							<img src={a28} alt='' />							
						</li>
						<Logo route={route} changeRoute={this.changeRoute}/>
						<li className='layer' data-depth='0.7'>
							<img src={speaks} alt='' />
							<br/>
							<br/>
							<img src={lang} alt='' />							
						</li>
						<li className='layer' data-depth='0.7'>
							<img src={location} alt='' />
							<br/>
							<br/>
							<img src={rome} alt='' />							
						</li>
					</ul>
			    </Fragment>
  			);

  			case 'contacts': return (
			    <Fragment>
			    	<img src={background} alt='' className='bg'/>
					<ul id="scene" data-pointer-events="all">
						<li className='layer' data-depth='0.7'>
							<img src={email} alt='' />
							{/*<img src={lobster} alt='' className='absolute' style={{left: '-35px'}}/>*/}
							<br/>
							<br/>
							<img onClick={e => this.emailMe()} src={email1} alt='' className='click'/>
						</li>
						<li className='layer' data-depth='0.7'>
							<img src={mobile} alt='' />
							<br/>
							<br/>
							<img src={mobilenumber} alt='' />							
						</li>
						<Logo route={route} changeRoute={this.changeRoute}/>
						<li className='layer' data-depth='0.7'>
							<img src={github} alt='' />
							<br/>
							<br/>
							<a href='https://github.com/tvasari'>
								<img src={githublink} alt='' />
							</a>							
						</li>
						<li className='layer' data-depth='0.7'>
							<img src={linkedin} alt='' />
							<br/>
							<br/>
							<a href='https://www.linkedin.com/in/tommaso-vasari-0ba8721a5/'>
								<img src={linkedinlink} alt=''/>
							</a>							
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
						<li onClick={(e) => this.changeRoute('bio')} className='layer' data-depth='0.7'>
							<img src={bio} alt='' className='click'/>
						</li>
						<li onClick={(e) => this.changeRoute('contacts')} className='layer' data-depth='0.7'>
							<img src={contacts} alt='' className='click'/>
						</li>
						<Logo route={route}/>
						<li onClick={(e) => this.changeRoute('works')} className='layer' data-depth='0.7'>
							<img src={works} alt='' className='click'/>
						</li>
						<li onClick={(e) => this.changeRoute('resume')} className='layer' data-depth='0.7'>
							<img src={resume} alt='' className='click'/>
						</li>
					</ul>
			    </Fragment>
  			);
		}
	}
}

export default App;
