import React from 'react';
import Image from '../Image/Image';
import './Person.css';

const Person = (props) => {
  return (
    <div>
      <div className='Person'>
        <Image imageUrl={props.person.imageUrl} />
        <hr className="solid"/>
        <div className='background-name'><p>{props.person.name} {props.person.birthdate} - {props.person.deathdate}</p>
        
        <p className='bio'>{props.person.bio}</p>
        </div>

       
      </div>
    </div>
  );
};
export default Person;
