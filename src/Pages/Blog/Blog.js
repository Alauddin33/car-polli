import React from 'react';

const Blog = () => {
    return (
        <>
            <h1 className=' text-orange-900 text-4xl text-center py-8'>FAQ</h1>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className="max-w-md p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
                    <article>
                        <h2 className="text-xl text-blue-700 font-bold">***What are the different ways to manage a state in a React application?</h2>
                        <p className="mt-4 text-green-700">There are four main types of state you need to properly manage in your React apps:<br />

                            1.Local state<br />
                            2.Global state<br />
                            3.Server state<br />
                            4.URL state<br />

                            Local (UI) state: Local state is data we manage in one or another component.
                            <br />
                            Global (UI) state:  Global state is data we manage across multiple components.
                            <br />
                            Server state : Data that comes from an external server that must be integrated with our UI state.
                            <br />
                            URL state : Data that exists on our URLs, including the pathname and query parameters.
                            URL state is often missing as a category of state, but it is an important one.

                        </p>
                    </article>
                </div>

                <div className="max-w-md p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
                    <article>
                        <h2 className="text-xl text-blue-700 font-bold">***How does prototypical inheritance work?</h2>
                        <p className="mt-4 text-green-700">When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain. It is possible to mutate any member of the prototype chain or even swap out the prototype at runtime, so concepts like static dispatching do not exist in JavaScript.</p>
                    </article>
                </div>
                <div className="max-w-md p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
                    <article>
                        <h2 className="text-xl text-blue-700 font-bold">***What is a unit test? Why should we write unit tests?</h2>
                        <p className="mt-4 text-green-700">Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.<br /><br />
                            ** The earlier a problem is identified, the fewer compound errors occur.<br /><br />
                            **Costs of fixing a problem early can quickly outweigh the cost of fixing it later.<br /><br />
                            **Debugging processes are made easier.<br /><br />
                            **Developers can quickly make changes to the code base.<br /><br />
                            **Developers can also re-use code, migrating it to new projects.
                        </p>
                    </article>
                </div>
                <div className="max-w-md p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
                    <article>
                        <h2 className="text-xl text-blue-700 font-bold">***React vs. Angular vs. Vue?</h2>
                        <p className="mt-4 text-green-700">React Elements are the smallest building blocks of React apps. They are more powerful than DOM elements because the React DOM makes sure to update them efficiently whenever something changes.<br />

                            Components are larger building blocks that define independent and reusable pieces to be used throughout the application. They accept inputs called props and produce elements that are then displayed to the user.<br />

                            <br /><br />

                            The Vue.js core library focuses on the View layer only. It’s called a progressive framework because you can extend its functionality with official and third-party packages, such as Vue Router or Vuex, to turn it into an actual framework. <br />

                            Vue’s templating syntax lets you create View components, and it combines familiar HTML with special directives and features. This templating syntax is preferred, even though raw JavaScript and JSX are also supported. <br /><br />

                            AngularJS, the original framework, is an MVC (Model-View-Controller) framework. But in Angular 2, there’s no strict association with MV*-patterns as it is also component-based.

                            Projects in Angular are structured into Modules, Components, and Services. Each Angular application has at least one root component and one root module.<br />

                        </p>
                    </article>
                </div>
            </div>
        </>
    );
};

export default Blog;