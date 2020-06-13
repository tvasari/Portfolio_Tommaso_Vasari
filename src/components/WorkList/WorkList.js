import React, { Component } from 'react';
import Parallax from 'parallax-js';
import Mywork from '../Mywork/Mywork.js';
import mywork1 from '../../immagini/Mywork1.png';
import mywork2 from '../../immagini/Mywork2.png';
import home from '../../immagini/home.png';

const db = [
	{
		titolo: 'Brain Rekon',
		paragrafoEng: `Face recognition application with back-end functionalities. 
			    After registration, the user can detect a face on an image by submitting the image URL. 
			    Registered users are stored in a database which remembers the number of times a user made a search. 
			    The project was built using React.js for the front-end and node/express.js for the server side.`,
    paragrafoIta: `Applicazione per il riconoscimento facciale con funzionalità di back-end.
    			Dopo essersi registrato l'utente sarà capace di individuare un volto in un'immagine inserendo l'URL di questa nella barra di ricerca e cliccando detect.
    			Gli utenti registrati vengono memorizzati in un database il quale ricorda il numero di volte che l'utente effettua una ricerca.
    			Il progetto è stato realizzato usando React.js per il front-end e node/express.js per il lato server.`,
		immagine: mywork1,
		appLink: 'https://brain-reckon.herokuapp.com',
		frontLink: 'https://github.com/tvasari/brain_reckon',
		backLink: 'https://github.com/tvasari/brain_reckon_api'
	},
	{
		titolo: 'Giuseppe Gnozzi Official Website',
		paragrafoEng: `Conceptual website to display artist Giuseppe Gnozzi's abstract and street art. 
					The "Home" and "Works" pages are completley explorable by dragging them and in the "Works" page a click on any image will display a bigger version of it with its specifics. 
					On top of that, for a better user experience, the searchbar allows to display only the desired paintings by filtering them depending on the typed letters and the pictures's tags.`,
		paragrafoIta: `Sito web concettuale per mostrare l'arte astratta e street art dell'artista Giuseppe Gnozzi.
					Le pagine "Home" e "Works" sono completamente esplorabili cliccando e trascinando la pagina e in "Works" cliccando su di un'immagine qualsiasi si aprirà una più grande versione di essa accompagnata dalle sue proprietà.
					Inoltre la barra di ricerca permette di filtrare le immagini mostrando solo i dipinti desiderati in base alle lettere inserite e la loro corrispondenza nelle tag delle immagini.`,
		immagine: mywork2,
		appLink: 'https://gggnz.herokuapp.com/',
		frontLink: 'https://github.com/tvasari/gggnz',
		backLink: 'https://github.com/tvasari/gggnz_api'
	}
];


class WorkList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			route: this.props.route,
			paragrafoIsEng: true
		}
	}

	changeLang = () => {
		this.state.paragrafoIsEng === true ? 
		this.setState({paragrafoIsEng: false}) :
		this.setState({paragrafoIsEng: true})
	}

	doParallax = () => {
		var scene = document.getElementById('scene');
		new Parallax(scene);
	}

	componentDidMount() {
		this.doParallax();
	}

	render() {
		const { paragrafoIsEng } = this.state;
		return(
			<ul id='scene' className='overflow-auto' data-pointer-events="all">
				<li onClick={(e) => this.props.changeRoute('home')} className='layer ml4 mt4 mb4' style={{width: '14vw', 'grid-column-start': 'span 2',}} data-depth='0.3'>
					<img src={home} alt='' className='click'/>
				</li>
				<li className='layer' data-depth='0.2'>
				{
					db.map(work => {
						return <Mywork
								key={work.appLink}
								titolo={work.titolo}
								paragrafo={paragrafoIsEng === true ? work.paragrafoEng : work.paragrafoIta}
								immagine={work.immagine}
								appLink={work.appLink}
								frontLink={work.frontLink}
								backLink={work.backLink}
								changeLang={this.changeLang}
								paragrafoIsEng={paragrafoIsEng}/>
					})
				}
				</li>
			</ul>
		);
	};
}

export default WorkList;
