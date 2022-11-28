import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="px-7 mb-8">
                <h1 className='text-xl font-semibold text-primary'>What are the different ways to manage a state in a React application?</h1>
                <p>There are four main types of state you need to properly manage in your React apps:<br></br>
                    1.Local state <br />
                    2.Global state <br />
                    3.Server state <br />
                    4.URL state</p>
                <span className='font-bold'>Local (UI) state –</span> Local state is data we manage in one or another component.
                Local state is most often managed in React using the useState hook.
                For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.
                <p><span className='font-bold'>Global (UI) state –</span> Global state is data we manage across multiple components.
                    Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
                    A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.
                    Sometimes state we think should be local might become global.</p>
                <p><span className='font-bold'>Server state –</span> Data that comes from an external server that must be integrated with our UI state.Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.
                    Fortunately there are tools such as SWR and React Query that make managing server state much easier.</p>
                <p><span className='font-bold'>URL state –</span> Data that exists on our URLs, including the pathname and query parameters.
                    URL state is often missing as a category of state, but it is an important one.In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.</p>
            </div>
            <div className="px-7 mb-8">
                <h1 className='text-xl font-semibold text-primary'>How does prototypical inheritance work?</h1>
                <p>JavaScript is a bit confusing for developers experienced in class-based languages (like Java or C++), as it is dynamic and does not have static types.

                    When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain. It is possible to mutate any member of the prototype chain or even swap out the prototype at runtime, so concepts like static dispatching do not exist in JavaScript.

                    While this confusion is often considered to be one of JavaScript's weaknesses, the prototypical inheritance model itself is, in fact, more powerful than the classic model. It is, for example, fairly trivial to build a classic model on top of a prototypical model — which is how classes are implemented.</p>
            </div>
            <div className="px-7 mb-8">
                <h1 className='text-xl font-semibold text-primary'>What is a unit test? Why should we write unit tests?</h1>
                <p>In computer programming, unit testing is a software testing method by which individual units of source code—sets of one or more computer program modules together with associated control data, usage procedures, and operating procedures—are tested to determine whether they are fit for use.</p><br />
                <p>Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently</p>
            </div>
            <div className="px-7 mb-8">
                <h1 className='text-xl font-semibold text-primary'>React vs. Angular vs. Vue?</h1>
                <p>Facebook released React.js in March 2013 as a JavaScript library. Because React just provides one view, it is not appropriate for building an MVC architecture: you must solve the model and controller yourself. Besides this, there are only advantages and lots of advantages.

                    One of the biggest of them is that React.js uses a virtual DOM that only compares the previous HTML code differences and only loads the different parts. This significantly impacts the loading times. In a positive way, of course.

                    With React.js, you handle the markup and the logic in the same file, which means you can output variables in a view component (JSX). React offers a type of mobile solutions for applications called React-Native.</p><br />
                <p>AngularJS was developed in 2009 by Google. The first version was Angular.JS. Angular is currently known as a JavaScript framework. Obviously, all significant Google projects have been developed with Angular.

                    Angular.js is an MVC framework. A major disadvantage of Angular is that it uses a regular DOM, and thus, the entire tree structure of the HTML tags is updated, which massively impacts the loading time. Angular.js has its Ionic framework for mobile applications.</p><br />
                <p>Vue.js is a JavaScript-based progressive framework for creating single-page applications. It was created with scalability and incrementality in mind, as well as ease of integration with other view layer frameworks.
                    Vue is built from the bottom up to be progressively adaptable, unlike other monolithic frameworks. The core library focuses solely on the view layer, and it’s simple to use and connect with other libraries or applications. This framework’s fast learning angle is almost a trademark. It’s a flexible framework that may be used as a library or a full-fledged framework for developing large web applications.
                    Vue.js combines the useful principles of the Angular and React frameworks and presents them in a minimalistic modern style. Web developers use Vue.js to create frontend user interfaces for web-based and hybrid mobile applications.</p>
            </div>
        </div>
    );
};

export default Blog;