var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny'
  }
];

var MoviesList = React.createClass({
  render: function() {
    return (
      React.createElement('div', {}, 
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
      )
    );
  }
});

var Movie = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    desc: React.PropTypes.string
  },
  render: function() {
    return (
      React.createElement('li', {}, 
        React.createElement(MovieTitle, {title: this.props.title}),
        React.createElement(MovieDescription, {desc: this.props.desc})
      )
    );
  }
});

var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired
  },
  render: function() {
    return React.createElement('h2', {}, this.props.title);
  }
});

var MovieDescription = React.createClass({
  propTypes: {
    desc: React.PropTypes.string
  },
  render: function() {
    return React.createElement('p', {}, this.props.desc);
  }
});

var moviesElements = movies.map(function(movie) {
  return React.createElement(Movie, {
    key: movie.id,
    title: movie.title,
    desc: movie.desc
  });
});

var element = React.createElement(MoviesList);

ReactDOM.render(element, document.getElementById('app'));
