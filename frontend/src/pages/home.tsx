import { useEffect, useState } from "react";
import MainPageBody from "../components/MainPageBody";

const Home = () => {
  // const navLinks = ["/", "/joinGroup", "/manageGroup", "/createGroup"];
  const [groups, setGroups] = useState([
    {
      _id: "",
      user: {
        firstName: "",
        lastName: "",
      },
      group_name: "",
      createdAt: "",
      updatedAt: "",
      __v: Number,
    },
  ]);

  useEffect(() => {
    const fetchGroups = async () => {
      console.log("problem1");
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
            <p key={group._id}>
              {group.user.firstName} {group.user.lastName}
            </p>
          ))}
      </div>
    </div>
  );
};

export default Home;
