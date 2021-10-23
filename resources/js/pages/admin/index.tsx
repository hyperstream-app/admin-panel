import { Link, useForm, usePage } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import TextArea from "../../components/TextArea";
import TextInput from "../../components/TextInput";
import { IPageProps } from "../../lib/types";
import useTitle from "../../lib/use-title";

interface IAdminProps {}

const Admin: React.FC<IAdminProps> = ({}: IAdminProps) => {
  const {
    props: { authenticated, user },
  } = usePage<IPageProps>();
  authenticated ? useTitle(`ADMIN | ${user.shop_name}`) : useTitle("Home");

  const { data, setData, post, processing, errors } = useForm({
    shop_name: user.shop_name,
    address: user.address,
    phone: user.phone,
    email: user.email,
    // password: ,
    owner_name: user.owner_name,
  });

  const [changes, setChanges] = useState(false);

  useEffect(() => {
    if (
      !(
        user.shop_name === data.shop_name &&
        user.address === data.address &&
        user.phone === data.phone &&
        user.owner_name === data.owner_name
      )
    ) {
      setChanges(true);
    } else {
      setChanges(false);
    }
  }, [data]);

  const handleChange: React.ChangeEventHandler<any> = (
    e: React.ChangeEvent<any>
  ) => {
    setData(e.target.name as never, e.target.value as never);
  };

  return (
    <Layout links={[]}>
      <div className="flex items-center flex-col justify-center w-full px-5">
        <div className="text-center max-w-sm p-5">
          <h1 className="font-bold text-2xl border-b-2 pb-2 border-black">
            {`${user.shop_name} - ADMIN`}
          </h1>
        </div>
        <div className="flex justify-evenly items-center w-full h-full gap-x-7 flex-col lg:flex-row  ">
          <div className="bg-white  w-full max-w-md p-5 rounded-lg my-2">
            <div className="flex justify-evenly items-center w-full px-4">
              <Link className="button w-1/2 mx-1" href={`/admin/payments`}>
                Payments
              </Link>
              <Link className="button w-1/2  mx-1" href={`/admin/items`}>
                Items in Store
              </Link>
            </div>
          </div>
          <div className="bg-white w-full max-w-3xl p-5 rounded-lg shadow-sm">
            <div className="w-full flex items-center justify-start">
              <h1 className="text-xl font-bold">Edit Info.</h1>
            </div>

            <form
              onSubmit={(e: React.SyntheticEvent) => {
                e.preventDefault();
                post("/admin/user/update", {
                  preserveState: true,
                });
              }}
            >
              <div className="flex justify-between flex-wrap">
                <TextInput
                  name="shop_name"
                  label="Shop Name"
                  placeholder="Haldiram"
                  type="text"
                  className="my-4 w-full sm:w-1/2 sm:odd:pr-2 sm:even:pl-2"
                  value={data.shop_name}
                  disabled={processing}
                  error={errors.shop_name}
                  onChange={handleChange}
                />
                <TextInput
                  name="email"
                  label="Email"
                  placeholder="john@example.com"
                  type="email"
                  className="my-4 w-full sm:w-1/2 sm:odd:pr-2 sm:even:pl-2"
                  value={data.email}
                  disabled={true}
                  error={errors.email}
                  onChange={handleChange}
                />
              </div>
              <div className="flex justify-between flex-wrap">
                <TextInput
                  name="phone"
                  label="Phone"
                  placeholder="9898112233"
                  type="text"
                  className="my-4 w-full sm:w-1/2 sm:odd:pr-2 sm:even:pl-2"
                  value={data.phone}
                  disabled={processing}
                  error={errors.phone}
                  onChange={handleChange}
                />
                {/* <TextInput
                  name="password"
                  label="Password"
                  placeholder="sup3rs3cr3tp4ssw0rd"
                  type="password"
                  className="my-4 w-full sm:w-1/2 sm:odd:pr-2 sm:even:pl-2"
                  value={data.password}
                  disabled={processing}
                  error={errors.password}
                  onChange={handleChange}
                /> */}
                <TextInput
                  name="owner_name"
                  label="Owner Name"
                  placeholder="John Doe"
                  type="text"
                  className="my-4 w-full sm:w-1/2 sm:odd:pr-2 sm:even:pl-2"
                  value={data.owner_name}
                  disabled={processing}
                  error={errors.owner_name}
                  onChange={handleChange}
                />
              </div>
              <div className="flex justify-between flex-wrap">
                <TextArea
                  name="address"
                  label="Address"
                  placeholder="Lajpat Rai Nagar"
                  className="my-4 w-full sm:odd:pr-2 sm:even:pl-2"
                  value={data.address}
                  disabled={processing}
                  error={errors.address}
                  onChange={handleChange}
                  // onChange={(e) => setData("address", e.target.value)}
                />
              </div>
              {changes ? (
                <div className="input-group">
                  <div className="error text-center">Unsaved changes</div>
                </div>
              ) : (
                <div className="input-group">
                  <div className=" text-green-700 text-sm mt-2 text-center">
                    No Changes
                  </div>
                </div>
              )}
              <div className="input-group my-4 flex justify-center">
                <button
                  type="submit"
                  className="button w-full max-w-sm"
                  disabled={processing}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Admin;
