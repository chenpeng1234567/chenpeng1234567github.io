import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '嵌入式工程师',
    Svg: require('@site/static/svg/undraw_open_source.svg').default,
    description: (
      <>
        参加过一点点比赛，对STM32有点了解，但不多。
        会点C语言，Python，C++但不多。主要要用的时候才学。
      </>
    ),
  },
  {
    title: '视觉初学者',
    Svg: require('@site/static/svg/undraw_spider.svg').default,
    description: (
      <>
        现在正在做视觉方面的工作，不是很会。
        主要学SLAM，建图，定位之类的杂事。
      </>
    ),
  },
  {
    title: '开源爱好者',
    Svg: require('@site/static/svg/undraw_web_developer.svg').default,
    description: (
      <>
        作为一名开源爱好者，积极参与开源社区，
        为开源项目贡献代码，希望有生之年能够构建出一个知名的开源项目。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
