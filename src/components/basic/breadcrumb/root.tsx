interface BreadCrumbRootProps {
  children: React.ReactNode
  classMain?: string
}

export const BreadcrumbRoot = ({
  children,
  classMain = 'mt-2 px-2 py-1 border border-grayLight rounded-lg bg-primaryExLight'  
}:BreadCrumbRootProps) => {
  return (
    <nav className={classMain} aria-label='Breadcrumb'>
      <ol className='inline-flex items-center space-x-1'>
        {children}
      </ol>
    </nav>
  );
};