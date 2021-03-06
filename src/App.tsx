import React, { useState } from "react";
import { saveAs } from "file-saver";

function App() {
    // Generating random avatar on login
    let text = "";

    const makeId = () => {
        let possible =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 5; i++)
            text += possible.charAt(
                Math.floor(Math.random() * possible.length)
            );

        return text;
    };
    if (text.length === 0) {
        makeId();
    } else {
    }
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState("");
    const [avatar, setAvatar] = useState(text);
    const [avatarCategory, setAvatarCategory] = useState("adventurer");
    const apiPic = `https://avatars.dicebear.com/api/${avatarCategory}/${avatar}.svg`;

    // Toggles the avatar input
    const showAvatarDetails = () => {
        setOpen(!open);
    };
    // Changes the avatar
    const handleAvatar = () => {
        setAvatar(user);
        setUser("");
    };

    const saveFile = () => {
        console.log(apiPic);
        saveAs(apiPic, `${avatar}.svg`);
    };
    return (
        <>
            <div>
                <div className="md:grid md:grid-cols-3 md:gap-6 mt-10">
                    <div className="hidden sm:block" aria-hidden="true"></div>
                    <div className="mt-10 sm:mt-0">
                        <div className="mt-20 mb-10 sm:mt-0">
                            <h1 className="text-3xl font-bold ">
                                Choose your avatar
                            </h1>
                        </div>
                        <div className="mt-5 md:mt-0 md:col-span-2">
                            <form action="#" method="POST">
                                <div className="shadow sm:rounded-md sm:overflow-hidden">
                                    <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Photo
                                            </label>
                                            <div className="mt-1 flex items-center">
                                                <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-blue-100">
                                                    <img
                                                        src={apiPic}
                                                        alt="avatar"
                                                    />
                                                </span>
                                                <button
                                                    onClick={showAvatarDetails}
                                                    type="button"
                                                    className=" duration-300 ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                >
                                                    {open ? " Clear" : "Change"}
                                                </button>
                                            </div>
                                        </div>
                                        {open ? (
                                            <>
                                                <div className="mt-5 md:mt-0 md:col-span-2 duration-300">
                                                    <div className="shadow overflow-hidden sm:rounded-md">
                                                        <div className="px-4 py-5 bg-white sm:p-6">
                                                            <div className="grid grid-cols-6 gap-6">
                                                                <div className="col-span-6 sm:col-span-3">
                                                                    <label
                                                                        htmlFor="first-name"
                                                                        className="block text-sm font-medium text-gray-700"
                                                                    >
                                                                        Avatar
                                                                        category
                                                                    </label>
                                                                    <select
                                                                        value={
                                                                            avatarCategory
                                                                        }
                                                                        onChange={(
                                                                            e
                                                                        ) => {
                                                                            setAvatarCategory(
                                                                                e
                                                                                    .target
                                                                                    .value
                                                                            );
                                                                        }}
                                                                        id="countries"
                                                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                                    >
                                                                        <option
                                                                            selected
                                                                        >
                                                                            Choose
                                                                            a
                                                                            category
                                                                        </option>
                                                                        <option value="adventurer">
                                                                            adventurer
                                                                        </option>
                                                                        <option value="adventurer-neutral">
                                                                            adventurer-neutral
                                                                        </option>
                                                                        <option value="avataaars">
                                                                            avataaars
                                                                        </option>
                                                                        <option value="big-ears">
                                                                            big-ears
                                                                        </option>
                                                                        <option value="big-ears-neutral">
                                                                            big-ears-neutral
                                                                        </option>
                                                                        <option value="big-smile">
                                                                            big-smile
                                                                        </option>
                                                                        <option value="bottts">
                                                                            bottts
                                                                        </option>
                                                                        <option value="croodles">
                                                                            croodles
                                                                        </option>
                                                                        <option value="croodles-neutral">
                                                                            croodles-neutral
                                                                        </option>
                                                                        <option value="identicon">
                                                                            identicon
                                                                        </option>
                                                                        <option value="initials">
                                                                            initials
                                                                        </option>
                                                                        <option value="micah">
                                                                            micah
                                                                        </option>
                                                                        <option value="miniavs">
                                                                            miniavs
                                                                        </option>
                                                                        <option value="open-peeps">
                                                                            open-peeps
                                                                        </option>
                                                                        <option value="personas">
                                                                            personas
                                                                        </option>
                                                                        <option value="pixel-art">
                                                                            pixel-art
                                                                        </option>
                                                                        <option value="pixel-art-neutral">
                                                                            pixel-art-neutral
                                                                        </option>
                                                                    </select>
                                                                </div>
                                                                <div className="col-span-6 sm:col-span-3">
                                                                    <label
                                                                        htmlFor="first-name"
                                                                        className="block text-sm font-medium text-gray-700"
                                                                    >
                                                                        Avatar
                                                                        name
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name={
                                                                            user
                                                                        }
                                                                        onChange={(
                                                                            e
                                                                        ) => {
                                                                            setUser(
                                                                                e
                                                                                    .target
                                                                                    .value
                                                                            );
                                                                        }}
                                                                        id="first-name"
                                                                        autoComplete="given-name"
                                                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                                            <button
                                                                onClick={
                                                                    handleAvatar
                                                                }
                                                                type="button"
                                                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                            >
                                                                update
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700">
                                                        Here is your avatar
                                                    </label>
                                                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                        <div className="space-y-1 text-center">
                                                            <img
                                                                src={apiPic}
                                                                alt="avatar"
                                                            />

                                                            <p className="text-xs text-gray-500">
                                                                PNG, JPG, GIF up
                                                                to 10MB
                                                            </p>
                                                            <div className="py-5">
                                                                <p className="text-xs text-blue-400 ">
                                                                    File is
                                                                    downloaded
                                                                    as svg
                                                                </p>
                                                            </div>
                                                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                                                <button
                                                                    onClick={
                                                                        saveFile
                                                                    }
                                                                    type="button"
                                                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                >
                                                                    download
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div>
                                                    <div className="py-5">
                                                        <p className="text-sm text-gray-400 ">
                                                            You can generate
                                                            random avatars by
                                                            refreshing the page
                                                            or you can click the{" "}
                                                            <i className="text-blue-400 font-bold">change button</i>{" "}
                                                            and fill in random
                                                            string
                                                            characters/words to
                                                            get new ones
                                                        </p>
                                                    </div>
                                                    <label className="block text-sm font-medium text-gray-700">
                                                        Random avatar
                                                    </label>
                                                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                        <div className="space-y-1 text-center">
                                                            <img
                                                                src={apiPic}
                                                                alt="avatar"
                                                            />
                                                            {user.length >
                                                                0 && (
                                                                <h2>{user}</h2>
                                                            )}
                                                            <p className="text-xs text-gray-500">
                                                                PNG, JPG, GIF up
                                                                to 10MB
                                                            </p>
                                                            <div className="py-5">
                                                                <p className="text-xs text-blue-400 ">
                                                                    File is
                                                                    downloaded
                                                                    as svg
                                                                </p>
                                                            </div>
                                                            <button
                                                                onClick={
                                                                    saveFile
                                                                }
                                                                type="button"
                                                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                            >
                                                                download
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
