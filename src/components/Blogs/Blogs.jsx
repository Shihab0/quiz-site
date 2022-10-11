import React from 'react';

const Blogs = () => {
    return (
        <div className=' bg-slate-100 p-7 min-h-screen'>
            <div className='text-left'>
                <h3 className='font-bold text-xl'>1. What is the purpose of react router?</h3>
                <p className='font-bold my-1 mx-5 text-gray-600'>Ans: React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.It's a tool that allows you to handle routes in a web app, using dynamic routing. Dynamic routing takes place as the app is rendering on your machine, unlike the old routing architecture where the routing is handled in a configuration outside of a running app. React router implements a component-based approach to routing.</p>
            </div>
            <div className='text-left mt-9'>
                <h3 className='font-bold text-xl'>2. how does context api work?</h3>
                <p className='font-bold my-1 mx-5 text-gray-600'>Ans: The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so. <br/> React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. </p>
            </div>
            <div className='text-left mt-9'>
                <h3 className='font-bold text-xl'>3. What is useRef?</h3>
                <p className='font-bold my-1 mx-5 text-gray-600'>Ans: useRef if a react hook. useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.<br/> It give us a easy way to access dom manipulation. Use useRef if you need to manage focus, text selection, trigger imperative animations or integrating third-party libraries.</p>
            </div>
        </div>
    );
};

export default Blogs;