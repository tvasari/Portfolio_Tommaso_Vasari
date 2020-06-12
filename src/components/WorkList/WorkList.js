import React, { Component } from 'react';
import Parallax from 'parallax-js';
import Mywork from '../Mywork/Mywork.js';
import mywork1 from '../../immagini/Mywork1.png';
import mywork2 from '../../immagini/Mywork2.png';
import home from '../../immagini/home.png';

const db = [
	{
		titolo: 'Brain Rekon',
		paragrafo: `Face recognition application with back-end functionalities. 
								After registration, the user can detect a face on an image by submitting the image URL. 
								Registered users are stored in a database which remembers the number of times a user made a search. 
								The project was built using React.js for the front-end and node/express.js for the server side.`,
		immagine: mywork1,
		appLink: 'https://brain-reckon.herokuapp.com',
		frontLink: 'https://github.com/tvasari/brain_reckon',
		backLink: 'https://github.com/tvasari/brain_reckon_api'
	},
	{
		titolo: 'Artwork Gallery Giuseppe Gnozzi',
		paragrafo: "Sito web concettuale per l'artista astratto Giuseppe Gnozzi.",
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
			route: this.props.route
		}
	}

	doParallax = () => {
		var scene = document.getElementById('scene');
		new Parallax(scene);
	}

	componentDidMount() {
		this.doParallax();
	}

	render() {
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
								paragrafo={work.paragrafo}
								immagine={work.immagine}
								appLink={work.appLink}
								frontLink={work.frontLink}
								backLink={work.backLink}/>
					})
				}
				</li>
			</ul>
		);
	};
}

export default WorkList;