import React from 'react';
import {
    Link,
    Switch,
    Route
} from 'react-router-dom';
import './App.css';

import Post1 from './Post1';

const Posts = () => {
    return (
        <>
            <div className="posts">
                <h2>Hello? yeah not much here yet. More coming soon!</h2>
                <div className="postSummary">
                    <Link className="postLink" to="/post1">Some awesome blog title</Link>
                    <p>7 January, 2021</p>
                    <p>some summary about a particular post idea or whatever.</p>
                </div>
                <div className="postSummary">
                    <Link className="postLink" to="/post1">Another awesome blog title</Link>
                    <p>8 January, 2021</p>
                    <p>some cool description lol.</p>
                </div>
                <div className="postSummary">
                    <Link className="postLink" to="/post1">Final awesome blog title</Link>
                    <p>9 January, 2021</p>
                    <p>idea or whatever.</p>
                </div>
            </div>
        </>);
}

// Nice little header
// subtitle                                             posts
//                    nice centered line break

//                      Centered content

function App() {
  return (
    <>
        <div className="header">
        <div className="headerText">
            <h1>{'{ caleb.blog }'}</h1> 
            <p>Potatoes from Idaho</p>
        </div>
        <Link className="postsLink" to="/">posts</Link>
        </div>
        <hr/>
        <Switch>
            <Route path="/post1">
                <Post1/>
            </Route>
            <Route path="/">
                <Posts/>
            </Route>
        </Switch>
        <div className="footer">
            Boring footer stuff
        </div>
    </>
  );
}

export default App;
