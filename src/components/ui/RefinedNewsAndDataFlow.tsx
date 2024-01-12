import news from '../../lib/dummyData/news.json';
import { INews } from '../../types';

const RefinedNewsAndDataFlow = () => {
  return (
    <div className="border-[1px] rounded-md h-full w-full p-[10px]">
      <h2 className="font-[500] text-[22px]">Refined News & Data Flow</h2>
      <table className="w-full">
        <tr className="bg-[#dff3ff] h-[40px] w-full rounded-md">
          <th className="w-[10%] text-start pl-[10px]">Type</th>
          <th className="w-[60%] text-start">News</th>
          <th className="w-[10%] text-center">Score</th>
          <th className="w-[10%] text-start">Impact</th>
          <th className="w-[10%] text-start">Probability</th>
        </tr>
        {news.map(({ description, type, impact, probability, score }: INews, i) => <tr key={i} className="h-[55px] w-full rounded-md border-b-[1px] border-b-gray-300">
          <td className="w-[10%] text-start pl-[5px]"><div className='flex items-center gap-[8px] text-[18px]'><span className={`block h-[20px] w-[20px] rounded-md`} style={{ background: type.color }}></span>{type.name}</div></td>
          <td className="w-[60%] max-w-[60%] text-start pr-[50px] text-[14px] font-[500]">{description}</td>
          <td className="w-[10%] text-center font-[500]">+{score}</td>
          <td className="w-[10%] text-start font-[500]">{impact}</td>
          <td className="w-[10%] text-center px-[10px]">
            <div className='bg-[#dff3ff] rounded-md text-[#2ca5ff]'>
              {probability}
            </div>
          </td>
        </tr>)}
      </table>
    </div>
  )
}

export default RefinedNewsAndDataFlow