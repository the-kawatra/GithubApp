import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
        <div>
            <form>
                <input type="text" placeholder='Search User'/>
                <input type="submit" className='btn btn-dark btn-block'/>
            </form>
        </div>
    )
  }
}

export default Search