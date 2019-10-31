import React from 'react';

export default (props) => (
  <div className="singleDisplay">
        <img src={props.selectedDisplay.Poster}></img>
        <table className="table table-bordered table-responsive">
            <thead>
            <tr>
                <th>Title</th>
                <th>{props.selectedDisplay.Title}</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Actors</td>
                <td>{props.selectedDisplay.Actors}</td>
            </tr>
            <tr>
                <td>Director</td>
                <td>{props.selectedDisplay.Director}</td>
            </tr>
            <tr>
                <td>Genre</td>
                <td>{props.selectedDisplay.Genre}</td>
            </tr>
            <tr>
                <td>Plot</td>
                <td>{props.selectedDisplay.Plot}</td>
            </tr>
            <tr>
                <td>Released</td>
                <td>{props.selectedDisplay.Released}</td>
            </tr>
            <tr>
                <td>Rating</td>
                <td>{props.selectedDisplay.imdbRating}</td>
            </tr>
            </tbody>
        </table>
    </div>
);

