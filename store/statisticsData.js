export const state = () => ({
  statistics: [
    {
      summary: '1 из 3',
      source: 'Левада-Центр 2018',
      description:
        'Каждый 3-й в стране уверен, что рак неизлечим. А это примерно 48 918 000 человек.',
      oldValue: null,
      currentValue: 48918000,
      maxValue: 150000000,
      id: 1,
    },
    {
      summary: '3 700 000',
      source: 'Росстат 2018',
      description: '2,6% Россиян имеют онкозаболевания.',
      oldValue: null,
      currentValue: 3700000,
      maxValue: 150000000,
      id: 2,
    },
    {
      summary: '↑28%',
      source: 'МНИОИ Герцена 2018',
      description:
        'На 28% выросла доля выявления заболеваний на ранней стадии за 10 лет.',
      oldValue: '* ТУТ надо запросить реальные данные сколько СТАЛО *',
      currentValue: '* ТУТ надо запросить реальные данные сколько СТАЛО *',
      maxValue: 100,
      id: 3,
    },
    {
      summary: '↓25%',
      source: 'МНИОИ Герцена 2018',
      description:
        'На 25% снизилась смертность в течение первого года после постановки диагноза.',
      oldValue: '* ТУТ надо запросить реальные данные сколько СТАЛО *',
      currentValue: '* ТУТ надо запросить реальные данные сколько СТАЛО *',
      maxValue: 100,
      id: 4,
    },
  ],
  cards: [
    {
      id: '1',
      title:
        'Каждый 3-й в стране уверен, что рак неизлечим. А это примерно 48 918 000 человек.',
      image: '/images/__item-6.jpg',
      content: '1 из 3',
      source: 'Левада-Центр 2018',
      value: 1,
      maxValue: 3,
    },
    {
      id: '2',
      title: '2,6% Россиян имеют онкозаболевания.',
      image: '/images/__item-6.jpg',
      content: '3 700 000',
      source: 'Росстат 2018',
      value: 2.6,
      maxValue: 100,
    },
    {
      id: '3',
      title:
        'На 28% выросла доля выявления заболеваний на ранней стадии за 10 лет.',
      image: '/images/__item-6.jpg',
      content: '↑28%',
      source: 'МНИОИ Герцена 2018',
      valueEmpty: 61.5,
      maxValueEmpty: 100,
      valueFill: 80,
      maxValueFill: 100,
    },
    {
      id: '4',
      title:
        'На 25% снизилась смертность в течение первого года после постановки диагноза.',
      image: '/images/__item-6.jpg',
      content: '↓25%',
      source: 'МНИОИ Герцена 2018',
      valueEmpty: 73,
      maxValueEmpty: 100,
      valueFill: 54.6,
      maxValueFill: 100,
    },
  ],
});

export const getters = {
  getStatistics(state) {
    return state.cards;
  },
};
