import axios from 'axios';
import React, { PureComponent } from 'react';
import styles from './navBar.module.css';

class NavBar extends PureComponent {
  inputRefs = React.createRef();
  nextPageToken = '';

  handleSearch = (e) => {
    e.preventDefault();

    axios
      .get(
        `/search?part=snippet&q=${this.inputRefs.current.value}&nextPageToken=${this.nextPageTOken}`
      )
      .then((response) => {
        const searchListItems = response.data.items;
        this.nextPageToken = response.data.nextPageToken;
      });
  };

  render() {
    return (
      <>
        <div className={styles.nav}>
          <form onSubmit={this.handleSearch}>
            <input type="text" ref={this.inputRefs} className={styles.search} />
            <a href="#" className={styles.button} onClick={this.handleSearch}>
              Search
            </a>
          </form>
        </div>
      </>
    );
  }
}

export default NavBar;
