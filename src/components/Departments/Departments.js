import React from "react";
import CourseDetails from "./CourseDetails";
import { useParams } from "react-router";
import graphic from "../../media/GD.jpg";
import dgm from "../../media/dgm.jpg";
import web from "../../media/RWD.jpg";
import content from "../../media/content.jpg";

const Departments = () => {
  const courseInfo = [
    {
      id: 1,
      title: "responsive web design",
      name: "web-development",
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
             Word Press Theme Customization.`,
      module: `Introduction of Website.
      Introduction with HTML.
      Creating web layout using HTML & CSS.
      Single page website concept.
      Sign in & Sign up page with navbar.
      Responsive Page using media query.
      CSS3 effects & implementation.
      Multipage website creation.
      Introduction with Bootstrap & responsive web design.
      Responsive single page website creation.
      One page responsive design with navbar & carousel.
      Adding Bootstrap JavaScript components.
      PSD to Responsive Website Creation (Using Html, CSS & Bootstrap).
      Introduction with JavaScript (Syntax, Variable, Expression & Condition).
      Implementing JavaScript on Website.
      jQuery Effects & Uses.
      jQuery Plugins Integration in Website.
      Introduction with WordPress & Installation.
      Creating Landing Page using Paid Theme.
      Full Theme Customization.
      Form Creation & Integration Using Mail Chimp.
      Post Sharing Method.
      How To Create A eCommerce Website.
      eCommerce Website With Premium Theme.
      Marketplace Class (Fiverr).
      Marketplace Class (Own Branding/SEO).
      Marketplace Class (Upwork ).
      Marketplace Class (Freelancer)`,
      objective: `Create HTML layout.
      Create a sign in and sign up a page with a navigation bar.
      Make Multipage website.
      Make PSD to Responsive Design.
      Understand and be able to apply media queries and breakpoints.
      Add responsive jQuery plugins such as sliding carousels and social share buttons.
      Create Landing Page.
      Create E-commerce website.
      Full Theme customization.
      Build a responsive website from scratch or by using Bootstrap.
      Create HTML layout.
      Make Multipage website.
      Make PSD to Responsive Design.
      Understand and be able to apply media queries and breakpoints.
      Add responsive jQuery plugins such as sliding carousels and social share buttons.
      Create Landing Page.
      Create an E-commerce website with a premium Wp theme.
      Full Theme customization.
      Build a responsive website from scratch or by using a Bootstrap`,
      highlight: `
      HTML 5, CSS 3, JQuery, JavaScript, Bootstrap, WordPress.
       Students will receive language training appropriate for Freelance markets places and international client communication.
       The student will be able to develop full websites, including
       responsive (mobile friendly)
       landing pages.
       Students will be able to create HTML email templates.
       The student will have working experience in all major freelance marketplaces.
       Effective branding as a freelancer.
       Creating an effective 100% complete profile on Freelance marketplaces.
       How to communicate with the client.
       How to bid and win jobs.
       How to manage projects and receive high ratings`,
      software: `Code Editor.
      WordPress.
      Photoshop`,
    },
    {
      id: 2,
      title: "content writing",
      name: "content-writing",
      img: content,
      duration: 96,
      weekend: 32,
      regular: 24,
      price: 2200,
      description: `In any business environment, Content is considered to be the King. Irrespective of business, services, products, ideas, concepts, views, news, initiatives and other business-related aspects need to be explained well to the targeted clients. They need to be promoted effectively among the prospective audience. For doing so, content is required in the most comprehensive manner. Content Writing is the process in which content is developed for various business needs such as blogs, websites, public relations, brochures, and social media`,
      module: `Web content writing.
      Technical Writing.
       Creative Writing.
       Research Writing.
       Scientific Writing.
       Copy writing.
       Travel Writing.
       Medical Writing.
       Article Writing.
       Blog Post Writing.
       Web Copy writing.
       Press Release Writing.
       Classified Writing`,
      objective: `Understand the impact of the business objectives and promotional messages.
      Adopt tested techniques for effective content writing.
      Understand the impact of mass media promotion.
      Differentiate content development for different media purposes`,
      highlight: `
        What is content.
      Types of content.
      Understand the realities of content writing.
     Content writing and its opportunities.
      Content Writing as a Career`,
      software: `Grammarly`,
    },
    {
      id: 3,
      title: "graphic design",
      name: "graphic-design",
      img: graphic,
      duration: 96,
      weekend: 32,
      regular: 24,
      price: 2200,
      description: `Graphic design is all around us, in a myriad of forms, both on-screen and in print, yet it is always made up of images and words to create a communication goal. This course sequence exposes students to the fundamental skills required to make a sophisticated graphic design: process, historical context, and communication through image-making and typography.`,
      module: `Introduction to Graphics Design
      Basic Tools. Adobe illustrator introduction, tools function and freehand design.
      A complete Business Card Design session.
      A complete Flyer Design session.
      A complete Logo Design session.
      A complete Vector Tracing session.
      Session on Logo Design Concept Development.
      Session on Roll up Banner and Banner Design.
      A complete Stationery session.
      Photoshop Basic Tools.
      A complete Retouch Image Session.
      A complete Brush Tools Session.
      A complete Pen Tools Session.
      A complete Session on Masking.
      Getting Familiar with UI/UX Design A complete Session on Mobile UI Design.
      A complete Session on Web Template Design`,
      objective: `Use different illustrator tools and functions.
      Complete different designs including business cards, flyer, logo, etc.
      Use layer management, Masking, Retouching techniques and various color management tools.
      Complete designs of PSD web template and Dashboard UI design`,
      highlight: `
      Latest version of Adobe Illustrator.
      Latest version of Adobe Photoshop.
      Students will learn how to create professional Logo & Brand Design, Corporate Identity Package Design (Business Card, Letterhead, Envelop, Post Card) , Flyer, Poster, Brochure, Book Cover etc.
      After completing the course Student will receive a certificate that will help upgrading profile both in local and freelancing marketplaces.
      Effective branding as a freelancer.
      Creating an effective 100% complete profile on Freelance market places.
      How to communicate with the client.
      How to bid and win jobs.
      How to manage projects and receive high ratings`,
      software: `Adobe Illustrator (Latest Version).
      Adobe Photoshop (Latest Version)`,
    },
    {
      id: 4,
      title: "digital marketing",
      name: "digital-marketing",
      img: dgm,
      duration: 96,
      weekend: 32,
      regular: 24,
      price: 2200,
      description: `This Digital Marketing Training Program provides a detailed understanding of Digital Marketing concepts, strategies, and implementation, including planning a website, website promotion, email and Search Engine Optimization (SEO) campaigns, and integrating digital marketing with traditional marketing.`,
      module: `Overview Of Digital Marketing.
      Facebook Business Page.
      Facebook Advertising 1.
      Facebook Advertising 2.
      Facebook Advertising 3.
      Facebook Retargeting.
      SEO Overview.
      All about Website.
      Content Strategy.
      Complete On Page SEO using Yoast/Rank Math plugin.
      Technical SEO 1.
      Technical SEO 2.
      OFF Page SEO 1.
      OFF Page SEO 2.
      Local SEO.
      YouTube Introduction.
      YouTube Channel.
      YouTube Video.
      Instagram Overview.
      Google Ads 1.
      Google Ads 2.
      E-mail Marketing.
      LinkedIn Marketing`,
      objective: `Planning & Executing Digital Marketing Campaigns for Businesses.
      Undertake Social Media Marketing.
      Create and manage Facebook, Instagram, Linkedin & Google Ad Campaign.
      Undertake YouTube Marketing.
      Use Google Analytics & Google Tag Manager.
      Undertake Email Marketing.
      Undertake Technical, On-Page & Off-Page SEO`,
      highlight: `
      Basics of Marketing.
Comparison of Traditional and Digital Marketing.
Statistics of Digital Marketing.
Benefits of Digital marketing.
Latest Digital marketing trends.
Digital marketing platforms.
Digital Marketing strategy for websites.
Career opportunities in digital marketing.
Student will be instructed on the fundamentals of freelancing market place`,
      software: `Grammarly Lightshot Screenshot Canva.
      Facebook Creator Studio.
      Facebook Business Manager(Event Manager, Commerce Manager).
      Facebook Business Suit.
      Google Keyword Planner For Google Ads.
      SEMRUSH/AHRFs/other Tools For SEO.
      Tubebuddy, Wordtracker For Youtube Marketing.
      MailChimp, Email Extractors, Email Verifier for Email Marketing`,
    },
  ];
  const { name } = useParams();
  const course = courseInfo?.find((course) => course.name === name);

  return (
    <div>
      <CourseDetails course={course} />
    </div>
  );
};

export default Departments;
