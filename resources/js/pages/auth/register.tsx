import { Link, useForm } from "@inertiajs/inertia-react";
import React from "react";
import Layout from "../../components/Layout";
import TextInput from "../../components/TextInput";
import useTitle from "../../lib/use-title";
import TextArea from "../../components/TextArea";

const Register: React.FC = () => {
  useTitle("Register");

  const { data, setData, post, processing, errors } = useForm({
    shop_name: "",
    address: "",
    phone: "",
    email: "",
    password: "",

    owner_name: "",
  });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => setData(e.target.name as never, e.target.value as never);

  return (
    <Layout links={[{ href: "/", label: "home" }]}>
      <div className="flex items-center justify-center h-full w-full px-5">
        <div className="bg-white w-full max-w-3xl p-5 rounded-lg shadow-sm">
          <div className="w-full flex items-center justify-start">
            <h1 className="text-xl font-bold">Register</h1>
          </div>

          <form
            onSubmit={(e: React.SyntheticEvent) => {
              e.preventDefault();
              post("/auth/register", {
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
                disabled={processing}
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
              <TextInput
                name="password"
                label="Password"
                placeholder="sup3rs3cr3tp4ssw0rd"
                type="password"
                className="my-4 w-full sm:w-1/2 sm:odd:pr-2 sm:even:pl-2"
                value={data.password}
                disabled={processing}
                error={errors.password}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-between flex-wrap">
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

              <TextArea
                name="address"
                label="Address"
                placeholder="Lajpat Rai Nagar"
                className="my-4 w-full sm:w-1/2 sm:odd:pr-2 sm:even:pl-2"
                value={data.address}
                disabled={processing}
                error={errors.address}
                onChange={(e) => setData("address", e.target.value)}
              />
            </div>
            <div className="input-group my-4 w-full max-w-sm mx-auto">
              <div className="text-center text-sm text-gray-800">
                Already have an account?{" "}
                <Link className="font-semibold" href="/auth/login">
                  Login
                </Link>
              </div>
            </div>

            <div className="input-group my-4 flex justify-center">
              <button
                type="submit"
                className="button w-full max-w-sm"
                disabled={processing}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
