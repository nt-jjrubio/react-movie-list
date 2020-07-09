import React from 'react';

class MoviesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: []};
    fetch("http://www.omdbapi.com/?page=10&plot=full&s=fast&apikey=2528cba3")
      .then(res => res.json())
      .then((result) => {
        console.log(result);
        this.setState({movies: result['Search']});
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {


    return (
      <React.Fragment>
        <h1>Lista de peliculas</h1>
        {
          this.state.movies.map((item, index) => {
            return (
              <div key={index}>
                <p >{item['Title']}</p>
                <img src={item['Poster']} />
              </div>
            );
          })
        }
      </React.Fragment>
    )
  }
}

export default MoviesList;