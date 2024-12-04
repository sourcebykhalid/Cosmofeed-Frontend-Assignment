import React from "react";
import { Select } from "@material-tailwind/react";

export const GroupByDropdown = ({ groupBy, setGroupBy }) => {
  return (
    <Select
      value={groupBy}
      onChange={(e) => setGroupBy(e.target.value)}
      className="mb-4"
    >
      <option value="None">Group By</option>
      <option value="Priority">Priority</option>
    </Select>
  );
};
