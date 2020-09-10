import React, { Component, Fragment } from 'react';
import Parallax from 'parallax-js';
import Mywork from '../Mywork/Mywork.js';
import mywork1 from '../../immagini/Mywork1.png';
import mywork2 from '../../immagini/Mywork2.png';
import mywork3 from '../../immagini/Mywork3.png';
import home from '../../immagini/home.png';

const db = [
  {
		titolo: 'Italiana Mense Gestionale',
		paragrafoEng: (
      <Fragment>
        <p>Management web application (CRM) for Italiana Mense Srl developed using React.js and Material-UI, one of the most popular component frameworks for React.</p>
        <p>
          At the moment the application is static, the back end is under development. 
          The project is structured so that data can be entered, read, updated and deleted (CRUD) by checking permissions through a hierarchical structure of users in order to protect the integrity of the data. 
          Except on the login and registration pages, there is constantly a sidebar for navigation that allows access to all operational areas of the application:
        </p>
        <ol style={{listStyle: 'square'}}>
          <li>Attendance history</li>
          <li>Menu, Costs per Meal and Menu Summary per Month</li>
          <li>In the “Ristorazione” section, it is possible to register and manage the dishes and ingredients with related information</li>
          <li>In the "Magazzino" section it is possible to register a new warehouse, check the current inventory and view a history. 
            To update the stocks, a delivery note must be added, it will be possible to review the delivery notes in their dedicated history. 
            At the end of each month a summary document will be drawn up for the remaining stock for the month</li>
          <li>Statistics</li>
        </ol>
      </Fragment>
    ),
    paragrafoIta: (
      <Fragment>
        <p>Applicazione web gestionale (CRM) per Italiana Mense Srl sviluppata utilizzando React.js e Material-UI, uno dei più popolari framework di componenti  per React.</p>
        <p>
          Al momento l’applicazione è in versione statica, il back end è in fase di sviluppo.
          Il progetto è strutturato in modo che i dati possano essere inseriti, letti, aggiornati e cancellati (CRUD)  controllando i permessi attraverso una struttura gerarchica degli utenti al fine di proteggere l’integrità dei dati.
          Eccetto che nelle pagine di accesso e registrazione, è costantemente presente una barra laterale per la navigazione che permette l'accesso a tutte le aree operative dell’applicazione:
        </p>
        <ol style={{listStyle: 'square'}}>
          <li>Storico delle presenze</li>
          <li>Menù, Costo Pasto e Sintesi Menù per Mese</li>
          <li>Nella sezione “Ristorazione”,  è possibile registrare e gestire i piatti e gli ingredienti con le relative informazioni</li>
          <li>Nella sezione “Magazzino “ è possibile registrare un nuovo magazzino, controllare le scorte attuali e vedere uno storico.
          Per aggiornare le scorte si dovrà aggiungere un DDT, sarà possibile riesaminare i DDT in un loro storico dedicato. Alla fine di ogni mese verrà elaborato un documento di riepilogo per le rimanenze del mese</li>
          <li>Statistiche</li>
        </ol>
      </Fragment>
    ),
		immagine: mywork3,
		appLink: 'https://tvasari.github.io/italiana_mense_gestionale',
		frontLink: 'https://github.com/tvasari/italiana_mense_gestionale',
		backLink: 'https://github.com/tvasari/italiana_mense_gestionale_api'
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
		appLink: 'https://giuseppegnozzi.xyz',
		frontLink: 'https://github.com/tvasari/gggnz',
		backLink: 'https://github.com/tvasari/gggnz_api'
	},
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
		appLink: 'https://brain-rekon.herokuapp.com',
		frontLink: 'https://github.com/tvasari/brain_reckon',
		backLink: 'https://github.com/tvasari/brain_reckon_api'
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
