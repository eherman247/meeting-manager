import React from "react";

interface Props {
  group: {
    _id: string;
    user: {
      firstName: string;
      lastName: string;
    };
    group_name: string;
    createdAt: string;
    updatedAt: string;
    __v: Number;
  };
}

// const GroupDetails = ({_id, user, group_name, createdAt, updatedAt, __v}: groupStruct) => {
const GroupDetails = ({ group }: Props) => {
  return (
    <div>
      <h3>Group Name: {group.group_name}</h3>
      <h4>
        User Name: {group.user.firstName} {group.user.lastName}
      </h4>
    </div>
  );
};

export default GroupDetails;
