import { ALink } from '../../atoms/links/ALink';

export function ReferenceLinks() {
  return <>
    <ALink isTargetBlank
           href='https://jet-afternoon-270.notion.site/Tech-Resources-b060a9b271024bb09aff222e9ccc7abc?pvs=4'>
      Tech Resources
    </ALink>
    {' | '}
    <ALink isTargetBlank
           href='https://www.linkedin.com/today/author/ilias-el-mhamdi-72a013146?trk=article-ssr-frontend-pulse_more-articles'>
      LinkedIn Articles
    </ALink>
    {' | '}
    <ALink isTargetBlank href={'/cv.pdf'}>
      CV
    </ALink>
  </>;
}
