export const state = () => ({
  photos: [
    {
      id: '1',
      url: '/images/__item-6.jpg',
    },
    {
      id: '2',
      url: '/images/Rectangle 23.png',
    },
    {
      id: '3',
      url: '/images/Rectangle 23.png',
    },
    {
      id: '4',
      url: '/images/Rectangle 23.png',
    },
    {
      id: '5',
      url: '/images/Rectangle 23.png',
    },
    {
      id: '6',
      url: '/images/Rectangle 23.png',
    },
    {
      id: '7',
      url: '/images/Rectangle 23.png',
    },
    {
      id: '8',
      url: '/images/Rectangle 23.png',
    },
  ],
});

export const mutations = {};

export const getters = {
  getPhotosData(state) {
    return state.photos;
  },
};
