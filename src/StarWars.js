import React from "react";
import "./StarWars.css";

class FilmItemRow extends React.Component {
  render() {
    return (
      <li>
        <a href={this.props.url} target="_blank" rel="noopener noreferrer">
          {this.props.url}
        </a>
      </li>
    );
  }
}

class StarWars extends React.Component {
  constructor() {
    super();
    this.state = {
      loadedCharacter: false,
      name: null,
      height: null,
      homeworld: null,
      films: [],

      homeworldName: null,
    };
  }

  getNewCharacter() {
    const randomNumber = Math.round(Math.random() * 82);
    const url = `https://swapi.dev/api/people/${randomNumber}/`;
    fetch(url)
      .then((responce) => responce.json())
      .then((data) => {
        this.setState(
          {
            loadedCharacter: true,
            name: data.name,
            height: data.height,
            homeworld: data.homeworld,
            films: data.films,
          },
          this.fetchHomeWorld
        );
      });
  }

  fetchHomeWorld() {
    fetch(this.state.homeworld)
      .then((responce) => responce.json())
      .then((data) => {
        this.setState({
          homeworldName: data.name,
        });
      });
  }

  render() {
    const movies = this.state.films.map((film, i) => {
      return <FilmItemRow key={i} url={film} />;
    });

    return (
      <div>
        {this.state.loadedCharacter && (
          <div>
            <h1>{this.state.name}</h1>
            <p>Height: {this.state.height} cm</p>
            <p>
              <a
                href={this.state.homeworld}
                target="_blank"
                rel="noopener noreferrer"
              >
                {this.state.homeworldName}
              </a>
            </p>
            <ul>{movies}</ul>
          </div>
        )}
        <button
          type="button"
          onClick={() => this.getNewCharacter()}
          className="btn"
        >
          Randomize Character
        </button>
      </div>
    );
  }
}

export default StarWars;
