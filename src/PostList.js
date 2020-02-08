import React, { Component } from 'react';
import data from './data';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";

class PostList extends Component {

    state = {
      sortType : 'asc',
    }
    
    onSort = sortType =>{
      this.setState({sortType})
    }
    render () {
      const {sortType} = this.state;
      
      const sorted = data.restaurants.sort( (a, b) =>{
        
        const isReversed = (sortType === 'asc') ? 1 : -1;
        return isReversed * a.name.localeCompare(b.name)
      });
      return (
        <div>
          <button className="button" onClick={()=>this.onSort('asc')}>Aakkosittain</button>
          <button className="button" onClick={()=>this.onSort('desc')}>Aakkoset väärinpäin</button>
          {
            sorted.map((r, i) => {
              return (
                <div key = {i} className = "tiedot">                  
                <Card style={{ width: '400px' }}>
                  <Card.Img variant="top" src={r.image} />
                  <h1>{r.name}</h1>
                  <br></br>
                  <p>{r.description} !</p>
                </Card>
                </div>
            )})
          }
        </div>
      )
    }
  }
  
  export default PostList;