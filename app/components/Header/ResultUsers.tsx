"use client";
import { User } from "@/app/helpers/types";
import { loadUsers } from "@/app/lib/store/slices/userSlice";
import { RootState } from "@/app/lib/store/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Results: React.FC<{ users: User[] }> = ({ users }) => {
  const dispatch = useDispatch();
  const stateUsers: User[] = useSelector(
    (state: RootState) => state.users.entities,
  );
  // Only load initial data if Redux store is empty
  useEffect(() => {
    if (!stateUsers?.length) {
      dispatch(loadUsers(users));
    }
  }, [dispatch, users, stateUsers]);

  // Always use Redux store for rendering
  return (
    <>
      {[...stateUsers]
        .reverse()
        .slice(0, 6)
        .map((user, index) => {
          if (!user?.id) return null; // تخطي العناصر التي ليس لديها معرف
          return (
            <div
              key={user.id || index}
              className="flex h-16 items-center border-b border-black50 p-4 text-xs font-medium text-fontcolor md:text-sm"
            >
              <p className="w-1/5">{user.FirstName}</p>
              <p className="w-1/5">{user.LastName}</p>
              <p className="w-1/5">{user.Phone}</p>
              <p className="line-clamp-4 w-2/5 pl-3">{user.Email}</p>
            </div>
          );
        })}
    </>
  );
};

export default Results;
