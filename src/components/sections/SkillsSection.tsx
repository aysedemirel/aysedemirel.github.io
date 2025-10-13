import React, { useState } from 'react';
import { PieChartOutlined } from '@ant-design/icons';
import { Pie } from '@ant-design/plots';
import { Card, Col, Progress, Row, Typography } from 'antd';
import { SKILLS } from '../../constants/skills';
import { PieConfig } from '../../config/SkillPieConfig';

const { Title } = Typography;

const PlotMaps: { [key: string]: any } = {};

const SkillsSection: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

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
    <div id="skills" className="skills-container">
      <div className="skills-part">
        <div className="skills-title">
          <PieChartOutlined className="title-icon" />
          <Title level={2} className="title-txt">
            Skills
          </Title>
        </div>

        <Row gutter={24} align="top" className="skills-content">
          <Col xs={{ span: 24, order: 2 }} md={{ span: 16, order: 1 }}>
            <div className="skills-cards">
              <Row gutter={[16, 16]} align="middle">
                {SKILLS.map((skill) => (
                  <Col xs={12} sm={12} md={6} key={skill.name}>
                    <Card
                      hoverable
                      className={`skill-card ${selectedSkill === skill.name ? 'active' : ''}`}
                      onClick={() =>
                        setSelectedSkill(selectedSkill === skill.name ? null : skill.name)
                      }>
                      <div className="skill-title">
                        {skill.icon}
                        <h3>{skill.name}</h3>
                      </div>
                      {selectedSkill === skill.name && (
                        <Progress
                          percent={skill.experience}
                          strokeColor={skill.color}
                          status="active"
                          showInfo={false}
                        />
                      )}
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
          <Col xs={{ span: 24, order: 1 }} md={{ span: 8, order: 2 }} className="chart-col">
            <div className="chart-container">
              <Pie
                {...PieConfig}
                autoFit={true}
                height={300}
                onReady={(plot) => {
                  PlotMaps.rightPie = plot;
                  plot.chart.on('interval:pointerover', (evt: any) => {
                    showTooltip(evt, 'rightPie');
                  });
                  plot.chart.on('interval:pointerout', (evt: any) => {
                    hideTooltip(evt, 'rightPie');
                  });
                }}
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SkillsSection;
