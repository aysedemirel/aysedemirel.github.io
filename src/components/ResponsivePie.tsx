import { useRef } from 'react';
import { Pie } from '@ant-design/plots';

interface Props {
  props: any;
}
const PlotMaps: { [key: string]: any } = {};

const ResponsivePie = ({ props }: Props) => {
  const ref = useRef<any>(null);

  const showTooltip = (evt: { data: { data: { name: any } } }, pie: string) => {
    Object.keys(PlotMaps).forEach((plot) => {
      if (plot !== pie) {
        PlotMaps[plot].chart.emit('tooltip:show', {
          data: { data: { name: evt.data.data.name } }
        });
        PlotMaps[plot].chart.emit('element:highlight', {
          data: { data: { name: evt.data.data.name } }
        });
      }
    });
  };

  const hideTooltip = (evt: { data: { data: { name: any } } }, pie: string) => {
    Object.keys(PlotMaps).forEach((plot) => {
      if (plot !== pie) {
        PlotMaps[plot].chart.emit('tooltip:hide', {
          data: { data: { name: evt.data.data.name } }
        });
        PlotMaps[plot].chart.emit('element:unhighlight', {
          data: { data: { name: evt.data.data.name } }
        });
      }
    });
  };

  return (
    <Pie
      {...props}
      onReady={(plot) => {
        ref.current = plot;
        PlotMaps.rightPie = plot;
        plot.chart.on('interval:pointerover', (evt: any) => {
          showTooltip(evt, 'rightPie');
        });
        plot.chart.on('interval:pointerout', (evt: any) => {
          hideTooltip(evt, 'rightPie');
        });
      }}
    />
  );
};

export default ResponsivePie;
