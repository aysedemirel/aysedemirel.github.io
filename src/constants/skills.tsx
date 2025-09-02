import {
  ApartmentOutlined,
  AppstoreOutlined,
  BgColorsOutlined,
  BranchesOutlined,
  CheckCircleOutlined,
  CloudServerOutlined,
  CodeOutlined,
  DatabaseOutlined,
  DockerOutlined,
  GatewayOutlined,
  GithubOutlined,
  GlobalOutlined,
  JavaOutlined,
  LayoutOutlined,
  MobileOutlined,
  RadarChartOutlined,
  RocketOutlined
} from '@ant-design/icons';

interface Skill {
  name: string;
  chartName: string;
  experience: number;
  icon: React.ReactNode;
  color: string;
}

export const SKILLS: Skill[] = [
  { name: 'Java', chartName: 'Java', experience: 80, icon: <JavaOutlined />, color: '#007396' },
  {
    name: 'Spring Boot',
    chartName: 'SB',
    experience: 80,
    icon: <JavaOutlined />,
    color: '#6db33f'
  },
  { name: 'OSGi', chartName: 'OSGi', experience: 80, icon: <AppstoreOutlined />, color: '#ff9900' },
  {
    name: 'JUnit',
    chartName: 'JUnit',
    experience: 50,
    icon: <CheckCircleOutlined />,
    color: '#25a162'
  },
  { name: 'React', chartName: 'React', experience: 60, icon: <GlobalOutlined />, color: '#61dafb' },
  { name: 'TypeScript', chartName: 'TS', experience: 60, icon: <CodeOutlined />, color: '#3178c6' },
  { name: 'JavaScript', chartName: 'JS', experience: 60, icon: <CodeOutlined />, color: '#f7df1e' },
  {
    name: 'Ant Design',
    chartName: 'AntD',
    experience: 50,
    icon: <LayoutOutlined />,
    color: '#1890ff'
  },
  {
    name: 'React Native',
    chartName: 'RN',
    experience: 60,
    icon: <MobileOutlined />,
    color: '#61dafb'
  },
  { name: 'Expo', chartName: 'Expo', experience: 60, icon: <RocketOutlined />, color: '#000020' },
  {
    name: 'Zustand',
    chartName: 'Zust',
    experience: 60,
    icon: <BranchesOutlined />,
    color: '#764abc'
  },
  {
    name: 'Firebase',
    chartName: 'FB',
    experience: 50,
    icon: <CloudServerOutlined />,
    color: '#ffca28'
  },
  {
    name: 'Hibernate',
    chartName: 'HB',
    experience: 60,
    icon: <GatewayOutlined />,
    color: '#59666c'
  },
  {
    name: 'PostgreSQL',
    chartName: 'SQL',
    experience: 50,
    icon: <DatabaseOutlined />,
    color: '#4479a1'
  },
  {
    name: 'SQLite',
    chartName: 'SQL',
    experience: 50,
    icon: <DatabaseOutlined />,
    color: '#4479a1'
  },
  { name: 'Git', chartName: 'Git', experience: 80, icon: <GithubOutlined />, color: '#f05032' },
  {
    name: 'Docker',
    chartName: 'Docker',
    experience: 50,
    icon: <DockerOutlined />,
    color: '#2496ed'
  },
  {
    name: 'Kafka',
    chartName: 'Kafka',
    experience: 50,
    icon: <ApartmentOutlined />,
    color: '#231f20'
  },
  {
    name: 'CSS / Sass',
    chartName: 'CSS',
    experience: 50,
    icon: <BgColorsOutlined />,
    color: '#cc6699'
  },
  {
    name: 'SonarQube',
    chartName: 'SQ',
    experience: 50,
    icon: <RadarChartOutlined />,
    color: '#4e9bcd'
  }
];

export const SKILLS_FOR_CHART: Skill[] = [
  { name: 'Java', chartName: 'Java', experience: 90, icon: <JavaOutlined />, color: '#007396' },
  {
    name: 'Spring Boot',
    chartName: 'Spring',
    experience: 90,
    icon: <JavaOutlined />,
    color: '#6db33f'
  },
  { name: 'OSGi', chartName: 'OSGi', experience: 60, icon: <AppstoreOutlined />, color: '#ff9900' },
  { name: 'React', chartName: 'React', experience: 60, icon: <GlobalOutlined />, color: '#61dafb' },
  {
    name: 'React Native',
    chartName: 'React Native',
    experience: 60,
    icon: <MobileOutlined />,
    color: '#61dafb'
  },
  {
    name: 'SQL',
    chartName: 'SQL',
    experience: 40,
    icon: <DatabaseOutlined />,
    color: '#4479a1'
  },
  { name: 'Git', chartName: 'Git', experience: 40, icon: <GithubOutlined />, color: '#f05032' }
];
