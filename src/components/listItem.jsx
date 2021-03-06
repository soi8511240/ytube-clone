import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styles from './listItem.module.css';

class ListItems extends PureComponent {
  render() {
    const {
      thumbnails,
      title,
      description,
      publishedAt,
    } = this.props.video.snippet;
    const { videoId } = this.props.video.id;
    return (
      <li>
        <Link to="/detail/:videoId" className={styles.link}>
          <img src={thumbnails.default.url} alt="" className={styles.thum} />
          <div className={styles.infomation}>
            <div className={styles.title}>
              <span className={styles.channel}></span>
              {title}
            </div>
            <div className={styles.desc}>{description}</div>
            <div className={styles.date}>{publishedAt}</div>
          </div>
        </Link>
      </li>
    );
  }
}

export default ListItems;
