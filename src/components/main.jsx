import React, { Component } from 'react';
import styles from './main.module.css';
import axios from 'axios';
import ListItem from './listItem';

class Main extends Component {
  state = {
    videos: [
      {
        id: {
          kind: 'youtube#video',
          videoId: '3Y4Y5A6Z6KQ',
        },
        snippet: {
          publishedAt: '2021-02-23T00:30:15Z',
          channelId: 'UCqJ5zFEED1hWs0KNQCQuYdQ',
          title:
            'SI MIKECRACK FUERA un PEZ 🐠😂 ESCAPA DE LA PECERA #1 [BUSCANDO A TROLLI]',
          description:
            '⏰ TIEMPOS ⏰ 0:00 Intro 0:14 Roleplay 1:14 Escapa de la Pecera MÚSICA: ○ Intro: Different Heaven - Far Away ○ Outro: Chocolate con Almendras ○ Music ...',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/3Y4Y5A6Z6KQ/mqdefault.jpg',
              width: 320,
              height: 180,
            },
          },
        },
      },
    ],
    nextPage: {
      nextPageToken: '',
    },
  };

  getPopularVideos = () => {
    axios
      .get(
        `/search?part=snippet&nextPageToken=${this.state.nextPage.nextPageTOken}`
      )
      .then((response) => {
        const videos = [...response.data.items];
        this.setState({ videos });

        const nextPage = {
          ...response.data.pageInfo,
          nextPageToken: response.data.nextPageToken,
        };
        this.setState({ nextPage });
      });
    // .then(() => console.log(this.listItem));
  };
  componentDidMount() {
    this.getPopularVideos();
  }

  render() {
    return (
      <ul className={styles.ul}>
        {this.state.videos.map((video) => (
          <ListItem key={video.id.videoId} video={video} />
        ))}
      </ul>
    );
  }
}

export default Main;
