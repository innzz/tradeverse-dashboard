import { MdKeyboardArrowRight } from 'react-icons/md';
import focusTopics from '../../lib/dummyData/focusTips.json';
import { IFocusTopic } from '../../types';

const TopFocusTopics = ({ top }: { top: number }) => {
  console.log("focus topics", focusTopics)
  return (
    <div className="border-[1px] rounded-md h-full w-full p-[10px] flex flex-col gap-[10px]">
      <h2 className="font-[500] text-[22px]">Top {top} Focus Tips</h2>
      <div className='flex flex-col gap-[3px]'>
        {focusTopics.map(({ srNo, score, topicName }: IFocusTopic) => <div className='flex items-center' key={srNo}><div className='flex-1 text-gray-400 text-[16px]'>{srNo}. {topicName}</div> <span className='bg-[#2ca5ff] rounded-full block w-[70px] text-center text-white text-[14px]'>score {score}</span></div>)}
      </div>
        <div className="flex items-center gap-[5px]"><p className="text-[16px] font-[500] text-[#40b7d5]">See All</p> <div><MdKeyboardArrowRight color="gray" /></div></div>
    </div>
  )
}

export default TopFocusTopics