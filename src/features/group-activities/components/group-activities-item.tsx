import type { GroupActivity } from "../types/group-activity.types";

export default function GroupActivitiesItem({
    groupActivityId,
    name,
    description,
    date,
    place
} : GroupActivity) {
    return (
        <div className="rounded-lg border p-2 border-black/20 ">
            <p className="font-bold text-lg">{groupActivityId}</p>
            <p className="font-bold text-lg">{name}</p>
            <p className="text-teal-800">{description}</p>
            {/* <p className="text-gray-600">{date.toDateString()}</p> */}
            <p className="text-gray-600">{place}</p>
        </div>
    );
}