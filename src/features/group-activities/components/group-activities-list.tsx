import { useGroupActivity } from "../hooks/useGroupActivity";
import type { GroupActivity } from "../types/group-activity.types";
import GroupActivitiesItem from "./group-activities-item";

export default function GroupActivitiesList() {
    const { groupActivities } = useGroupActivity();
    
    return (
        <div>
            {groupActivities?.map((item: GroupActivity) => (
                <GroupActivitiesItem 
                    key={item.groupActivityId} 
                    {...item} 
                />                
            ))}
        </div>
    );
}