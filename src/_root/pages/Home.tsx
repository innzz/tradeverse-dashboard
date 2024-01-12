import AverageScoreOverview from "../../components/ui/AverageScoreOverview"
import NewsAndDataFlowChart from "../../components/ui/NewsAndDataFlowChart"
import RefinedNewsAndDataFlow from "../../components/ui/RefinedNewsAndDataFlow"
import TopFocusTopics from "../../components/ui/TopFocusTopics"

const Home = () => {
  return (
    <section className="h-full flex flex-col gap-[15px]">
      <div className="flex items-center h-[50%] gap-[15px]">
        <div className="w-[70%] h-full">
          <NewsAndDataFlowChart />
        </div>
        <div className="w-[30%] h-full">
          <AverageScoreOverview score="75" />
        </div>
      </div>
      <div className="flex items-center h-[50%] gap-[15px]">
        <div className="w-[70%] h-full">
          <RefinedNewsAndDataFlow />
        </div>
        <div className="w-[30%] h-full">
          <TopFocusTopics top={10} />
        </div>
      </div>
    </section>
  )
}

export default Home