import React from "react";
// import { getColorFromString } from "@parssa/universal-ui";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

// You can use `getColorFromString` to get the colors for the Gantt Chart rows
export const GanttChart = ({
  items,
  ...props
}: DivProps & {
  items: Item[];
  }) => {
  return (
    <div {...props}>
      {/* Feel free to remove this */}
      <pre>{JSON.stringify(items, null, 2)}</pre>
    </div>
  );
};
