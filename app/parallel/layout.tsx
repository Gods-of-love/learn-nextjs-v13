const ParallelLayout = (props: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}) => {
  return (
    <>
      {props.children}
      {props.team}
      {props.analytics}
    </>
  );
};

export default ParallelLayout;
