import { END_POINTS } from "@/utils/endpoints";

// import { API_HANDLER } from "@/utils/functions";
import { memo } from "react";
// import { cookies } from 'next/headers';
import { FaRegHeart, HiOutlineUsers, TbBuildingHospital } from "@/utils/icons";
import { AnalyticsCard } from "@/components/cards/analytics_card";
import { BarChart } from "@/components/charts/Bar";
import { DoughnutChart } from "@/components/charts/donut";
import { ChartCard } from "@/components/cards/charts_card";
import { LineChart } from "@/components/charts/lineArea";

const Home = async () => {
  // let analyticsData = {};

  // try {
  //     const cookieStore = cookies();
  //     const token = cookieStore.get('token')?.value;
  //     if (token) {
  //         const result = await API_HANDLER("GET", END_POINTS.ANALYTICS.LAB, "", token)
  //         console.log(result.data.data, "RESPONSE")
  //         analyticsData = result.data.data;
  //     }
  //     else {
  //         console.error("No token found");
  //     }

  // } catch (error) {
  //     console.error("Error fetching analytics data", error?.message);
  // }

  return (
    <main className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-8">
        <AnalyticsCard
          title={"Total Users"}
          icon={<HiOutlineUsers />}
          total={38}
          total_float={"3.4"}
        />
        <AnalyticsCard
          title={"Healthcare Systems"}
          icon={<FaRegHeart />}
          total={38}
          total_float={"3.4"}
        />
        <AnalyticsCard
          title={"Hospitals"}
          icon={<TbBuildingHospital />}
          total={38}
          total_float={"3.4"}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-8">
        <div className="col-span-1">
          <ChartCard
            title="Clinical Accuracy"
            subtitle=""
            chart={
              <div className="max-h-80 xl:max-h-96 min-h-80 h-full flex items-center justify-center">
                <DoughnutChart dataList={[1000, 500]} />
              </div>
            }
          />
        </div>
        <div className="col-span-1 xl:col-span-2">
          <ChartCard
            title="72 Hour Acuity Level Volume"
            subtitle="Track how your rating compares to your industry average."
            chart={
              <div className="max-h-80 lg:max-h-96 min-h-80  flex items-center justify-center">
                <BarChart
                  title="72 Hours sales"
                />
              </div>
            }
          />
        </div>

        <div className="col-span-1 lg:col-span-2 xl:col-span-3">
          <ChartCard
            title="Clinical Response Time"
            subtitle=""
            chart={
              <div className="max-h-80 lg:max-h-96 min-h-80  flex items-center justify-center">
                <LineChart
                  title="" 
                  dates=""
                />
              </div>
            }
          />
        </div>
      </div>
    </main>
  );
};

export default memo(Home);
