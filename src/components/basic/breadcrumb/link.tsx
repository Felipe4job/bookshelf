import { LinkEst } from '../link';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

interface BreadcrumbLinkProps {
  text: string;
  link: string;
  classLink?: string;
}

export const BreadcrumbLink = ({
  link,
  text,
  classLink = 'flex items-center space-x-1 text-secondaryDark font-semibold'
}:BreadcrumbLinkProps) => {
  return (
    <li className={classLink}>
      <LinkEst href={link}> {text} </LinkEst>
      <MdKeyboardDoubleArrowRight className='mb-[2px]'/>
    </li>
  );
}; 