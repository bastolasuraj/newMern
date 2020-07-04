import React, {FC} from "react";

interface Props {
    chartData: any;
}

const Chart: FC<Props> = (props: Props) => {
    return <h1>Chart:{JSON.stringify(props.chartData)}</h1>;
}
export default Chart;