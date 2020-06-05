export const state = () => ({
  photos: [],
  photos_resrv: [
    {
      display_url:
        'https://scontent-hel2-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/89358381_533144827582214_421034663561425989_n.jpg?_nc_ht=scontent-hel2-1.cdninstagram.com&_nc_cat=102&_nc_ohc=UB_kcJsszGkAX8_GLUH&oh=1eea19e3d091eec44c72badb7355a1f0&oe=5F059E00',
      accessibility_caption:
        'Photo by @raklechitsa on March 11, 2020. На изображении может находиться: 1 человек, часть тела крупным планом',
      url: 'https://www.instagram.com/p/B9ld-ULjMiz',
    },
    {
      display_url:
        'https://scontent-hel2-1.cdninstagram.com/v/t51.2885-15/e35/87567829_149018556566311_3283833516857033777_n.jpg?_nc_ht=scontent-hel2-1.cdninstagram.com&_nc_cat=107&_nc_ohc=ptE7DqYtbF0AX9HjPOr&oh=f732f047fe1df5edf4cf43a9a062eba2&oe=5EDC71C8',
      accessibility_caption: null,
      url: 'https://www.instagram.com/p/B9D-t96DHFW',
    },
    {
      display_url:
        'https://scontent-hel2-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/84346680_485380995429197_2768633197494545679_n.jpg?_nc_ht=scontent-hel2-1.cdninstagram.com&_nc_cat=105&_nc_ohc=1UHzzn_vFhEAX_hj21O&oh=51e44e0c18b22834c49757f7d24f8515&oe=5F052D3D',
      accessibility_caption:
        'Photo by @raklechitsa on February 23, 2020. На изображении может находиться: 1 человек, текст',
      url: 'https://www.instagram.com/p/B86-YtVBc7y',
    },
    {
      display_url:
        'https://scontent-hel2-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/81229926_1027928450925461_3313575688879147316_n.jpg?_nc_ht=scontent-hel2-1.cdninstagram.com&_nc_cat=105&_nc_ohc=qFtAahNWNbwAX8wZTpH&oh=efa1eb2c2da091978fd40719be802c08&oe=5F03E3D3',
      accessibility_caption:
        'Photo by @raklechitsa on February 18, 2020. На изображении может находиться: 1 человек, текст',
      url: 'https://www.instagram.com/p/B8vX5k6Bk4x',
    },
    {
      display_url:
        'https://scontent-hel2-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/83638639_1031131763938479_2658225154858050928_n.jpg?_nc_ht=scontent-hel2-1.cdninstagram.com&_nc_cat=103&_nc_ohc=-WTteZh4ZhwAX8QADQ-&oh=fd68040ff69883040e8480d43119125e&oe=5F02DDB0',
      accessibility_caption:
        'Photo by @raklechitsa on February 10, 2020. На изображении может находиться: текст',
      url: 'https://www.instagram.com/p/B8YTDwQhAQb',
    },
    {
      display_url:
        'https://scontent-hel2-1.cdninstagram.com/v/t51.2885-15/e35/83908441_186412102718228_6125583691134453427_n.jpg?_nc_ht=scontent-hel2-1.cdninstagram.com&_nc_cat=108&_nc_ohc=DMcbnjbAXOUAX9fG3Yy&oh=dbc7f216c00be159a13c3a0997a6ba2b&oe=5EDCB9BE',
      accessibility_caption: null,
      url: 'https://www.instagram.com/p/B8N7itGhYax',
    },
    {
      display_url:
        'https://scontent-hel2-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/84011662_571175406946859_564454029120792745_n.jpg?_nc_ht=scontent-hel2-1.cdninstagram.com&_nc_cat=111&_nc_ohc=MwtNrOVU-sUAX_PuHD1&oh=4b857287c4e887859e7295bec36f918d&oe=5F045ABB',
      accessibility_caption:
        'Photo by @raklechitsa on February 05, 2020. На изображении может находиться: 3 человека',
      url: 'https://www.instagram.com/p/B8N7RHKhA4T',
    },
    {
      display_url:
        'https://scontent-hel2-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/84462114_495981261296979_6111981520872586459_n.jpg?_nc_ht=scontent-hel2-1.cdninstagram.com&_nc_cat=103&_nc_ohc=yJoB1UG7tW0AX-qIFwN&oh=1893f7f13fdd2ddfaf1310978b7c062d&oe=5F02548E',
      accessibility_caption:
        'Photo by @raklechitsa on February 04, 2020. На изображении может находиться: 4 человека, люди сидят и ребенок',
      url: 'https://www.instagram.com/p/B8LUrVHhFCX',
    },
  ],
  /* Добавили резервные фотографии, так как
иногда выскакивает ошибка с получением
данных из инстаграмма (требует регистрации
  для продолжения) */
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};
export const actions = {
  async fetchPhotos({ commit, getters }) {
    const getPosts = data => {
      return data.graphql.user.edge_owner_to_timeline_media.edges.map(post => {
        const {
          node: { display_url, accessibility_caption, shortcode },
        } = post;
        return {
          display_url,
          accessibility_caption,
          url: `https://www.instagram.com/p/${shortcode}`,
        };
      });
    };
    const data = await this.$axios.$get(process.env.INST_API_URL);
    if (typeof data.graphql === 'object') {
      const formatData = getPosts(data);
      await commit('setState', {
        name: 'photos',
        value: formatData,
      });
    } else {
      await commit('setState', {
        name: 'photos',
        value: getters.getReservPhotos,
      });
    }
  },
};

export const getters = {
  getPhotos(state) {
    return state.photos.slice(0, 8);
  },
  getReservPhotos(state) {
    return state.photos_resrv;
  },
};
