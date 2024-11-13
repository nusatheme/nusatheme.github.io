import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import clsx from "clsx";

const Themes = [
  {
    name: 'Leon',
    url: 'docs/leon/'
  }
];

function Theme({ name, url }) {
  return (
    <div className='theme-doc'>
      <Link
        className=""
        to={url}>
        <div className='theme-doc-img'>
          <img src='' alt='' />
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
