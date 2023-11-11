"use client";

import { Button } from "@/components/ui/button";
import { decrement, increment } from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useGetUsersQuery } from "@/redux/services/userApi";

const OffersPage = () => {
  const count = useAppSelector((state) => state.counterReducer.value);
  const dispatch = useAppDispatch();
  const { isLoading, isFetching, data, error } = useGetUsersQuery(null);
  return (
    <div>
      <h1>Offers</h1>
      <div>Count {count}</div>
      <div>
        <Button onClick={() => dispatch(increment())}>Add</Button>
        <Button onClick={() => dispatch(decrement())}>Minus</Button>
      </div>
      {error ? (
        <p>Oh no, there was an error</p>
      ) : isLoading || isFetching ? (
        <p>Loading...</p>
      ) : data ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: 20,
          }}
        >
          {data.map((user) => (
            <div
              key={user.id}
              style={{ border: "1px solid #ccc", textAlign: "center" }}
            >
              <img
                src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                alt={user.name}
                style={{ height: 180, width: 180 }}
              />
              <h3>{user.name}</h3>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default OffersPage;
