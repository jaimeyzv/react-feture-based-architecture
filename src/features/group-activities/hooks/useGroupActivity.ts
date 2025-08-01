import { useEffect, useState } from "react";
import type { GroupActivity } from "../types/group-activity.types";

export const useGroupActivity = () => {
  const [groupActivities, setGroupActivities] = useState<GroupActivity[]>([]);
  async function getGroupActivities(): Promise<GroupActivity[]> {
    const response = await fetch("http://localhost:3000/group-activities/1");

    if (!response.ok) {
      throw new Error("Failed to fetch group activities");
    }

    const data = await response.json();

    const mappedData = data.map((item: any) => ({
      groupActivityId: item.GroupActivityId,
      name: item.Name,
      description: item.Description,
      date: item.Date,
      place: item.Place,
    }));

    return mappedData;
  }

  useEffect(() => {
    getGroupActivities().then((data) => {
      setGroupActivities(data as GroupActivity[]);
    });
  }, []);

  return { groupActivities };
};
