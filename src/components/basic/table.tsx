export const TableEst = ({ data } : {data: string[][]}) => {
  return (
    <table>
      <thead>
        <tr>
          {
            Array.from({ length: data[0].length }, (_, index) => {
              return (
                <th key={index}>
                  {data[0][index]}
                </th>
              );
            })
          }
        </tr>
      </thead>
      <tbody>
        {
          Array.from({ length: data.length - 1 }, (_, index) => {
            const row = data[index + 1]; 
            return(
              <tr key={index}>
                {
                  row.map((r, i) => (<td key={i}>{r}</td>))
                }
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
};