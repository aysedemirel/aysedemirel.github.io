import { SKILLS_FOR_CHART } from '../constants/skills';

export const PieConfig = {
  angleField: 'experience',
  colorField: 'name',
  data: SKILLS_FOR_CHART,
  label: {
    text: 'chartName'
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
