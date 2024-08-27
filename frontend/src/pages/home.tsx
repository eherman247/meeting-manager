import { useEffect, useState } from "react";
import MainPageBody from "../components/MainPageBody";
import GroupDetails from "../components/GroupDetails";

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

const Home = () => {
  // const navLinks = ["/", "/joinGroup", "/manageGroup", "/createGroup"];
  const [groups, setGroups] = useState<groupStruct[]>();

  useEffect(() => {
    const fetchGroups = async () => {
      fetch("http://localhost:4000/api/groups")
        .then((response) => response.json())
        .then((json) => setGroups(json));
      // const response = await fetch('/api/groups')
      // const json = await response.json()
      // console.log("problem2")

      // if (response.ok) {
      //   setGroups(json)
      // }
      // else{
      //   console.log("problem")
      // }
    };

    fetchGroups();
  }, []);

  return (
    <div className="p-2 ">
      <MainPageBody></MainPageBody>
      <div>
        {groups &&
          groups.map((group) => (
            // <p key={group._id}>
            //   {group.user.firstName} {group.user.lastName}
            // </p>
            <GroupDetails key={group._id} group={group}></GroupDetails>
          ))}
      </div>
    </div>
  );
};

export default Home;
