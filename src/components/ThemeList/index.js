import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

const Themes = [
  {
    name: 'Mora | Wordpress Theme',
    url: 'docs/mora/',
    imgUrl: '/img/mora/cover.jpg'
  },
  {
    name: 'Mivox | Wordpress Theme',
    url: 'docs/mivox/',
    imgUrl: '/img/mivox/cover.jpg'
  }
];

function Theme({ name, url, imgUrl }) {
  return (
    <div className='col col--4 theme-doc'>
      <Link
        className=""
        to={url}>
        <div className='theme-doc-img'>
          <img src={imgUrl} alt='' />
        </div>
        <div className='text--center'>
          <Heading as="h3">{name}</Heading>
        </div>
      </Link>
    </div>
  )
}

export default function ThemeList() {
  return (
    <section className={'list'}>
      <div className='container'>
        <div className='row'>
          {Themes.map((props, idx) => (
            <Theme key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
