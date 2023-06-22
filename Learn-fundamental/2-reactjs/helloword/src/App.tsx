import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Card } from './components/card';

const people = [
  {title : 'Specialis Mathematician', description: 'Creola Katherine Johnson', image: 'https://img.freepik.com/free-photo/real-people-natural-portrait-happy-guy-smiling-laughing-looking-upbeat-camera-standing-glasses-white-background_1258-65662.jpg?w=740&t=st=1687401507~exp=1687402107~hmac=6317c397f9f782e51d0f07b4c8a244719f55563aefad644fdf95bb0fb7a98412' },
  {title : 'Chemist', description: 'Mario José Molina-Pasquel Henríquez', image: 'https://img.freepik.com/free-photo/image-young-asian-business-woman-female-entrepreneur-glasses-holding-tablet-looking-professional-glasses-white-background_1258-89375.jpg?w=740&t=st=1687401446~exp=1687402046~hmac=0e23da2aa0d57b0d43777c3082e70d4b7f754f29e020c4f9ae5cdfadd56ce7b9' },
  {title : 'Physicist', description: 'Mohammad Abdus Salam', image: 'https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=740&t=st=1687401480~exp=1687402080~hmac=9fd04b1a4b5082bf27e0113a40a904d3fe940cf176267d5f551e99763accbde1' },
  {title : 'Chemist', description: 'Percy Lavon Julian', image: 'https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg?w=740&t=st=1687401565~exp=1687402165~hmac=3ba77d256630c38c87dc0a5c4e143863ee24dfc7b39e2ebaf254768c959abb35'},
  {title : 'Astrophysicist', description: 'Subrahmanyan Chandrasekhar', image: 'https://img.freepik.com/free-photo/happy-asian-man-standing-with-arms-crossed-grey-wall_171337-10467.jpg?w=740&t=st=1687401586~exp=1687402186~hmac=98ca11bd4bd629eb7dc4af9a8b8e8ed578672d75391765f23674c9a8c941d3d8'},
  {title : 'Developer', description: 'Mulyadi', image: 'https://img.freepik.com/free-photo/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded_171337-1267.jpg?w=740&t=st=1687401772~exp=1687402372~hmac=4ae01a9bc339c07b1ac63115ca8f1a29e4b9676f7d94aa3463654dbbab994991'}
  
  
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4 className='text-slate-500'>Helloword</h4>
        <div className="bg-indigo-900 text-center py-4 lg:px-4">
        <div className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
          <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">New</span>
          <span className="font-semibold mr-2 text-left flex-auto">Get the coolest t-shirts from our brand new store</span>
          <svg className="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
        </div>
        </div>

        <button className="">
          Touch Me
        </button>
          {
            people.map((person, index) => (<div key={index}><Card image={person.image } description={person.description} title={person.title}/></div>))
          }
      </header>
 </div>
  );
}

export default App;
