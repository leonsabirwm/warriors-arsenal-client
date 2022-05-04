import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='QNA-section'>
            <div className='portion-one'>
                <div className='section-title answer'>
                    <h1 className='text-5xl'><span className='text-sky-500'>QNA</span> <span className='text-green-500'>Section</span></h1>
                    <div className='circle bg-sky-500'>
                    </div>
                </div>
                <div className='answer'>
                    <h2 className='text-2xl'>Difference between JavaScript and NodeJS?</h2>
                    <div className='text-base my-3'>
                      <ul>
                        <li>JavaScript a scripting language classified as high level language that uses the concept of Oops but it is based on protype inheritance and NodeJS is a cross platform and opensource JavaScript runtime that allows the JavaScript to be run on the server side.</li>
                        <li>
                          JavaScript is capable of DOM manipulation and Node JS does not have capability to add html element.
                        </li>
                        <li>
                          JavaScript is used for frontend development and NodeJS is used for the server side development.
                        </li>
                        <li>
                          Any browser engine can run JavaScript,on cotarary NodeJS V8 engine parses and runs JavaScript.
                        </li>
                      </ul>
                    </div>
                </div>
            </div>
            <div className='portion-two'>
            <div className='answer'>
                    <h2 className='text-2xl'>When you should use NodeJS and MongoDB?</h2>
                    <div className='text-base my-3'>
                    <span className='text-decoration-underline fs-5'>NodeJS:</span>
                    <p>With the help of NodeJS we can create server side and as we for client end JavaScript frameworks is the best choice out there we can easily make a full stack website in a short period of time by learning one language.If we are doing non blocking operation and does not have heavy algorithm/Job which consumes lots of CPU cycles,then it is convinient to use NodeJS for server.When making system which put emphasis on concurrency and speed NodeJS can be used.</p>
                    </div>
                    <div className='text-base my-3'>
                    <span className='text-decoration-underline fs-5'>MongoDB:</span>
                    <p>When we need easy scalibility for you database then MongoDB is the best one for you because,it provides easy scalability via sharding(Sharding is a method for distributing data across multiple machines).If you are familliar with JavaScript the JSON-like document formats in MongoDB will be a peice of cake for you to work with.When we need ACID transaction for a single document we can consider using this database.</p>
                    </div>
                    
             </div> 
                
                <div className='answer'>
                    <h2 className='text-2xl'>Diffrence between SQL and NoSQL database?</h2>
                    <div className='text-base my-3'>
                      <ul>
                        <li>
                        SQL Databases are known as Relational Database Management System (RDBMS) and NoSQL databases are categorized as Non-relational or distributed database system.
                        </li>
                        <li>
                        SQL databases are vertically scalable and	NoSQL databases are horizontally scalable.
                        </li>
                        <li>
                        SQL databases require a fixed predefined schema, and all data must follow a similar structure.In turn, NoSQL databases follow a dynamic schema for unstructured data. 
                        </li>
                        <li>
                        Relational (SQL) databases use a rigid structure of tables with columns and rows.In contrast,there is not one type of NoSQL database. There are many different schemas, from key-value stores, to document stores, graph databases, time series databases and wide-column stores. Some NoSQL systems also support “multi-model” schemas, meaning they can support more than one data schema internally.
                        </li>
                      </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;