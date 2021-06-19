import React, {Component} from 'react';
import "./header.css";
class Header extends Component {
    state = {
        newMovieName: ""
    };

    handleOnChange = (e) => {
        let value = e.target.value;
        this.setState({newMovieName: value})
    };
   
    handleKeyPress = (e) => {
        if (e.key == "Enter") {
            this.props.setMovies(this.state.newMovieName);
        }
    };

    render() {
        return (
            <div className="header">
                <div className="logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt=""/>
                </div>
                <div className="search-btn">
                    <input type="text" className="search-movies"
                        value={
                            this.state.newMovieName
                        }
                        placeholder="Search"
                        onChange={this.handleOnChange}
                        onKeyPress={this.handleKeyPress}
                        />
                </div>
            </div>
        );
    }
}

export default Header;
