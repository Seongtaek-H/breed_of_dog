export default function ProgressBar(props) {
  const barWidth = (props.sequence * 100) / 10;

  return (
    <div>
      <div className="container">
        <p>{props.sequence}/10</p>
        <div className="bar">
          <div className="progress"></div>
        </div>
      </div>
      <style jsx>{`
        p {
          margin: 3% 3% 0% 3%;
        }
        .bar {
          margin: 3% 5% 5% 5%;
          background-color: #dcdcde;
          width: 90%;
          height: 15px;
        }
        .progress {
          background-color: orange;
          width: ${barWidth}%;
          height: 100%;
        }
      `}</style>
    </div>
  );
}
