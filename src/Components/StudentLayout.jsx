import Scores from "./ScoreLayout";

function Student(props) {
  return (
    <tr>
      <td>{props.data.name}</td>
      <td className="bioTable">{props.data.bio}</td>
      <td>
        {props.data.scores.map((scoreData, index2) => {
          return <Scores scoreData={scoreData} key={index2} />;
        })}
      </td>
    </tr>
  );
}
export default Student;
