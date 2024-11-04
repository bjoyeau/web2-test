interface PageTitleProps {
  title: string;
}

const pageTitle = (props: PageTitleProps) => {
  return <h1>{props.title}</h1>;
};

export default pageTitle;
