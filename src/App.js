import React, { Component } from 'react';
import PostList from './PostList';
import '../src/App.css';
 
class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="card">
                    <PostList/>
                </div>
            </div> 
        );
    }
}
 
export default App;

