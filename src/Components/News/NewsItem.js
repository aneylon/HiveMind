export const NewsItem = ({ data }) => {
  return (
    <li>
      <span>{data.title}</span>
      <span> : </span>
      <span>{data.dateTime}</span>
    </li>
  );
};
