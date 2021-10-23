import { Link, usePage } from "@inertiajs/inertia-react";
import React from "react";
import Layout from "../components/Layout";
import { IPageProps } from "../lib/types";
import { Authenticated, Guest } from "../lib/authorization";
import useTitle from "../lib/use-title";

const Index: React.FC = () => {
  const {
    props: { authenticated, user },
  } = usePage<IPageProps>();
  authenticated ? useTitle(user.shop_name) : useTitle("Home");

  console.log(authenticated);
  console.log(user);
  return (
    <Layout links={[]}>
      <div className="flex items-center justify-center h-full w-full px-5">
        {/* <Guest> */}
        {!authenticated ? (
          <div className="bg-white w-full max-w-sm p-5 rounded-lg">
            <Link className="button my-3" href="/auth/login">
              Login
            </Link>
            <Link className="button my-3" href="/auth/register">
              Register
            </Link>
          </div>
        ) : (
          <div className="flex items-center flex-col justify-center w-full px-5">
            <div className="text-center max-w-sm p-5">
              <h1 className="font-bold text-2xl border-b-2 pb-2 border-black">
                {user.shop_name}
              </h1>
            </div>
            <div className="flex justify-evenly items-center w-full h-full ">
              <div className="flex items-center justify-center px-5">
                <img
                  src={`https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=${user.shop_id}&choe=UTF-8`}
                  alt=""
                />
              </div>
              <div className="bg-white w-full max-w-md p-5 rounded-lg">
                <div
                  style={{
                    whiteSpace: "pre-wrap",
                    wordWrap: "break-word",
                  }}
                >
                  {user.shop_name}
                  <br />
                  {user.owner_name}
                  <br />
                  {user.address}
                  <br />
                  {user.email}
                  <br />
                  {user.phone}
                  <br />
                  {user.shop_id}
                </div>
                <div className="mt-4">
                  <div className="flex justify-evenly items-center w-full px-4">
                    <Link className="button w-1/2 mb-4 mx-1" href="/admin">
                      Admin
                    </Link>
                    <Link
                      className="button w-1/2 mb-4 mx-1"
                      href="/admin/payments"
                    >
                      Payments
                    </Link>
                  </div>
                  <Link className="button w-full" href="/auth/logout">
                    Logout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* </Guest> */}
        {/* <Authenticated> */}
        {/* </Authenticated> */}
      </div>
    </Layout>
  );
};

export default Index;
