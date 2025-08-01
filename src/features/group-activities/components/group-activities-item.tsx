import type { GroupActivity } from "../types/group-activity.types";

export default function GroupActivitiesItem({
    groupActivityId,
    name,
    description,
    date,
    place
} : GroupActivity) {
    return (        
        <div className="bg-white shadow rounded p-4 border border-gray-200">
            <h3 className="text-lg font-semibold text-blue-600">{groupActivityId}</h3>
            <h3 className="text-lg font-semibold text-blue-600">{name}</h3>
            <p className="text-gray-700 mt-2">{description}</p>
            <p className="text-gray-700 mt-2">{date.toString()}</p>
            <p className="text-gray-700 mt-2">{place}</p>
        </div>
    );
}