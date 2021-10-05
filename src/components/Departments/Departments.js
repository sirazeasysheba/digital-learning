import React from 'react';
import Navigation from '../Navbar/Navigation';
import Footer from '../Footer/Footer';
import CourseDetails from './CourseDetails';
import { useParams } from 'react-router';
import graphic from '../../media/GD.jpg';
import dgm from '../../media/dgm.jpg';
import web from '../../media/web.jpg';
import content from '../../media/content.jpg';


const Departments = () => {
    const courseInfo= [
        {
            id:1,
            title: 'web development',
            name: 'web-development',
            img: web,
            duration: 96,
            weekend: 32,
            regular: 24,
            price: 2200,
            description: `In this course, you will learn how to apply concepts from 
            interaction design and human-computer 
            interaction in order to design and 
            build an interactive,
             professional-looking website. 
             You will learn how to make your web 
             page designs adapt to different 
             screen sizes using responsive grid 
             layouts. You will learn how to add 
             navigation and other design elements, 
             and you will learn how to separate 
             data and display using JavaScript 
             objects and templates. You’ll also 
             learn about jQuery plugins and basic 
             Word Press Theme Customization.`
        },
        {
            id:2,
            title: 'content writing',
            name: 'content-writing',
            img: content,
            duration: 96,
            weekend: 32,
            regular: 24,
            price: 2200,
            description: `In this course, you will learn how to apply concepts from 
            interaction design and human-computer 
            interaction in order to design and 
            build an interactive,
             professional-looking website. 
             You will learn how to make your web 
             page designs adapt to different 
             screen sizes using responsive grid 
             layouts. You will learn how to add 
             navigation and other design elements, 
             and you will learn how to separate 
             data and display using JavaScript 
             objects and templates. You’ll also 
             learn about jQuery plugins and basic 
             Word Press Theme Customization.`
        },
        {
            id:3,
            title: 'graphic design',
            name: 'graphic-design',
            img: graphic,
            duration: 96,
            weekend: 32,
            regular: 24,
            price: 2200,
            description: `In this course, you will learn how to apply concepts from 
            interaction design and human-computer 
            interaction in order to design and 
            build an interactive,
             professional-looking website. 
             You will learn how to make your web 
             page designs adapt to different 
             screen sizes using responsive grid 
             layouts. You will learn how to add 
             navigation and other design elements, 
             and you will learn how to separate 
             data and display using JavaScript 
             objects and templates. You’ll also 
             learn about jQuery plugins and basic 
             Word Press Theme Customization.`
        },
        {
            id:4,
            title: 'digital marketing',
            name: 'digital-marketing',
            img: dgm,
            duration: 96,
            weekend: 32,
            regular: 24,
            price: 2200,
            description: `In this course, you will learn how to apply concepts from 
            interaction design and human-computer 
            interaction in order to design and 
            build an interactive,
             professional-looking website. 
             You will learn how to make your web 
             page designs adapt to different 
             screen sizes using responsive grid 
             layouts. You will learn how to add 
             navigation and other design elements, 
             and you will learn how to separate 
             data and display using JavaScript 
             objects and templates. You’ll also 
             learn about jQuery plugins and basic 
             Word Press Theme Customization.`
        },

    ]
    const {name}= useParams();
    const course = courseInfo?.find((course)=> course.name===name);
    console.log(course);
   
    return (
        <div>
            <Navigation/>
            <CourseDetails course={course}/>
            <Footer/>
        </div>
    );
};

export default Departments;