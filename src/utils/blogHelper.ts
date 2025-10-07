export const getTopicColor = (topic: string) => {
  const colors: { [key: string]: string } = {
    React: 'blue',
    TypeScript: 'purple',
    JavaScript: 'gold',
    'Node.js': 'green',
    CSS: 'cyan',
    DevOps: 'magenta',
    HTML: 'tomato',
    Python: 'royalblue',
    Docker: 'deepskyblue',
    Firebase: 'amber',
    SQL: 'teal',
    Git: 'orangered'
  };
  return colors[topic] || 'orange';
};
