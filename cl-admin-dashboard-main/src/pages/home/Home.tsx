import { TopBox } from "../../components/topBox/TopBox";
import { ChartBox } from "../../components/chartBox/chartBox";
import { BarChartBox } from "../../components/barChartBox/barChartBox";
import "./home.scss";
import {
  chartBoxUser,
  chartBoxProduct,
  chartBoxConversion,
  chartBoxRevenue,
  barChartBoxRevenue,
  barChartBoxVisit,
} from "../../data";
import { PieChartBox } from "../../components/pieChartBox/PieChartBox";
import { BigChartBox } from "../../components/bigChartBox/BigChartBox";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box5">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box6">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box box7">
        <BigChartBox />
      </div>
      <div className="box box8">
        <BarChartBox {...barChartBoxRevenue} />
      </div>
      <div className="box box9">
        <BarChartBox {...barChartBoxVisit} />
      </div>
    </div>
  );
};

export default Home;
