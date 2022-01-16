function Scores(props) {
    console.log(props.scoreData.date);
    return (
     <table className="scoreTable">
         <td>{props.scoreData.date} | {props.scoreData.score}</td>   
     </table>
    );
}

export default Scores;