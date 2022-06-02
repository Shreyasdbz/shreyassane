interface IViewWrapper {
  id: string;
  children: React.ReactElement | React.ReactElement[] | string;
}

const ViewWrapper = (props: IViewWrapper) => {
  return (
    <div id={props.id} className="z-0 flex min-h-screen w-screen items-center justify-center">
      <div className="bg-primary-200 lg:max-w-6xl">{props.children}</div>
    </div>
  );
};

export default ViewWrapper;
