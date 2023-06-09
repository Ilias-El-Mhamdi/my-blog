import Link from 'next/link';

export function ReferenceLinks() {
  return <>
    <Link href='https://jet-afternoon-270.notion.site/Tech-Resources-b060a9b271024bb09aff222e9ccc7abc?pvs=4'>
      <a className='underline hover:text-blue-800' target='_blank'>Tech Resources</a>
    </Link>
    {' | '}
    <Link
      href='https://www.linkedin.com/today/author/ilias-el-mhamdi-72a013146?trk=article-ssr-frontend-pulse_more-articles'>
      <a className='underline hover:text-blue-800' target='_blank'>LinkedIn Articles</a>
    </Link>
    {' | '}
    <Link href={'/cv.pdf'}>
      <a className='underline hover:text-blue-800' target='_blank'>CV</a>
    </Link>
  </>;
}
