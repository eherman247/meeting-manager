import { useEffect, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  groupName: z
    .string()
    .min(1, { message: "The group name needs to have at least 1 character." })
    .max(30, {
      message: "The group name cannot be longer than 30 characters.",
    }),
  firstName: z
    .string()
    .min(1, { message: "The first name needs to have at least 1 character." })
    .max(30, {
      message: "The first name cannot be longer than 30 characters.",
    }),
  lastName: z
    .string()
    .min(1, { message: "The last name needs to have at least 1 character." })
    .max(30, { message: "The last name cannot be longer than 30 characters." }),
});

type GroupFormData = z.infer<typeof schema>;

const GroupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<GroupFormData>({ resolver: zodResolver(schema) });
  const [groupName, setGroupName] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");

  // const addNewGroup = (data) => {
  //   const group = { groupName, lastName, firstName };
  //   useEffect(() => {
  //     const fetchGroups = async () => {
  //       fetch("http://localhost:4000/api/groups", {
  //         method: "POST",
  //         body: JSON.stringify(group),
  //       })
  //         .then((response) => response.json())
  //         .then((json) => setGroups(json));
  //     };
  //     fetchGroups();
  //   }, []);
  // };

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div className="mb-3">
        <label htmlFor="groupName" className="form-label">
          Group Name
        </label>
        <input
          {...register("groupName")}
          id="groupName"
          type="text"
          className="form-control"
        />
        {errors.groupName && (
          <p className="text-danger">{errors.groupName.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">
          First Name
        </label>
        <input
          {...register("firstName")}
          id="firstName"
          type="text"
          className="form-control"
        />
        {errors.firstName && (
          <p className="text-danger">{errors.firstName.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input
          {...register("lastName")}
          id="lastName"
          type="text"
          className="form-control"
        />
        {errors.lastName && (
          <p className="text-danger">{errors.lastName.message}</p>
        )}
      </div>
      <button disabled={!isValid} className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default GroupForm;
