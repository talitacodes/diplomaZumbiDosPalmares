import React, { useContext } from 'react';
import Person from './Person';
import { PeopleListContext } from '../../context/PeopleListProvider';
import './Home.css';
import Title from '../Title/Title';

const Home = () => {

  const { peopleList } = useContext(PeopleListContext);

    return(
      <>
        <Title title="Homenageados"/>
        <div className='homeContent' style={{columnCount: 3}}>
          {peopleList.map((person) => {
            return (
              <div className='Home'>
                
                <Person key={person.id} person={person}/>
              </div>
            );
          })}
        </div>
      </>
    );
};

export default Home;