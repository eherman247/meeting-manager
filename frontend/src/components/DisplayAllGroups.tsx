import { useEffect, useState } from "react";

interface groupStruct {
  _id: string;
  user: {
    firstName: string;
    lastName: string;
  };
  group_name: string;
  createdAt: string;
  updatedAt: string;
  __v: Number;
}

const DisplayAllGroups = () => {
  const [groups, setGroups] = useState<groupStruct[]>();

  useEffect(() => {
    const fetchGroups = async () => {
      fetch("http://localhost:4000/api/groups")
        .then((response) => response.json())
        .then((json) => setGroups(json));
    };

    fetchGroups();
  }, []);

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Group Name</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        {groups &&
          groups.map((group) => (
            <tr key={group._id}>
              <td>{group.group_name}</td>
              <td>{group.user.firstName}</td>
              <td>{group.user.lastName}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default DisplayAllGroups;
