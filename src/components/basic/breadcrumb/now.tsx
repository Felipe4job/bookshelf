interface BreadcrumbLinkProps {
  text: string;
  classNow?: string;
}

export const BreadcrumbNow = ({
  text,
  classNow = 'flex items-center space-x-1',
}:BreadcrumbLinkProps) => {
  return (
    <li className={classNow}>
      <span>{text}</span>      
    </li>
  );
}; 