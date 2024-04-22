import React from "react";
import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiChevronRight,
} from "react-icons/fi";
import PercentageItem from "./PercentageItem";
import { checkNAN } from "client/utils/Formatters";
import { useNavigate } from "react-router";
import useCurrencySettingsStore from "client/store/currencySettingsStore";
import useCashflowVariablesStore from "client/store/cashFlowStore";
import AnimatedNumber from "./AnimatedNumber";
import useInsightsStore from "client/store/insightsStore";
import { format } from "date-fns";

interface CashFlowPieChartProps {
  dimensions: number;
  doughnutThickness: number;
  values: {
    [key: string]: number;
    moneyIn: number;
    moneyOut: number;
  };
  percentageChange: number;
  isLoading: boolean;
}

const CashFlowPieChart: React.FC<CashFlowPieChartProps> = ({
  dimensions,
  doughnutThickness,
  values,
  percentageChange,
  isLoading
}) => {
  let { moneyIn, moneyOut } = values;

  console.log("isLoading", isLoading);

  const emptyValus = { "moneyInEmpty": 100000, "moneyOutEmpty": 30000 }
  const totalEmpty = emptyValus.moneyInEmpty + emptyValus.moneyOutEmpty
  const navigate = useNavigate();
  const total = moneyIn + moneyOut;
  const moneyOutPercentage =
    total > 0 ? Math.round((moneyOut / total) * 100).toFixed(1) : 0;
  const moneyInPercentage =
    total > 0 ? Math.round((moneyIn / total) * 100).toFixed(1) : 0;
  const radius = dimensions / 2;
  const strokeWidth = doughnutThickness;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  let cumulativePercentage = 0;
  const currencyStore = useCurrencySettingsStore((state: any) => state);
  const cashflowVariables =
    useCashflowVariablesStore.getState().cashflowVariables;
  const insightsStoreState = useInsightsStore((state) => state);

  if (isLoading) {
    const animationStyles = `
        @keyframes smoothRotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    `;
    return (
      <div className="shadow-card pt-5 rounded-lg pr-2.5 flex flex-col w-full">
        <style>{animationStyles}</style>
        <div className="flex flex-row justify-start items-center pl-3.5">
          <h2 className="font-custom text-base font-medium">Cash flow</h2>
          <div style={{ transform: "scale(1.25)", marginLeft: "0.2em" }}>
            <FiChevronRight size="0.625rem" />
          </div>
        </div>
        <div className="flex flex-row items-start">
          {/*TODO: update this section to take the 70% and 30% */}
          <svg height={dimensions} width={dimensions} style={{
            animation: "smoothRotate 2s linear infinite",
            transformOrigin: "center center",
          }}>
            <defs>
              <linearGradient
                id="moneyInGradient"
                gradientTransform="rotate(70.18)"
              >
                <stop offset="20%" stopColor="#66be5f" />
                <stop offset="100%" stopColor="#47a93e" />
              </linearGradient>
            </defs>
            <g transform={`translate(${radius}, ${radius})`}>
              {(["moneyInEmpty", "moneyOutEmpty"] as Array<keyof typeof emptyValus>).map((type, index) => {
                const percentage = (emptyValus[type] / totalEmpty) * 100;
                const color = type === "moneyInEmpty" ? "#e0e0e0" : "#f2f2f2";

                const startX =
                  normalizedRadius *
                  Math.cos((2 * Math.PI * cumulativePercentage) / 100);
                const startY =
                  normalizedRadius *
                  Math.sin((2 * Math.PI * cumulativePercentage) / 100);

                const endX =
                  normalizedRadius *
                  Math.cos(
                    (2 * Math.PI * (cumulativePercentage + percentage)) / 100
                  );
                const endY =
                  normalizedRadius *
                  Math.sin(
                    (2 * Math.PI * (cumulativePercentage + percentage)) / 100
                  );

                const largeArcFlag = percentage > 50 ? 1 : 0;

                cumulativePercentage += percentage;

                return (
                  <path
                    key={index}
                    d={`M ${startX} ${startY} A ${normalizedRadius} ${normalizedRadius} 0 ${largeArcFlag} 1 ${endX} ${endY}`}
                    fill="none"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    style={{
                      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                    }}
                  />
                );
              })}

            </g>
          </svg>
          <div className="flex flex-col items-start">
            <div className="flex flex-col justify-end items-start mt-8">
              <div className="flex flex-row">
                <div className="font-custom text-2xl font-medium text-skin-neutral2">
                  <AnimatedNumber target={0} duration={500} />
                  <sup
                    style={{
                      fontSize: "12px",
                      verticalAlign: "super",
                      marginLeft: "-4px",
                    }}
                  >
                    {currencyStore.currencySymbol ?? ""}
                  </sup>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="font-primary text-xs text-skin-subtitle font-medium tracking-longest_text">
                  {"Total cash flow"}
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start mt-5">
              {/* Empty PercentageItem */}
              <PercentageItem
                color="linear-gradient(180deg, #71EBD7 0%, #3ED1AE 100%)"
                percentage={0}
                label="Money in"
              />
              {/* Empty PercentageItem */}
              <PercentageItem
                color="#4C4C4C"
                percentage={0}
                label="Money out"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render an empty chart if both moneyIn and moneyOut are zero
  if (total === 0) {
    return (
      <div className="shadow-card pt-5 rounded-lg pr-2.5 flex flex-col w-full">
        <div className="flex flex-row justify-start items-center pl-3.5">
          <h2 className="font-custom text-base font-medium">Cash flow</h2>
          <div style={{ transform: "scale(1.25)", marginLeft: "0.2em" }}>
            <FiChevronRight size="0.625rem" />
          </div>
        </div>
        <div className="flex flex-row items-start">
          {/*TODO: update this section to take the 70% and 30% */}
          <svg height={dimensions} width={dimensions}>
            <defs>
              <linearGradient
                id="moneyInGradient"
                gradientTransform="rotate(70.18)"
              >
                <stop offset="20%" stopColor="#66be5f" />
                <stop offset="100%" stopColor="#47a93e" />
              </linearGradient>
            </defs>
            <g transform={`translate(${radius}, ${radius})`}>
              {(["moneyInEmpty", "moneyOutEmpty"] as Array<keyof typeof emptyValus>).map((type, index) => {
                const percentage = (emptyValus[type] / totalEmpty) * 100;
                const color = type === "moneyInEmpty" ? "#e0e0e0" : "#f2f2f2";

                const startX =
                  normalizedRadius *
                  Math.cos((2 * Math.PI * cumulativePercentage) / 100);
                const startY =
                  normalizedRadius *
                  Math.sin((2 * Math.PI * cumulativePercentage) / 100);

                const endX =
                  normalizedRadius *
                  Math.cos(
                    (2 * Math.PI * (cumulativePercentage + percentage)) / 100
                  );
                const endY =
                  normalizedRadius *
                  Math.sin(
                    (2 * Math.PI * (cumulativePercentage + percentage)) / 100
                  );

                const largeArcFlag = percentage > 50 ? 1 : 0;

                cumulativePercentage += percentage;

                return (
                  <path
                    key={index}
                    d={`M ${startX} ${startY} A ${normalizedRadius} ${normalizedRadius} 0 ${largeArcFlag} 1 ${endX} ${endY}`}
                    fill="none"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    style={{
                      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                    }}
                  />
                );
              })}

            </g>
          </svg>
          <div className="flex flex-col items-start">
            <div className="flex flex-col justify-end items-start mt-8">
              <div className="flex flex-row">
                <div className="font-custom text-2xl font-medium text-skin-neutral2">
                  <AnimatedNumber target={0} duration={500} />
                  <sup
                    style={{
                      fontSize: "12px",
                      verticalAlign: "super",
                      marginLeft: "-4px",
                    }}
                  >
                    {currencyStore.currencySymbol ?? ""}
                  </sup>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="font-primary text-xs text-skin-subtitle font-medium tracking-longest_text">
                  {"Total cash flow"}
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start mt-5">
              {/* Empty PercentageItem */}
              <PercentageItem
                color="linear-gradient(180deg, #71EBD7 0%, #3ED1AE 100%)"
                percentage={0}
                label="Money in"
              />
              {/* Empty PercentageItem */}
              <PercentageItem
                color="#4C4C4C"
                percentage={0}
                label="Money out"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="shadow-card pt-5 rounded-lg pr-2.5 flex flex-col w-full"
      onClick={() =>
        navigate(
          `/cashflow?startDate=${format(
            insightsStoreState.insightsStartDate,
            "yyyy-MM-dd"
          )}&endDate=${format(
            insightsStoreState.insightsEndDate,
            "yyyy-MM-dd"
          )}&accountName=${cashflowVariables.accountName}&dateFilter=${cashflowVariables.dateFilter
          }`
        )
      }
    >
      <div className="flex flex-row justify-start items-center pl-3.5">
        <h2 className="font-custom text-base font-medium">Cash flow</h2>
        <div style={{ transform: "scale(1.25)", marginLeft: "0.2em" }}>
          <FiChevronRight size="0.625rem" />
        </div>
      </div>
      <div className="flex flex-row items-start">
        <svg height={dimensions} width={dimensions}>
          <defs>
            <linearGradient
              id="moneyInGradient"
              gradientTransform="rotate(70.18)"
            >
              <stop offset="20%" stopColor="#66be5f" />
              <stop offset="100%" stopColor="#47a93e" />
            </linearGradient>
          </defs>
          <g transform={`translate(${radius}, ${radius})`}>
            {["moneyIn", "moneyOut"].map((type, index) => {
              const percentage = (values[type] / total) * 100;
              const color = type === "moneyIn" ? "#71EBD7" : "#4C4C4C";

              const startX =
                normalizedRadius *
                Math.cos((2 * Math.PI * cumulativePercentage) / 100);
              const startY =
                normalizedRadius *
                Math.sin((2 * Math.PI * cumulativePercentage) / 100);

              const endX =
                normalizedRadius *
                Math.cos(
                  (2 * Math.PI * (cumulativePercentage + percentage)) / 100
                );
              const endY =
                normalizedRadius *
                Math.sin(
                  (2 * Math.PI * (cumulativePercentage + percentage)) / 100
                );

              const largeArcFlag = percentage > 50 ? 1 : 0;

              cumulativePercentage += percentage;

              return (
                <path
                  key={index}
                  d={`M ${startX} ${startY} A ${normalizedRadius} ${normalizedRadius} 0 ${largeArcFlag} 1 ${endX} ${endY}`}
                  fill="none"
                  stroke={color}
                  strokeWidth={strokeWidth}
                  strokeLinecap="round"
                  style={{
                    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                  }}
                />
              );
            })}
            <foreignObject
              x={-radius}
              y={-radius}
              width={radius * 2}
              height={radius * 2}
              xmlns="http://www.w3.org/1999/xhtml"
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      backgroundColor: "#D1D5DB",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid #565656",
                    }}
                  >
                    {percentageChange > 0 ? (
                      <FiArrowUpRight />
                    ) : (
                      <FiArrowDownRight />
                    )}
                    {/* trend indicator */}
                  </div>
                  <span
                    className="font-primary text-s tracking-wide font-medium"
                    style={{ marginLeft: "4px", color: "#565656" }}
                  >
                    {percentageChange.toFixed(1)}%
                  </span>
                  {/* percentage change */}
                </div>
                <div
                  className="font-primary text-xxxs tracking-longest_text mt-2"
                  style={{ color: "#565656" }}
                >
                  <span>change this month</span>
                </div>
              </div>
            </foreignObject>
          </g>
        </svg>
        <div className="flex flex-col items-start">
          <div className="flex flex-col justify-end items-start mt-8">
            <div className="flex flex-row">
              <div className="relative flex item-start">
                {/* <div
                  className="absolute -right-6 -top-2 font-semibold"
                  style={{ fontSize: "12px" }}
                >
                  {currencyStore.currencySymbol}
                </div> */}
                <div className="font-custom text-2xl font-medium text-skin-neutral2">
                  {/* {checkNAN(moneyIn + moneyOut).toLocaleString("en-US")} */}
                  <AnimatedNumber
                    target={moneyIn + moneyOut ?? 0}
                    duration={500}
                  />
                  <sup
                    style={{
                      fontSize: "12px",
                      verticalAlign: "super",
                      marginLeft: "-4px",
                    }}
                  >
                    {currencyStore.currencySymbol ?? ""}
                  </sup>
                </div>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="font-primary text-xs text-skin-subtitle font-medium tracking-longest_text">
                {"Total cash flow"}
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start mt-5">
            <PercentageItem
              color="linear-gradient(180deg, #71EBD7 0%, #3ED1AE 100%)"
              percentage={Number(moneyInPercentage)}
              label="Money in"
            />
            <PercentageItem
              color="#4C4C4C"
              percentage={Number(moneyOutPercentage)}
              label="Money out"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashFlowPieChart;