const Columns = ({col}) => {
  return (
    <div className="flex gap-y-5 flex-col">
      <h3 className="text-dark-100 text-xs font-bold uppercase">{col.title}</h3>
      {col.links.map((link) => (
        <span className="text-dark-50 text-sm font-normal leading-normal">
          {link}
        </span>
      ))}
    </div>
  );
};

export default Columns;
