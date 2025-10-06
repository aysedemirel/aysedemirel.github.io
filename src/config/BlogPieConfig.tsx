import { ARTICLE_LIST } from '../constants/articles';

export const BlogPieConfig = {
  angleField: 'num',
  colorField: 'name',
  data: ARTICLE_LIST,
  label: {
    text: 'name'
  },
  tooltip: {
    title: 'name'
  },
  interaction: {
    elementHighlight: true
  },
  state: {
    inactive: { opacity: 0.5 }
  },
  legend: false,
  autoFit: true
};
