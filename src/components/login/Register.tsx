import { useForm } from "react-hook-form";
import { RegisterData } from "../../types/credentials";
import { registerWithEmailAndPassword } from "../../utils/auth";

const Register = () => {
    const { register, handleSubmit } = useForm<RegisterData>();

    const registerCredentials = (data: RegisterData) => {
        registerWithEmailAndPassword(data);
    };

    return (
        <div className="w-full max-w-xs">
            <h1 className="uppercase text-3xl md:flex md:items-center mb-6">Register</h1>
            <form onSubmit={handleSubmit(registerCredentials)} className="w-full max-w-sm">
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="email">
                            Email
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="email"
                            type="email"
                            placeholder="Your email"
                            {...register("email", { required: true })}
                        />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="password">
                            Password
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="password"
                            type="password"
                            placeholder="Your password"
                            {...register("password", { required: true })}
                        />
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                        <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                            Register
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Register